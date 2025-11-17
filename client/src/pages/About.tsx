import { motion } from 'framer-motion';
import { SectionCard } from '../components';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.2,
        }
    }
};

const columnVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6 }
    }
};

const About = () => {
    return (
        <section id = "about" className = "py-24 container mx-auto px-4">
            <motion.h1 
                    className="text-6xl font-serif mb-8 text-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
            >
                    About Me
            </motion.h1>

            <SectionCard>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5}}
                    className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16"
                >
                    {/* Left Column */}
                    <motion.div
                        variants={columnVariants}
                        className="pr-8"
                    >
                        <motion.h2
                            className="text-3xl font-serif font-bold mb-8 text-gray-800 text-center border-b pb-2"
                        >
                            My Engineering Journey
                        </motion.h2>
                        <motion.p>

                        </motion.p>
                    </motion.div>

                    {/* Right Column */}
                    <motion.div
                        variants={columnVariants}
                    >
                        <motion.h2
                            className="text-3xl font-serif font-bold mb-8 text-gray-800 text-center border-b pb-2"
                        >
                            My Creative Influence
                        </motion.h2>
                    </motion.div>

                </motion.div>
            </SectionCard>
        </section>
    )
}

export default About;