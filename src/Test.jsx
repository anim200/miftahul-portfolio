import { motion } from "framer-motion";

export default function Test() {
    // Animation variations for visible and hidden states
    const variants = {
        visible: {
            opacity: 1,              // Make the item fully visible
            x: 100,                  // Move the item 100 pixels to the right
            transition: {
                staggerChildren: 1, // Stagger the animation of each item by 0.2 seconds
            },
        },
        hidden: {
            opacity: 0,              // Make the item completely invisible
        },
    };

    // An array of items you want to display
    const items = ["item1", "item2", "item3", "item4"];

    return (
        <div className="course">
            {/* Animated list */}
            <motion.ul variants={variants}initial="hidden" animate="visible">
               
                    {/* Mapping through items with staggered animation */}
                    {items.map((item) => (
                        <motion.li variants={variants} key={item}>
                            {item} {/* Display the item text */}
                        </motion.li>
                    ))}
                
            </motion.ul>
        </div>
    );
}
