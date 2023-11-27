import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from 'framer-motion';


const containerVariants = {
    hidden: {
        opacity: 0,
        x: '100vw'
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: 'spring',
            mass: 0.4,
            damping: 8,
            when: 'beforeChildren',
            staggerChildren: 0.4
        }
    }
}

const childVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1
    }
}

export default function Order({ pizza, setShowModal }) {

    useEffect(() => {
        setTimeout(() => {
            setShowModal(true)
        }, 4000)
    }, [setShowModal])

    return (
        <motion.div className="container order"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <h2>Thank you for your order :)</h2>

            <motion.p
                variants={childVariants}
            >You ordered a <strong>{pizza.base}</strong> pizza with:</motion.p>
            <motion.div
                variants={childVariants}
            >
                {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
            </motion.div>
        </motion.div>
    )
}
