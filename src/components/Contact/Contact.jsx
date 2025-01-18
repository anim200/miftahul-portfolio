import "./contact.scss";
import { useRef, useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

emailjs.init("SUD7yeIwlBKy3cjdA");

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const formRef = useRef(null);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleFocus = (event) => {
    event.target.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wxlalk1",
        "template_2ova8zq",
        e.target,
        "SUD7yeIwlBKy3cjdA"
      )
      .then(
        () => {
          setSuccess(true);
          setTimeout(() => setSuccess(false), 5000); // Hide message after 5 seconds
        },
        () => {
          setError(true);
        }
      );
  };

  return (
    <motion.div
      ref={formRef}
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.h1>
          Let's Work
          <br /> Together
        </motion.h1>
        <motion.div className="item">
          <h2>Mail</h2>
          <span>animislam2000@gmail.com</span>
        </motion.div>
        <motion.div className="item">
          <h2>Address</h2>
          <span>13/2, West End Street, Central Road, Dhanmondi, Dhaka-1205</span>
        </motion.div>
        <motion.div className="item">
          <h2>Phone</h2>
          <span>+8801939677373</span>
        </motion.div>
      </motion.div>

      <div className="formContainer">
        <motion.form
          onSubmit={sendEmail}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <input
            type="text"
            required
            placeholder="Name"
            name="name"
            onFocus={handleFocus}
          />
          <input
            type="email"
            required
            placeholder="Enter Your Email Address here"
            name="email"
            onFocus={handleFocus}
          />
          <textarea
            rows={8}
            placeholder="Message"
            name="message"
            onFocus={handleFocus}
          />
          <button>Submit</button>
          {success && (
            <p className="success-message">Your email has been sent successfully!</p>
          )}
          {error && (
            <p className="error-message">An error occurred. Please try again.</p>
          )}
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;

