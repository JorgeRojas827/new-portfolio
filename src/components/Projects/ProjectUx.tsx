import Fondo from "../../assets/imagen-negra.png";
import Icosaedro from "../../assets/icosaedro.svg";
import Fitsmart from "../../assets/fitsmart.png";
import Puntos from "../../assets/puntos.png";
import Vithit from "../../assets/vithit.png";
import Redention from "../../assets/redention.png";
import Soomy from "../../assets/soomy.png";
import Learnment from "../../assets/learnment.png";
import Dentist from "../../assets/dentist.png";
import { motion } from "framer-motion";
import { fadeUp, fadeUpProjectImageUX } from "../../helpers/Animations";

export const ProjectUx = () => {
  // TODO: Habilitar collage de proyectos
  // TODO: Verificar el responsive con las animaciones

  return (
    <div className="w-full h-full flex flex-col mt-10">
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
        <h1 className="font-anton text-2xl">As UI & UX designer</h1>
      </motion.div>
      <div className="flex flex-col md:ml-20 ml-7 mt-3 md:w-3/4 w-4/5">
        <motion.p
          variants={fadeUp}
          whileInView="visible"
          viewport={{ once: true }}
          initial="hidden"
        >
          I also participated in a challenge carried out by Flux Academy, which
          consisted of making the prototype of the main section of a web page in
          less than 1 hour for 30 days, I enjoyed it!
        </motion.p>
        <br />
        <motion.p
          variants={fadeUp}
          whileInView="visible"
          viewport={{ once: true }}
          initial="hidden"
        >
          These are the best 5 desings I made:{" "}
        </motion.p>
      </div>
      <br />
      <motion.div
        variants={fadeUp}
        whileInView="visible"
        viewport={{ once: true }}
        initial="hidden"
        id="role"
        className="flex md:ml-20 ml-7"
      >
        <div className="flex items-center">
          <span className="font-medium">Role: UI Designer | </span>
          <p className="ml-2">Figma</p>
        </div>
      </motion.div>
      <div
        id="collage"
        className="flex justify-center md:my-32 my-10 items-center"
      >
        <motion.picture
          variants={fadeUpProjectImageUX}
          viewport={{ once: true }}
          initial="hidden"
          whileInView="visible"
          custom={12}
          className="md:w-1/2 saturate-0 hover:saturate-100 duration-150 transition-all w-2/3 h-auto relative md:right-32 right-16"
        >
          <img src={Vithit} alt={Vithit} className="w-full rounded-lg" />
          <img
            src={Fondo}
            className="absolute w-full h-full rounded-lg top-0 z-50 opacity-50"
          />
        </motion.picture>
        <motion.picture
          variants={fadeUpProjectImageUX}
          viewport={{ once: true }}
          initial="hidden"
          whileInView="visible"
          custom={-6}
          className="md:w-1/3 saturate-0 hover:saturate-100 duration-150 transition-all w-3/6 h-auto relative"
        >
          <img src={Puntos} className="absolute w-20 h-20 -top-5 -right-2" />
          <img src={Redention} alt={Redention} className="w-full rounded-lg" />
          <img
            src={Fondo}
            className="absolute w-full h-full rounded-lg top-0 z-50 opacity-50"
          />
        </motion.picture>
      </div>
      <div
        id="collage"
        className="flex justify-center md:my-20 my-10 items-center"
      >
        <motion.picture
          variants={fadeUpProjectImageUX}
          viewport={{ once: true }}
          initial="hidden"
          whileInView="visible"
          custom={3}
          className="md:w-2/5 w-3/5 saturate-0 hover:saturate-100 duration-150 transition-all h-auto relative rotate-3 right-5"
        >
          <img src={Soomy} alt={Soomy} className="w-full rounded-lg" />
          <img
            src={Fondo}
            className="absolute w-full h-full rounded-lg top-0 z-50 opacity-50"
          />
        </motion.picture>
        <motion.picture
          variants={fadeUpProjectImageUX}
          viewport={{ once: true }}
          initial="hidden"
          whileInView="visible"
          custom={-6}
          className="md:w-1/2 w-4/5 saturate-0 hover:saturate-100 duration-150 transition-all h-auto relative left-10 -rotate-6"
        >
          <img src={Puntos} className="absolute w-20 h-20 -bottom-10 -left-8" />
          <img src={Learnment} alt={Learnment} className="w-full  rounded-lg" />
          <img
            src={Fondo}
            className="absolute w-full h-full rounded-lg top-0 z-50 opacity-50"
          />
        </motion.picture>
      </div>
      <div
        id="collage"
        className="flex justify-center md:mt-20 mt-10 items-center"
      >
        <motion.picture
          variants={fadeUpProjectImageUX}
          viewport={{ once: true }}
          initial="hidden"
          whileInView="visible"
          custom={6}
          className="md:w-6/12 w-3/5 saturate-0 hover:saturate-100 duration-150 transition-all md:4/5 h-auto relative rotate-6 md:right-32 right-5"
        >
          <img src={Puntos} className="absolute w-20 h-20 -top-5 -right-4" />
          <img src={Fitsmart} alt={Fitsmart} className="w-full rounded-lg" />
          <img
            src={Fondo}
            className="absolute w-full h-full rounded-lg top-0 z-50 opacity-50"
          />
        </motion.picture>
        <motion.picture
          variants={fadeUpProjectImageUX}
          viewport={{ once: true }}
          initial="hidden"
          whileInView="visible"
          custom={-2}
          className="md:w-1/3 w-2/5 saturate-0 hover:saturate-100 duration-150 transition-all h-auto relative left-5 -rotate-2"
        >
          <img src={Dentist} alt={Dentist} className="w-full rounded-lg" />
          <img
            src={Fondo}
            className="absolute w-full h-full rounded-lg top-0 z-50 opacity-50"
          />
        </motion.picture>
      </div>
    </div>
  );
};
