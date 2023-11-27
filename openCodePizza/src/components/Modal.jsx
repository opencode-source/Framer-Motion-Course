import { motion, AnimatePresence } from "framer-motion";

const backdropVariants = {
    hidden: { opacity:0 },
    visible: { opacity:1 }
}

export default function Modal({showModal, setShowModal}) {
  return (
    <AnimatePresence>
        {showModal && (
            <motion.div className="backdrop"
                variants={backdropVariants}
                initial="hidden"
                animate="visible"
            >

            </motion.div>
        )}
    </AnimatePresence>
  )
}
