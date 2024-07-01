import { motion, } from "framer-motion";
function SlideAnimation({ direction, children }) {
  const cardVariants = {
    offscreen: {
      x: direction === "right" ? 1500 : -1000
    },
    onscreen: {
      x: 0,
      rotate: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };


  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.5 }}
    >
      <motion.div className="card" variants={cardVariants}>
        {children}
      </motion.div>

    </motion.div>
  )
}

export default SlideAnimation