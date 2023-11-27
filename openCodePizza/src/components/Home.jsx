import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Home() {
    return (
        <motion.div className="home container"
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            transition={{ delay:1, duration:2 }}
        >
            <motion.h2
                animate={{}}
            >
                Welcome to OpenCode Pizza
            </motion.h2>
            <Link to="/base">
                <motion.button
                    animate={{}}
                >
                    Create Your Pizza
                </motion.button>
            </Link>
        </motion.div>
    );
}
