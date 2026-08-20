Vagrant.configure("2") do |config|
  config.vm.box = "bento/ubuntu-24.04"
  config.vm.box_version = "202510.26.0"

  config.vm.hostname = "portfolio-server"
  config.vm.boot_timeout = 600

  # Portfolio website
  # Windows 8080 → Ubuntu 8080
  config.vm.network "forwarded_port",
                    guest: 8080,
                    host: 8080,
                    host_ip: "127.0.0.1",
                    id: "portfolio"

  # Jenkins
  # Windows 8081 → Ubuntu 8081
  config.vm.network "forwarded_port",
                    guest: 8081,
                    host: 8081,
                    host_ip: "127.0.0.1",
                    id: "jenkins"

  config.vm.provider "virtualbox" do |vb|
    vb.name = "miftahul-portfolio-server"
    vb.memory = 4096
    vb.cpus = 2
  end

  config.vm.provision "shell",
                      name: "install-devops-tools",
                      path: "vagrant/provision.sh"
end