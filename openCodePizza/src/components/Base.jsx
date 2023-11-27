import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Base({ addBase, pizza }) {
    const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

    return (
        <motion.div className="base container"
            initial={{ x:'100vw' }}
            animate={{ x:0 }}
            transition={{ type:'spring', delay:0.5 }}
        >

            <h3>Step 1: Choose Your Base</h3>
            <ul>
                {bases.map(base => {
                    let spanClass = pizza.base === base ? 'active' : '';
                    return (
                        <li key={base} onClick={() => addBase(base)}>
                            <span className={spanClass}>{base}</span>
                        </li>
                    )
                })}
            </ul>

            {pizza.base && (
                <motion.div className="next"
                    initial={{ x:'-100vw' }}
                    animate={{ x:0 }}
                    transition={{type:'spring', stiffness:110}}
                >
                    <Link to="/">
                        <button>Back</button>
                    </Link>
                    <Link to="/toppings">
                        <button>Next</button>
                    </Link>
                </motion.div>
            )}

        </motion.div>
    );
}
