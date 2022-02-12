import Fondo from "../../assets/imagen-negra.png";
import Icosaedro from "../../assets/icosaedro.svg";
import Fitsmart from "../../assets/fitsmart.png";
import Puntos from "../../assets/puntos.png";
import Vithit from "../../assets/vithit.png";
import Redention from "../../assets/redention.png";
import Soomy from "../../assets/soomy.png";
import Learnment from "../../assets/learnment.png";
import Dentist from "../../assets/dentist.png";

export const ProjectUx = () => {
  return (
    <div className="w-full h-full flex flex-col mt-10">
      <div className="flex space-x-3 ml-20">
        <picture className="flex items-center">
          <img src={Icosaedro} alt="Logo personal" className="w-10 mr-3" />
          <h1 className="font-anton text-2xl">As UI & UX designer</h1>
        </picture>
      </div>
      <div className="flex flex-col ml-20 mt-3 w-3/4">
        <p>
          I also participated in a challenge carried out by Flux Academy, which
          consisted of making the prototype of the main section of a web page in
          less than 1 hour for 30 days, I enjoyed it!
        </p>
        <br />
        <p>These are the best 5 desings I made: </p>
      </div>
      <br />
      <div id="role" className="flex ml-20">
        <div className="flex items-center">
          <span className="font-medium">Role: UI Designer | </span>
          <p className="ml-2">Figma</p>
        </div>
      </div>
      <div id="collage" className="flex justify-center my-20 items-center">
        <picture className="w-1/2 h-auto relative rotate-12 right-40">
          <img
            src={Vithit}
            alt={Vithit}
            className="w-full saturate-0 rounded-lg"
          />
          <img
            src={Fondo}
            className="absolute w-full h-full rounded-lg top-0 z-50 opacity-50"
          />
        </picture>
        <picture className="w-2/5 h-auto relative left-10 -rotate-6">
          <img src={Puntos} className="absolute w-40 h-40 -top-10 -right-8" />
          <img
            src={Redention}
            alt={Redention}
            className="w-full saturate-0 rounded-lg"
          />
          <img
            src={Fondo}
            className="absolute w-full h-full rounded-lg top-0 z-50 opacity-50"
          />
        </picture>
      </div>
      <div id="collage" className="flex justify-center my-20 items-center">
        <picture className="w-1/3 h-auto relative rotate-3 right-20">
          <img
            src={Soomy}
            alt={Soomy}
            className="w-full saturate-0 rounded-lg"
          />
          <img
            src={Fondo}
            className="absolute w-full h-full rounded-lg top-0 z-50 opacity-50"
          />
        </picture>
        <picture className="w-1/2 h-auto relative left-20 -rotate-6">
          <img
            src={Puntos}
            className="absolute w-40 h-40 -bottom-10 -right-8"
          />
          <img
            src={Learnment}
            alt={Learnment}
            className="w-full saturate-0 rounded-lg"
          />
          <img
            src={Fondo}
            className="absolute w-full h-full rounded-lg top-0 z-50 opacity-50"
          />
        </picture>
      </div>
      <div id="collage" className="flex justify-center mt-20 items-center">
        <picture className="w-1/2 h-auto relative rotate-6 right-40">
          <img src={Puntos} className="absolute w-40 h-40 -top-10 -right-8" />
          <img
            src={Fitsmart}
            alt={Fitsmart}
            className="w-full saturate-0 rounded-lg"
          />
          <img
            src={Fondo}
            className="absolute w-full h-full rounded-lg top-0 z-50 opacity-50"
          />
        </picture>
        <picture className="w-2/5 h-auto relative left-10 -rotate-2">
          <img
            src={Dentist}
            alt={Dentist}
            className="w-full saturate-0 rounded-lg"
          />
          <img
            src={Fondo}
            className="absolute w-full h-full rounded-lg top-0 z-50 opacity-50"
          />
        </picture>
      </div>
    </div>
  );
};
