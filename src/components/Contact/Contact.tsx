import { FiMail } from "react-icons/fi";
import { motion } from "framer-motion";
import {
  buttonAnimation,
  fadeUp,
  fadeUpBottom,
} from "../../helpers/Animations";
import { SocialMedia } from "../SocialMedia";

export const Contact = () => {
  return (
    <div
      id="contact"
      className="w-screen h-screen relative flex justify-center items-center"
    >
      <div className="flex flex-col items-center">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          viewport={{ once: true }}
          whileInView="visible"
          className="font-anton text-6xl"
        >
          Contact
        </motion.h1>
        <motion.p
          variants={fadeUp}
          viewport={{ once: true }}
          initial="hidden"
          whileInView="visible"
          className="w-80 mt-6"
        >
          If you get interesed in me, I'll be glad to reply you soon to meet
          you!
        </motion.p>
        <motion.a
          href="mailto:jorgerojaspoma09@gmail.com"
          className="px-8 py-2 h-14 bg-black text-white mt-10 text-lg flex items-center font-semibold rounded-full"
          variants={buttonAnimation}
          viewport={{ once: true }}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          whileTap="tap"
        >
          <FiMail className="mr-5" />
          Greet me!
        </motion.a>
      </div>
      <SocialMedia location="left" />
      <motion.div
        variants={fadeUpBottom}
        initial="hidden"
        viewport={{ once: true }}
        whileInView="visible"
        id="credits"
        className="absolute bottom-8 right-10"
      >
        <p>
          Designed and built with{" "}
          <span className="hover:text-red-600 text-2xl duration-150">♥</span> by
          Jorge Rojas
        </p>
      </motion.div>
    </div>
  );
};
