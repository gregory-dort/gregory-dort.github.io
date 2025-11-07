import { motion } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3, 
            delayChildren: 0.5, 
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
};


const Hero = () => {
    return (
        <section id = 'hero' className = "h-screen flex flex-col items-center justify-center bg-gray-50 border-b border-gray-200">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="max-w-4xl px-4"
            >
                <motion.img
                    variants={itemVariants}
                    src="/GregWC.jpg"
                    alt="Profile Picture"
                    className="w-150 h-120 rounded-full mx-auto mb-4"
                />
                <motion.h1
                    variants={itemVariants} 
                    className="text-4xl md:text-7xl text-center font-serif font-light tracking-wider mb-4 text-gray-800"
                >
                    Gregory Dort
                </motion.h1>
                <motion.h2
                    variants={itemVariants} 
                    className="text-3xl md:text-4xl text-center font-serif text-gray-800 mb-8"
                >
                    Software Engineer
                </motion.h2>
                <motion.p 
                    variants={itemVariants} 
                    className="text-gray-600 text-center mb-8 text-lg"
                >
                    Passionate about creating innovative and user-friendly software solutions.
                </motion.p>
            </motion.div>
        </section>
    );
}

export default Hero;