import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/features/Navbar";
import Footer from "../components/features/Footer";
import Button from "../components/ui/Button";

const PageNotFound = () => {
  const navigate = useNavigate();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Floating particles animation data
  const particles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    delay: Math.random() * 2,
    duration: Math.random() * 10 + 15,
  }));

  return (
    <>
      <Navbar />
      <main className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
        {/* Animated gradient background */}
        <motion.div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${50 + mousePos.x / 10}% ${50 + mousePos.y / 10}%, #e62b1f 0%, transparent 50%)`,
          }}
        />

        {/* Ambient red glows - multiple layers */}
        <motion.div
          className="absolute w-[800px] h-[800px] rounded-full bg-tedx-red/20 blur-[150px] pointer-events-none"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
          }}
        />

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute rounded-full bg-tedx-red/30"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: particle.size,
                height: particle.size,
              }}
              animate={{
                y: [-20, -100, -20],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
                ease: "linear",
              }}
            />
          ))}
        </div>

        {/* Background decorative X marks */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <motion.div
            initial={{ opacity: 0, rotate: -12, scale: 0.8 }}
            animate={{ opacity: 0.06, rotate: -12, scale: 1 }}
            transition={{ duration: 2, delay: 0.3, ease: "easeOut" }}
            className="absolute -top-20 -right-20 text-tedx-red font-black select-none"
            style={{ fontSize: "40rem", lineHeight: 1 }}
          >
            X
          </motion.div>
          <motion.div
            initial={{ opacity: 0, rotate: 12, scale: 0.8 }}
            animate={{ opacity: 0.04, rotate: 12, scale: 1 }}
            transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
            className="absolute -bottom-32 -left-20 text-tedx-red font-black select-none"
            style={{ fontSize: "30rem", lineHeight: 1 }}
          >
            X
          </motion.div>
        </div>

        {/* Geometric grid lines */}
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(#e62b1f 1px, transparent 1px),
              linear-gradient(90deg, #e62b1f 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
          }} />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          {/* TEDx prefix label */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 border border-tedx-red/30 text-tedx-red text-sm font-bold tracking-[0.3em] uppercase backdrop-blur-sm">
              Error
            </span>
          </motion.div>

          {/* 404 Number with enhanced styling */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <h1 className="text-[10rem] md:text-[14rem] lg:text-[18rem] font-black leading-none tracking-tighter select-none relative">
              <motion.span 
                className="inline-block text-white"
                whileHover={{ scale: 1.1, color: "#e62b1f" }}
                transition={{ duration: 0.3 }}
              >
                4
              </motion.span>
              <motion.span 
                className="inline-block text-tedx-red relative"
                animate={{ 
                  textShadow: [
                    "0 0 20px rgba(230, 43, 31, 0.5)",
                    "0 0 40px rgba(230, 43, 31, 0.8)",
                    "0 0 20px rgba(230, 43, 31, 0.5)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.1 }}
              >
                0
              </motion.span>
              <motion.span 
                className="inline-block text-white"
                whileHover={{ scale: 1.1, color: "#e62b1f" }}
                transition={{ duration: 0.3 }}
              >
                4
              </motion.span>
            </h1>
            
            {/* Glowing underline */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 md:w-40 h-1 bg-gradient-to-r from-transparent via-tedx-red to-transparent origin-center"
            />
          </motion.div>

          {/* Animated divider with dots */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex items-center justify-center gap-2 my-10"
          >
            <motion.div
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0 }}
              className="w-2 h-2 rounded-full bg-tedx-red"
            />
            <motion.div
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
              className="w-2 h-2 rounded-full bg-tedx-red"
            />
            <motion.div
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
              className="w-2 h-2 rounded-full bg-tedx-red"
            />
          </motion.div>

          {/* Message with enhanced typography */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-5"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              This Page Is{" "}
              <span className="relative inline-block">
                <span className="text-tedx-red">Out of Ideas</span>
                <motion.span
                  className="absolute -bottom-2 left-0 w-full h-1 bg-tedx-red"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 1.3 }}
                />
              </span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-xl mx-auto font-light">
              Ideas worth spreading, but this page isn't one of them.
              <br />
              <span className="text-gray-500 text-base mt-2 block">
                The page you're looking for doesn't exist or has been moved.
              </span>
            </p>
          </motion.div>

          {/* CTA Buttons with enhanced styling */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5"
          >
            <Button
              onClick={() => navigate("/")}
              className="group px-10 py-5 text-base font-bold tracking-wider uppercase shadow-2xl shadow-tedx-red/30 hover:shadow-tedx-red/50 transition-all duration-300"
            >
              <span className="flex items-center gap-3">
                <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Back to Home
              </span>
            </Button>
            <Button
              variant="outline"
              onClick={() => navigate(-1)}
              className="group px-10 py-5 text-base font-bold tracking-wider uppercase hover:bg-white/5 transition-all duration-300"
            >
              <span className="flex items-center gap-3">
                <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Go Back
              </span>
            </Button>
          </motion.div>

        </div>
        
      </main>
      <Footer />
    </>
  );
};

export default PageNotFound;
