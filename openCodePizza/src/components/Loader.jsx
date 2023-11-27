import { motion } from 'framer-motion';

const loaderVariants = {
    animationOne: {
        x: [-20, 20],
        y: [0, -30],
        transition: {
            x: {
                duration: 0.5,
                repeatType: "mirror",
                repeat: Infinity
            },
            y: {
                duration: 0.25,
                repeatType: "mirror",
                repeat: Infinity,
                ease: 'easeOut'
            }
        }
    }
}

export default function Loader() {
    return (
        <motion.div className="loader"
            variants={loaderVariants}
            animate="animationOne"
        >

        </motion.div>
    )
}
