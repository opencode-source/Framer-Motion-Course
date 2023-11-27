import { motion, useCycle } from 'framer-motion';

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
    },
    animationTwo: {
        y: [0, -40],
        x: 0,
        transition: {
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

    const [animation, cycleAnimation] = useCycle("animationOne", "animationTwo")

    setTimeout(() => {
        cycleAnimation()
    }, 3000)

    return (
        <>
            <motion.div className="loader"
                variants={loaderVariants}
                animate={animation}
            >

            </motion.div>

            <div onClick={() => cycleAnimation() }>Cycle Loader</div>
        </>
    )
}
