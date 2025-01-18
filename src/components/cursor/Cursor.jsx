import React, { useState, useEffect } from "react";
import "./cursor.scss";
import {motion} from "framer-motion";

const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const mousemove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", mousemove);

        return () => {
            window.removeEventListener("mousemove", mousemove);
        };
    }, []); // Add an empty dependency array to run the effect only once

    console.log(position);

    return (
        <motion.div className="cursor" animate={{x:position.x+10,y:position.y+10}}>
            {/* You can add content or styles to your custom cursor here */}
        </motion.div>
    );
};

export default Cursor;
