import AboutImg from "../../assets/about-img.jpg";
import Puntos from "../../assets/puntos.png";
import Icosaedro from "../../assets/icosaedro.svg";

export const About = () => {
  return (
    <section id="aboutme" className="w-screen h-screen flex mt-28 md:mt-0">
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
          <img
            className="rounded-full rotate-270 scale-150 absolute -left-56"
            src={AboutImg}
            alt="AboutImg"
          />
        </picture>
      </div>
      <div
        id="rightside-about"
        className="md:w-2/3 w-full flex flex-col md:pl-20 pl-8 justify-center md:pt-24 pt-6"
      >
        <div id="top-about">
          <picture className="flex items-center">
            <img src={Icosaedro} alt="Logo personal" className="w-16 mr-3" />
            <h1 className="font-anton text-5xl">About me</h1>
          </picture>
        </div>
        <div id="bottom-about" className="md:mt-16 mt-10 md:w-4/6 text-lg">
          <p className="md:ml-8 pr-8">
            I'm a trainee Frontend Developer with all the desire to start
            providing real solutions for the world.
          </p>
          <br />
          <p className="md:ml-10 pr-8">
            I really like make well looked landing pages or web applications,
            each project for me is unique and require all my attention. I laugh
            and wonder every time i have to learn something new. The first for
            me is give a smooth user experience, and have a great time.
          </p>
        </div>
        <div id="techs" className="mt-6">
          <h4 className="font-anton text-3xl md:ml-16">Technologies:</h4>
          <div className="flex flex-col mt-5 text-base">
            <div id="row" className="flex md:space-x-28 space-x-6">
              <div className="flex items-center md:pl-8 space-x-3">
                <div className="w-4 border-t border-black"></div>
                <p>React JS</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-4 border-t border-black"></div>
                <p>Redux</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-4 border-t border-black"></div>
                <p>Prisma</p>
              </div>
            </div>
            <div id="column" className="flex md:space-x-20 space-x-6">
              <div className="flex items-center md:pl-4 space-x-3">
                <div className="w-4 border-t border-black"></div>
                <p>Typescript</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-4 border-t border-black"></div>
                <p>React Native</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-4 border-t border-black"></div>
                <p>SQL</p>
              </div>
            </div>
            <div id="column" className="flex md:space-x-16 space-x-6">
              <div className="flex items-center space-x-3">
                <div className="w-4 border-t border-black"></div>
                <p>TailwindCSS</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-4 border-t border-black"></div>
                <p>Express</p>
              </div>
              <div className="flex items-center space-x-3 pl-8">
                <div className="w-4 border-t border-black"></div>
                <p>Git</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
