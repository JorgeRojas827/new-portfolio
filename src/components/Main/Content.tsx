import Puntos from "../../assets/puntos.png";
import MainImg from "../../assets/main-img.jpg";
import { motion } from "framer-motion";
import { SocialMedia } from "../SocialMedia";
import { BsArrowDownShort } from "react-icons/bs";
import { fadeDown, buttonAnimation } from "../../helpers/Animations";
import { name } from "../../helpers/Resources";

export const Content = () => {
  return (
    <main className="w-full md:h-5/6 flex relative flex-col md:flex-row justify-around items-center md:mt-0 mt-8">
      <div id="main-text" className="pb-10">
        <motion.div
          initial="hidden"
          animate="visible"
          className="flex items-center space-x-2"
          variants={fadeDown}
        >
          <div className="w-5 border-t border-black"></div>
          <p className="font-poppins">Hey there, I'm</p>
        </motion.div>
        <motion.div
          variants={fadeDown}
          initial="hidden"
          animate="visible"
          id="top-text"
          className="flex flex-col mt-3 mb-3"
        >
          <span className="font-anton md:text-7xl text-6xl ">Jorge Rojas</span>
        </motion.div>
        <motion.h3
          className="font-poppins text-2xl font-medium"
          initial="hidden"
          animate="visible"
          variants={fadeDown}
        >
          Frontend developer
        </motion.h3>
        <motion.div
          variants={fadeDown}
          initial="hidden"
          animate="visible"
          id="sub-text"
          className="font-poppins text-lg mt-6"
        >
          I'm glad you're here, take a look <br /> to my projects.
        </motion.div>
        <motion.div
          id="buttons"
          variants={fadeDown}
          initial="hidden"
          animate="visible"
          className="flex md:flex-row flex-col md:justify-start justify-center items-center"
        >
          <motion.a
            href="mailto:jorgerojaspoma09@gmail.com"
            className="px-16 py-2 h-14 bg-black text-white mt-10 text-lg flex items-center font-semibold rounded-full"
            variants={buttonAnimation}
            whileHover="hover"
            whileTap="tap"
          >
            Say hello!
          </motion.a>
          <motion.a
            href="src/assets/cv_jorgerojas.pdf"
            target="_blank"
            className="px-12 mt-5 py-2 h-14 border flex md:hidden items-center border-black text-lg font-semibold rounded-full"
            variants={buttonAnimation}
            whileHover="hover"
            whileTap="tap"
          >
            Download CV
          </motion.a>
        </motion.div>
        <motion.div
          variants={fadeDown}
          initial="hidden"
          animate="visible"
          className="md:flex flex-col hidden items-center absolute left-10 bottom-10 rounded-2xl border border-black w-6 h-10"
        >
          <motion.div
            className="w-1 h-2 rounded-full bg-black mt-2"
            animate={{
              opacity: 0,
              y: 16,
              transition: {
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut",
              },
            }}
          ></motion.div>
        </motion.div>
      </div>
      <motion.div
        variants={fadeDown}
        initial="hidden"
        animate="visible"
        id="main-image"
        className="relative md:mt-0 mt-6"
      >
        <picture>
          <img className="w-80 rounded-full" src={MainImg} alt="MainImg" />
          <img
            className="w-40 h-40 absolute -top-6 -left-4"
            src={Puntos}
            alt="MainImg"
          />
          <img
            className="w-40 h-40 absolute -bottom-8 right-0"
            src={Puntos}
            alt="MainImg"
          />
        </picture>
      </motion.div>
      <SocialMedia location="right" />
    </main>
  );
};
