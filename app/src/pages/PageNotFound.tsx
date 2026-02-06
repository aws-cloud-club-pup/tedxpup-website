
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
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <Navbar />
      <main className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
        {/* Ambient red glow */}
        <div
          className="absolute w-[600px] h-[600px] rounded-full bg-tedx-red/15 blur-[120px] pointer-events-none"
          style={{
            transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
            transition: "transform 0.3s ease-out",
          }}
        />

        {/* Background decorative X marks */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <motion.div
            initial={{ opacity: 0, rotate: -12 }}
            animate={{ opacity: 0.05, rotate: -12 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="absolute -top-20 -right-20 text-tedx-red font-black select-none"
            style={{ fontSize: "40rem", lineHeight: 1 }}
          >
            X
          </motion.div>
          <motion.div
            initial={{ opacity: 0, rotate: 12 }}
            animate={{ opacity: 0.03, rotate: 12 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="absolute -bottom-32 -left-20 text-tedx-red font-black select-none"
            style={{ fontSize: "30rem", lineHeight: 1 }}
          >
            X
          </motion.div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
          {/* 404 Number */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-[8rem] md:text-[12rem] font-black leading-none tracking-tighter select-none">
              <span className="text-white">4</span>
              <span className="text-tedx-red">0</span>
              <span className="text-white">4</span>
            </h1>
          </motion.div>

          {/* Divider line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="w-24 h-1 bg-tedx-red mx-auto my-6 origin-center"
          />

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              PAGE <span className="text-tedx-red">NOT FOUND</span> YET.
            </h2>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-md mx-auto">
              Ideas worth spreading, but this page isn't one of them.
              The page you're looking for doesn't exist or has been moved.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              onClick={() => navigate("/")}
              className="px-8 py-4 text-base font-bold tracking-wider uppercase shadow-xl shadow-tedx-red/20"
            >
              Back to Home
            </Button>
            <Button
              variant="outline"
              onClick={() => navigate(-1)}
              className="px-8 py-4 text-base font-bold tracking-wider uppercase"
            >
              Go Back
            </Button>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PageNotFound;
