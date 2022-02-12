import Puntos from "../../assets/puntos.png";
import Fondo from "../../assets/imagen-negra.png";
import Icosaedro from "../../assets/icosaedro.svg";
import { BsGithub } from "react-icons/bs";
import { MdOpenInNew } from "react-icons/md";

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
  return (
    <div className="w-full h-full flex flex-col mt-10">
      <div className="flex space-x-3 ml-20">
        <picture className="flex items-center">
          <img src={Icosaedro} alt="Logo personal" className="w-10 mr-3" />
          <h1 className="font-anton text-2xl">{title}</h1>
        </picture>
      </div>
      <div className="flex ml-20 mt-3 w-3/4">
        <p>{description}</p>
      </div>
      <div id="role" className="flex justify-around">
        <div className="flex items-center">
          <span className="font-medium">Role: {role} | </span>
          <p className="ml-2"> {tech}</p>
        </div>
        <div
          id="buttons"
          className="px-10 py-3 h-14 bg-black text-white text-lg flex space-x-8 items-center font-semibold rounded-full"
        >
          <a href={redireccion} target="_blank" className="">
            <BsGithub size={24} />
          </a>
          <a href={muestra} target="_blank">
            <MdOpenInNew size={24} />
          </a>
        </div>
      </div>
      <div id="image" className="flex justify-center my-10 items-center">
        <picture className="w-3/5 h-auto relative">
          <img src={Puntos} className="absolute w-40 h-40 -bottom-10 -left-8" />
          <img
            src={Fondo}
            className="absolute w-full h-full rounded-lg z-50 opacity-50"
          />
          <img src={img} alt={title} className="w-full saturate-0 rounded-lg" />
        </picture>
      </div>
    </div>
  );
};
