import Puntos from "../../assets/puntos.png";
import MainImg from "../../assets/main-img.jpg";
import {
  BsArrowDownShort,
  BsGithub,
  BsInstagram,
  BsLinkedin,
} from "react-icons/bs";

export const Content = () => {
  return (
    <main className="w-full md:h-5/6 flex relative flex-col md:flex-row justify-around items-center md:mt-0 mt-8">
      <div id="main-text" className="pb-10">
        <picture>
          <img
            className="w-40 h-40 absolute md:-left-20 -left-28 md:top-36 top-32"
            src={Puntos}
            alt="Puntos"
          />
        </picture>
        <div id="top-text" className="flex space-y-3 flex-col">
          <div className="flex items-center space-x-2">
            <div className="w-5 border-t border-black"></div>
            <p className="font-poppins">Hey there, I'm</p>
          </div>
          <h1 className="font-anton md:text-7xl text-6xl">Jorge Rojas</h1>
          <h3 className="font-poppins text-2xl font-medium">
            Frontend developer
          </h3>
        </div>
        <div id="sub-text" className="font-poppins text-lg mt-6">
          I'm glad you're here, take a look <br /> to my projects.
        </div>
        <div
          id="buttons"
          className="flex md:flex-row flex-col md:justify-start justify-center items-center"
        >
          <a
            href="mailto:jorgerojaspoma09@gmail.com"
            className="px-16 py-2 h-14 bg-black text-white mt-10 text-lg flex items-center font-semibold rounded-full"
          >
            Say hello!
          </a>
          <a
            href="src/assets/cv_jorgerojas.pdf"
            target="_blank"
            className="px-12 mt-5 py-2 h-14 border flex md:hidden items-center border-black text-lg font-semibold rounded-full"
          >
            Download CV
          </a>
        </div>
        <div
          id="scroll-down"
          className="md:flex flex-col hidden justify-center items-center absolute left-10 bottom-10 font-semibold text-xs"
        >
          <p className="uppercase text-center">
            Scroll <br /> down
          </p>
          <BsArrowDownShort size={30} />
        </div>
      </div>
      <div id="main-image" className="relative md:mt-0 mt-20">
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
      </div>
      <div
        id="social-media"
        className="md:flex absolute flex-col items-center space-y-5 bottom-20 right-10 hidden"
      >
        <div className="h-56 border-l border-black"></div>
        <div className="flex flex-col space-y-5 text-xl">
          <a href="https://github.com/JorgeRojas827" target="_blank">
            <BsGithub />
          </a>
          <a href="https://www.instagram.com/jorgerojas_027/" target="_blank">
            <BsInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/jorge-rojas-94346a1bb/"
            target="_blank"
          >
            <BsLinkedin />
          </a>
        </div>
      </div>
    </main>
  );
};
