import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Loader from './Loader';

const buttonVariants = {
    hover: {
        scale: 1.1,
        textShadow: "0px 0px 8px rgb(255,255,255)",
        boxShadow: "0px 0px 8px rgb(255,255,255)",
        transition: {
            duration: 0.3,
            // mirror | reverse | loop
            repeatType: "mirror",
            repeat: Infinity
        }
    }
}

const containerVariants = {
    hidden: {
        opacity: 0 
    },
    visible: {
        opacity: 1,
        transition: {
            delay: 1,
            duration: 2
        }
    },
    exit: {
        x: '-100vw',
        transition: {
            ease: 'easeInOut'
        }
    }
}

export default function Home() {
    return (
        <motion.div className="home container"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <motion.h2
                animate={{}}
            >
                Welcome to OpenCode Pizza
            </motion.h2>
            <Link to="/base">
                <motion.button
                    variants={buttonVariants}
                    whileHover = "hover"
                >
                    Create Your Pizza
                </motion.button>
            </Link>
            <Loader />
        </motion.div>
    );
}
