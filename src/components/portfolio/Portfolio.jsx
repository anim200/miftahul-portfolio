import { useRef } from "react";
import "./portfolio.scss"
import {motion,useScroll,useSpring, useTransform} from "framer-motion";
import emailjs from '@emailjs/browser';

const items =[
    {
        "id": 1,
        "title": "Mystery Message using Next.js",
        "img": "https://i.imgur.com/klWjLuT.png",
        "desc": "Mystery Message is a Next.js app for sending and receiving anonymous messages via shareable links, offering a seamless, fast, and intuitive experience.",
        "link":"https://mystery-message-one.vercel.app/",
        "link2":"https://github.com/anim200/mystery-message"

    },
    
    
    {
        id:2,
        title:"Talkify-chat-app",
        img:"https://i.imgur.com/AHUIbpg.png",
        desc:"Talkify is a real-time chat app for seamless, engaging communication. Connect with friends, share emojis and images, and enjoy real-time messaging with privacy controls. Featuring a modern UI and robust backend, Talkify ensures a secure and delightful chat experience.",
        link:"https://talkify-chat-app-cyan.vercel.app/",
        link2:"https://github.com/anim200/Talkify-chat-app"
    },
    {
        id:3,
        title:"Booking App",
        img:"https://i.imgur.com/rBHtwkT.png",
        desc:"Travel World is a user-friendly booking app for seamless travel planning. Search and filter tours, explore featured options, book effortlessly, and share reviews with ratings and comments. Combining elegant design and robust functionality, Travel World makes planning memorable journeys simple and enjoyable.",
        link:"https://tour-booking-frontend-gamma.vercel.app/",
        link2:"https://github.com/anim200/Tour-booking"
    },
    {
        id:4,
        title:"Ecommerce Site",
        img:"https://i.imgur.com/WIe1Vvv.png",
        desc:"Clickart is a modern and user-friendly e-commerce platform designed to provide a seamless shopping experience for users. This platform allows customers to browse through a variety of categories, filter products, view detailed product descriptions, and make purchases securely using Stripe payment. The admin dashboard offers a comprehensive overview of revenue, sales, user analytics, and product management.",
        link:"https://clickart-frontend.vercel.app/",
        link2:"https://github.com/anim200/Clickart"
    },
    {
        id:5,
        title:"Social Site",
        img:"https://i.imgur.com/TL0w0r7.png",
        desc:"Alapcharita is a social media platform enabling users to create profiles, share posts, and interact through likes and reactions. With a friend/follow system and intuitive newsfeed, it offers a seamless, user-friendly experience for connecting and engaging online.",
        link:"",
        link2:"https://github.com/anim200/Alapcharita-a-social-clone"
    },
    {
        "id": 6,
        "title": "CUET FERIWALA",
        "img": "https://i.imgur.com/ydKXlKa.png",
        "desc": "CUET FERIWALA is a C2C platform where users can buy and sell products directly. Sellers can post items, and buyers can contact them via chat to negotiate or inquire. The platform includes an admin dashboard for site management.",
        "link": null,
        "link2": "https://github.com/anim200/Feriwala"
    }
    
   

]
const Single = ({ item }) => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt={item.title} />
                    </div>
                    <motion.div className="textContainer" style={{ y }}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <div className="blinks">
                            {item.link && (
                                <a
                                    href={item.link}
                                    style={{ margin: "auto", marginRight: "10px" }}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <button>Website Link</button>
                                </a>
                            )}
                            <a
                                href={item.link2}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button>GitHub Link</button>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default function Portfolio() {
    const ref=useRef()
    const {scrollYProgress}=useScroll({target:ref,offset:["end end","start start"]});
    const scaleX=useSpring(scrollYProgress,{
        stiffness:100,
        damping: 30,

    })

  return (
    <div className="portfolio" ref={ref}>
        <div className="progress">
            <h1>Featured Works</h1>
            <motion.div style={{ scaleX: scaleX}}className="progressBar">

            </motion.div>
        </div>
    {
        items.map(item=>(
            <Single item={item} key={item.id}/>
        ))
    }
      
    </div>
  )
}
