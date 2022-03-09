import React from "react";
import { motion } from "framer-motion";
import { socialIcon } from "../helpers/Animations";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

interface IProps {
  location: string;
}

export const SocialMedia = ({ location }: IProps) => {
  return (
    <div
      id="social-media"
      style={
        location == "left"
          ? {
              left: 40,
            }
          : {
              right: 40,
            }
      }
      className="md:flex absolute flex-col items-center space-y-5 bottom-20 hidden"
    >
      <motion.div
        whileInView={{
          height: 224,
          transition: {
            duration: 1.2,
            ease: "easeInOut",
          },
        }}
        viewport={{ once: true }}
        className="h-0 border-l border-black"
      ></motion.div>
      <div className="flex flex-col space-y-5 text-xl">
        <motion.a
          animate="default"
          whileTap="clicked"
          whileHover="hovered"
          variants={socialIcon}
          custom={-5}
          href="https://github.com/JorgeRojas827"
          target="_blank"
        >
          <BsGithub />
        </motion.a>
        <motion.a
          animate="default"
          whileHover="hovered"
          whileTap="clicked"
          variants={socialIcon}
          custom={5}
          href="https://www.instagram.com/jorgerojas_027/"
          target="_blank"
        >
          <BsInstagram />
        </motion.a>
        <motion.a
          animate="default"
          whileTap="clicked"
          whileHover="hovered"
          variants={socialIcon}
          custom={-5}
          href="https://www.linkedin.com/in/jorge-rojas-94346a1bb/"
          target="_blank"
        >
          <BsLinkedin />
        </motion.a>
      </div>
    </div>
  );
};
