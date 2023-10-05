import { motion } from "framer-motion";

const AnimatedBackground = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="animated-background" // Agrega clases de estilo para el fondo animado
    >
      {/* Contenido de tu portafolio */}
    </motion.div>
  );
};

export default AnimatedBackground;
