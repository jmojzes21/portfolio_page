import "./Greeting.scss";
import { motion } from "motion/react";

export default function Greeting() {
  return (
    <div className="greeting-container">
      <div className="greeting">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="greeting-fullname">Josip Mojzeš</div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="greeting-description">
            Information and Software Engineering student
          </div>
        </motion.div>
      </div>
    </div>
  );
}
