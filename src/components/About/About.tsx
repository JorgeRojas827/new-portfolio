import AboutImg from "../../assets/about-img.jpg";
import Puntos from "../../assets/puntos.png";
import Icosaedro from "../../assets/icosaedro.svg";
import { motion } from "framer-motion";
import { fadeUpImage } from "../../helpers/Animations";
import { Logo } from "../Logo";
import {
  draw,
  fadeUp,
  techDivVariants,
  techTextVariants,
} from "../../helpers/Animations";

export const About = () => {
  return (
    <section id="aboutme" className="w-screen h-screen flex mt-96 md:mt-0">
      <div
        id="leftside-about"
        className="relative md:flex hidden justify-center items-center pt-56 w-1/3"
      >
        <picture className="flex justify-center items-center">
          <img src={Puntos} className="absolute w-40 h-40 -top-4 -left-16" />
          <img
            src={Puntos}
            className="absolute w-40 h-40 -bottom-32 right-32"
          />
          <motion.img
            variants={fadeUpImage}
            whileInView="visible"
            viewport={{ once: true }}
            initial="hidden"
            className="rounded-full rotate-270 absolute -left-56"
            src={AboutImg}
            alt="AboutImg"
          />
        </picture>
      </div>
      <div
        id="rightside-about"
        className="md:w-2/3 w-full flex flex-col md:pl-20 pl-8 justify-center md:pt-24 pt-6"
      >
        <motion.div id="top-about" className="flex items-center">
          <Logo />
          <motion.h1
            variants={fadeUp}
            whileInView="visible"
            viewport={{ once: true }}
            initial="hidden"
            className="font-anton text-5xl"
          >
            About me
          </motion.h1>
        </motion.div>
        <div id="bottom-about" className="md:mt-16 mt-10 md:w-4/6 text-lg">
          <motion.p
            variants={fadeUp}
            whileInView="visible"
            viewport={{ once: true }}
            initial="hidden"
            className="md:ml-8 pr-8"
          >
            I'm a Frontend Developer with all the desire to start providing real
            solutions for the world.
          </motion.p>
          <br />
          <motion.p
            variants={fadeUp}
            whileInView="visible"
            viewport={{ once: true }}
            initial="hidden"
            className="md:ml-10 pr-8"
          >
            I really like make well looked landing pages or web applications,
            each project for me is unique and require all my attention. I laugh
            and wonder every time I've to learn something new. The first for me
            is give a smooth user experience, and have a great time.
          </motion.p>
        </div>
        <motion.div id="techs" className="mt-8">
          <motion.h4
            variants={fadeUp}
            whileInView="visible"
            viewport={{ once: true }}
            initial="hidden"
            className="font-anton text-3xl md:ml-16"
          >
            Technologies:
          </motion.h4>
          <button className="flex flex-col mt-5 text-base">
            <motion.div
              variants={techDivVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              id="row"
              className="flex md:space-x-28 space-x-6"
            >
              <motion.div
                variants={techTextVariants}
                className="flex items-center md:pl-8 space-x-3"
              >
                <div className="w-4 border-t border-black"></div>
                <p>React JS</p>
              </motion.div>
              <motion.div
                variants={techTextVariants}
                className="flex items-center space-x-3"
              >
                <div className="w-4 border-t border-black"></div>
                <p>Redux</p>
              </motion.div>
              <motion.div
                variants={techTextVariants}
                className="flex items-center space-x-3"
              >
                <div className="w-4 border-t border-black"></div>
                <p>Prisma</p>
              </motion.div>
            </motion.div>
            <motion.div
              initial="hidden"
              variants={techDivVariants}
              whileInView="show"
              viewport={{ once: true }}
              id="row"
              className="flex md:space-x-20 space-x-6"
            >
              <motion.div
                variants={techTextVariants}
                className="flex items-center md:pl-4 space-x-3"
              >
                <div className="w-4 border-t border-black"></div>
                <p>Typescript</p>
              </motion.div>
              <motion.div
                variants={techTextVariants}
                className="flex items-center space-x-3"
              >
                <div className="w-4 border-t border-black"></div>
                <p>React Native</p>
              </motion.div>
              <motion.div
                variants={techTextVariants}
                className="flex items-center space-x-3"
              >
                <div className="w-4 border-t border-black"></div>
                <p>SQL</p>
              </motion.div>
            </motion.div>
            <motion.div
              initial="hidden"
              variants={techDivVariants}
              whileInView="show"
              viewport={{ once: true }}
              id="row"
              className="flex md:space-x-16 space-x-6"
            >
              <motion.div
                variants={techTextVariants}
                className="flex items-center space-x-3"
              >
                <div className="w-4 border-t border-black"></div>
                <p>TailwindCSS</p>
              </motion.div>
              <motion.div
                variants={techTextVariants}
                className="flex items-center space-x-3"
              >
                <div className="w-4 border-t border-black"></div>
                <p>Express</p>
              </motion.div>
              <motion.div
                variants={techTextVariants}
                className="flex items-center space-x-3 pl-8"
              >
                <div className="w-4 border-t border-black"></div>
                <p>Git</p>
              </motion.div>
            </motion.div>
          </button>
        </motion.div>
      </div>
    </section>
  );
};
