import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./BackgroundOmnitrix.css";

const BackgroundOmnitrix = () => {
  const { scrollY } = useScroll();

  // animaciones simples y muy livianas
  const rotate = useTransform(scrollY, [0, 400], [0, 20]);
  const scale = useTransform(scrollY, [0, 400], [0.9, 1.1]);
  const opacity = useTransform(scrollY, [0, 400], [0.10, 0.25]);

  return (
    <motion.div
      className="omni-bg"
      style={{
        rotate,
        scale,
        opacity
      }}
    >
      <div className="omni-x"></div>
      <div className="omni-x invert"></div>
    </motion.div>
  );
};

export default BackgroundOmnitrix;
