import Puntos from "../../assets/puntos.png";
import Fondo from "../../assets/imagen-negra.png";
import Icosaedro from "../../assets/icosaedro.svg";
import { BsGithub } from "react-icons/bs";
import { MdOpenInNew } from "react-icons/md";
import { motion } from "framer-motion";
import { fadeUp, fadeUpProjectImage } from "../../helpers/Animations";
import "./Project.css";
import { useState } from "react";

interface IProps {
  title: string;
  description: string;
  redireccion: string;
  muestra: string;
  img: string;
  role: string;
  tech: string;
}

export const Project = ({
  title,
  description,
  redireccion,
  muestra,
  img,
  role,
  tech,
}: IProps) => {
  const [saturate, setSaturate] = useState("saturate(0)");
  return (
    <div className="w-full h-full flex flex-col md:mt-10 mt-5">
      <motion.div
        variants={fadeUp}
        whileInView="visible"
        viewport={{ once: true }}
        initial="hidden"
        className="flex items-center space-x-3 md:ml-20 ml-7"
      >
        <picture>
          <img src={Icosaedro} alt="Logo personal" className="w-10 mr-3" />
        </picture>
        <h1 className="font-anton text-2xl">{title}</h1>
      </motion.div>
      <div className="flex md:ml-20 ml-7 mt-3 md:w-3/4 w-4/5">
        <motion.p
          variants={fadeUp}
          whileInView="visible"
          viewport={{ once: true }}
          initial="hidden"
        >
          {description}
        </motion.p>
      </div>
      <div
        id="role"
        className="flex flex-col  justify-center items-center mt-5 md:mt-0 md:items-start md:flex-row md:justify-around"
      >
        <motion.div
          variants={fadeUp}
          whileInView="visible"
          viewport={{ once: true }}
          initial="hidden"
          className="flex items-center flex-col ml-7 md:ml-0 md:flex-row"
        >
          <span className="font-medium self-start md:self-center">
            Role: {role} |
          </span>
          <p className="md:ml-2"> {tech}</p>
        </motion.div>
        <motion.div
          variants={fadeUp}
          whileInView="visible"
          viewport={{ once: true }}
          initial="hidden"
          id="buttons"
          className="px-10 py-3 mt-4 md:mt-0 h-14 bg-black text-white text-lg flex space-x-8 items-center font-semibold rounded-full"
        >
          <a href={redireccion} target="_blank" className="">
            <BsGithub size={24} />
          </a>
          <a href={muestra} target="_blank">
            <MdOpenInNew size={24} />
          </a>
        </motion.div>
      </div>
      <div id="image" className="flex justify-center my-10 items-center">
        <motion.picture
          variants={fadeUpProjectImage}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="md:w-3/5 w-10/12 h-auto relative saturate-0 hover:saturate-100 duration-150 transition-all"
        >
          <img src={Puntos} className="absolute w-28 h-28 -bottom-10 -left-8" />
          <img
            src={Fondo}
            className="absolute w-full h-full rounded-lg z-50 opacity-50"
          />
          <img
            id="projectImg"
            src={img}
            alt={title}
            className="w-full rounded-lg "
          />
        </motion.picture>
      </div>
    </div>
  );
};
