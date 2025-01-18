import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
    initial: { x: -500, opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { duration: 1, staggerChildren: 0.1 } },
    scrollButton: { opacity: 0, y: 10, transition: { duration: 2, repeat: Infinity } },
};

const sliderVariants = {
    initial: { x: 0 },
    animate: { x: "-220%", transition: { repeat: Infinity, repeatType: "mirror", duration: 20 } },
};

export default function Hero() {
    return (
        <div className="hero">
            <div className="wrapper">
                <motion.div
                    className="textContainer"
                    variants={textVariants}
                    initial="initial"
                    animate="animate"
                >
                    <motion.h2 variants={textVariants}>Miftahul Islam</motion.h2>
                    <motion.h1 variants={textVariants}>Full Stack Web Developer</motion.h1>
                    <motion.div variants={textVariants} className="buttons">
                        <motion.a
                            variants={textVariants}
                            href="#Portfolio"
                            className="button"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            See the Latest Works
                        </motion.a>
                        <motion.a
                            variants={textVariants}
                            href="#Contact"
                            className="button"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Contact Me
                        </motion.a>
                    </motion.div>
                    <motion.img
                        variants={textVariants}
                        animate="scrollButton"
                        src="/scroll.png"
                        alt="Scroll Icon"
                    />
                </motion.div>
            </div>
            <motion.div
                className="slidingTextContainer"
                variants={sliderVariants}
                initial="initial"
                animate="animate"
            >
                Full Stack Web Developer
            </motion.div>
              <div className="imageContainer">
                <img src="/hero2.png" alt="Hero Image" />
            </div>
         
        </div>
    );
}
