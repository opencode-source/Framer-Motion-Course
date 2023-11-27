import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

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
            delay: 0.5
        }
    },
    exit: {
        x: '-100vw',
        transition: {
            ease: 'easeInOut'
        }
    }
}

const nextVariants = {
    hidden: {
        x: '-100vw'
    },
    visible: {
        x: 0,
        transition: {
            type: 'spring',
            stiffness: 110
        }
    }
}

const buttonBackVariants = {
    visible: {
        marginRight: 10
    },
    hover: {
        scale: 1.1,
        textShadow: "0px 0px 8px rgb(255,255,255)",
        boxShadow: "0px 0px 8px rgb(255,255,255)",
        marginRight:10,
        transition: {
            // mirror | reverse | loop
            repeatType: "mirror",
            repeat: Infinity
        }
    }
}

const buttonNextVariants = {
    visible: {
        marginLeft: 10
    },
    hover: {
        scale: 1.1,
        textShadow: "0px 0px 8px rgb(255,255,255)",
        boxShadow: "0px 0px 8px rgb(255,255,255)",
        marginLeft:10,
        transition: {
            // mirror | reverse | loop
            repeatType: "mirror",
            repeat: Infinity
        }
    }
}

export default function Base({ addBase, pizza }) {
    const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

    return (
        <motion.div className="base container"
            variants={containerVariants}
            initial = "hidden"
            animate = "visible"
            exit="exit"
        >

            <h3>Step 1: Choose Your Base</h3>
            <ul>
                {bases.map(base => {
                    let spanClass = pizza.base === base ? 'active' : '';
                    return (
                        <motion.li key={base} onClick={() => addBase(base)}
                            whileHover={{ scale:1.3, color: '#f8e112', originX: 0 }}
                            transition={{ type:'spring', stiffness: 300}}
                        >
                            <span className={spanClass}>{base}</span>
                        </motion.li>
                    )
                })}
            </ul>

            {pizza.base && (
                <motion.div className="next"
                    variants={nextVariants}
                >
                    <Link to="/">
                        <motion.button
                            variants={buttonBackVariants}
                            animate = "visible"
                            whileHover = "hover"
                        >Back</motion.button>
                    </Link>
                    <Link to="/toppings">
                        <motion.button
                            variants={buttonNextVariants}
                            animate = "visible"
                            whileHover = "hover"
                        >Next</motion.button>
                    </Link>
                </motion.div>
            )}

        </motion.div>
    );
}
