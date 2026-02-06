import { motion } from "framer-motion";
import logo from "../../assets/about/logos/tedxpup-white.webp";

const LoadingScreen = () => {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1.2, ease: "easeInOut" } }}
            className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
        >
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 1, 0.5],
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                <img
                    src={logo}
                    alt="TEDxPUP Loading"
                    className="w-32 md:w-48 h-auto object-contain"
                />
            </motion.div>
        </motion.div>
    );
};

export default LoadingScreen;
