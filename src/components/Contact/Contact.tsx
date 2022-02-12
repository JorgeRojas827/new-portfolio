import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FiMail } from "react-icons/fi";

export const Contact = () => {
  return (
    <div className="w-screen h-screen relative flex justify-center items-center">
      <div className="flex flex-col items-center">
        <h1 className="font-anton text-6xl">Contact</h1>
        <p className="w-80 mt-6">
          If you get interesed in me, I'll be glad to reply you soon to meet
          you!
        </p>
        <a
          href="mailto:jorgerojaspoma09@gmail.com"
          className="px-8 py-2 h-14 bg-black text-white mt-10 text-lg flex items-center font-semibold rounded-full"
        >
          <FiMail className="mr-5" />
          Greet me!
        </a>
      </div>
      <div
        id="social-media"
        className="md:flex absolute flex-col items-center space-y-5 bottom-20 left-10 hidden"
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
      <div id="credits" className="absolute bottom-8 right-10">
        <p>Designed and built with ♥ by Jorge Rojas</p>
      </div>
    </div>
  );
};
