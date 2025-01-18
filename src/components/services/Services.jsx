import { useRef } from "react";
import "./services.scss"
import {color, motion,useInView} from "framer-motion"
const variants={
    initial:{
        x:-500,
        y:100,
        opacity:0
    },
    animate:{
        x:0,
        opacity:1,
        y:0,
        transition:{
            duration:1,
            staggerChildren: 0.1,
        }

    }
}

export default function Services() {
    const ref=useRef();
    const isInView=useInView(ref,{margin:"-100px"});

  return (
    <motion.div className="services" variants={variants} initial="initial" ref={ref} animate={ "animate"}>
        <motion.div className="textContainer" variants={variants}>
            <p>focused on helping your brand grow<br/> and move forward</p>
            <hr/>
        </motion.div>
        <motion.div className="titleContainer" variants={variants}>
            <div className="title">
                <img src="/mern2.jpg" alt=""/>
                <h1><motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas</h1>
            </div>
            <div className="title">
                
                <h1><motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business</h1>
                <button>WHAT WE DO?</button>
            </div>
  </motion.div>
  <motion.div className="listContainer" variants={variants}>
  <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
    <h2>Full-Stack Development</h2>
    <p>
      Specializing in the MERN stack (MongoDB, Express.js, React, Node.js), we build scalable, high-performance web applications tailored to your business needs. From backend APIs to seamless user interfaces, we deliver end-to-end solutions.
    </p>
 
  </motion.div>
  <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
    <h2>State Management with Redux</h2>
    <p>
      Expert in implementing Redux for efficient state management. Whether it's handling complex application states or ensuring smooth user interactions, we make your web apps faster and more reliable.
    </p>
  
  </motion.div>
  <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
    <h2>Next.js Expertise</h2>
    <p>
      Leveraging Next.js for server-side rendering and static site generation, we enhance your application's performance and SEO, ensuring a smooth user experience and faster load times.
    </p>
   
  </motion.div>
  <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
    <h2>Custom Web Solutions</h2>
    <p>
      From e-commerce platforms to custom dashboards, we create tailored web solutions that align with your brand's vision, combining creativity with technical expertise to drive growth.
    </p>
  
  </motion.div>
</motion.div>

      
    </motion.div>
  )
}
