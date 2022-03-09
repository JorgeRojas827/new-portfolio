import { Header } from "./Header";
import React, { useState } from "react";
import { Content } from "./Content";
import { AnimatePresence, motion } from "framer-motion";

export const Hero = () => {
  const [overlay, setOverlay] = useState<boolean>(false);

  return (
    <React.Fragment>
      <AnimatePresence>
        <motion.div
          className="w-full h-full"
          onAnimationComplete={() => setOverlay(true)}
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{
            opacity: 1,
            transition: {
              ease: [0.6, 0.01, -0.05, 0.95],
              duration: 0.6,
            },
          }}
        >
          {overlay && (
            <React.Fragment>
              <Header />
              <Content />
            </React.Fragment>
          )}
        </motion.div>
      </AnimatePresence>
    </React.Fragment>
  );
};
