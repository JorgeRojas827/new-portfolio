import Icosaedro from "../../assets/icosaedro.svg";
import { Project } from "./Project";
import calculadora from "../../assets/calculator-dark.png";
import todoApp from "../../assets/todo-app.png";
import { ProjectUx } from "./ProjectUx";

export const Projects = () => {
  return (
    <div className="mt-72 flex flex-col justify-center">
      <div className="flex space-x-3 pl-20">
        <picture className="flex items-center">
          <img src={Icosaedro} alt="Logo personal" className="w-16 mr-3" />
          <h1 className="font-anton text-5xl">Projects</h1>
        </picture>
      </div>
      <Project
        title="React-typescript-calculator"
        description="A simple calculator with all his operations, designed by me, and with a global state example with the records section."
        redireccion="https://github.com/JorgeRojas827/rt-calculator"
        muestra="https://rt-calculator.netlify.app/"
        role="Frontend"
        tech="ReactJS - Typescript - Redux - TailwindCSS"
        img={calculadora}
      />
      <Project
        title="React-typescript-todo"
        description="A todo application with Google authentication, and enviroment mechanic for the to-dos, state for each to-do, drag n' drop mechanic for change state, an api rest and a database."
        redireccion="https://github.com/JorgeRojas827/rt-todo"
        muestra="https://rt-todo.vercel.app/"
        role="Full Stack"
        tech="ReactJS - Typescript - Redux ToolKit - TailwindCSS - ExpressJS - PostgreSQL - Prisma"
        img={todoApp}
      />
      <ProjectUx />
    </div>
  );
};
