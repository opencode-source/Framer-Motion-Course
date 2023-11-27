import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
}

const modalVariant = {
    hidden: {
        y: '-100vh',
        opacity: 0
    },
    visible: {
        y: '200px',
        opacity: 1,
        transition: {
            delay: 0.5
        }
    }
}

export default function Modal({ showModal, setShowModal }) {
    return (
        <AnimatePresence>
            {showModal && (
                <motion.div className="backdrop"
                    variants={backdropVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div className="modal"
                        variants={modalVariant}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                    >
                        <p>Want to Make another Pizza</p>
                        <Link to="/">
                            <button>Start Again</button>
                        </Link>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
