pipeline {
    agent any

    options {
        disableConcurrentBuilds()
        timestamps()
        timeout(time: 30, unit: 'MINUTES')
    }

    // Check GitHub for new commits approximately every 2 minutes
    triggers {
        pollSCM('H/2 * * * *')
    }

    environment {
        APP_NAME = 'miftahul-portfolio'
        DOCKERHUB_CREDENTIALS = 'dockerhub-credentials'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm

                script {
                    def commitId = sh(
                        script: 'git rev-parse --short=7 HEAD',
                        returnStdout: true
                    ).trim()

                    env.IMAGE_TAG = "${env.BUILD_NUMBER}-${commitId}"
                    env.LOCAL_IMAGE = "${env.APP_NAME}:${env.IMAGE_TAG}"
                }
            }
        }

        stage('Build') {
            steps {
                sh '''
                    docker build --pull \
                      --tag "$LOCAL_IMAGE" .
                '''
            }
        }

        stage('Tag') {
            steps {
                withCredentials([
                    usernamePassword(
                        credentialsId: env.DOCKERHUB_CREDENTIALS,
                        usernameVariable: 'DOCKERHUB_USERNAME',
                        passwordVariable: 'DOCKERHUB_TOKEN'
                    )
                ]) {
                    script {
                        env.IMAGE_REPOSITORY =
                            "${DOCKERHUB_USERNAME}/${env.APP_NAME}"
                    }

                    sh '''
                        docker tag "$LOCAL_IMAGE" \
                          "$IMAGE_REPOSITORY:$IMAGE_TAG"

                        docker tag "$LOCAL_IMAGE" \
                          "$IMAGE_REPOSITORY:latest"
                    '''
                }
            }
        }

        stage('Docker Hub Login') {
            steps {
                withCredentials([
                    usernamePassword(
                        credentialsId: env.DOCKERHUB_CREDENTIALS,
                        usernameVariable: 'DOCKERHUB_USERNAME',
                        passwordVariable: 'DOCKERHUB_TOKEN'
                    )
                ]) {
                    sh '''
                        echo "$DOCKERHUB_TOKEN" | \
                          docker login \
                          --username "$DOCKERHUB_USERNAME" \
                          --password-stdin
                    '''
                }
            }
        }

        stage('Push') {
            steps {
                sh '''
                    docker push "$IMAGE_REPOSITORY:$IMAGE_TAG"
                    docker push "$IMAGE_REPOSITORY:latest"
                '''
            }
        }
    }

    post {
        always {
            sh 'docker logout || true'
        }

        success {
            echo "Image pushed successfully: ${env.IMAGE_REPOSITORY}:${env.IMAGE_TAG}"
        }

        failure {
            echo 'Pipeline failed. Check the failed stage console output.'
        }
    }
}