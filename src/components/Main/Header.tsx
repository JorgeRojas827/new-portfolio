import { BsList } from "react-icons/bs";
import Icosaedro from "../../assets/icosaedro.svg";

export const Header = () => {
  return (
    <header className="w-full h-1/6 flex justify-between">
      <div className="flex md:ml-10 ml-3" id="logo">
        <picture>
          <img className="w-20 h-28" src={Icosaedro} alt="Logo personal" />
        </picture>
      </div>
      <div className="md:hidden flex font-black mr-10 mt-9">
        <BsList size={40} />
      </div>
      <div className="hidden mr-10 md:flex" id="items">
        <nav className="flex justify-center space-x-20 items-center">
          <ul className="flex space-x-20 font-poppins font-medium justify-between">
            <li className="cursor-pointer">About me</li>
            <li className="cursor-pointer">Projects</li>
            <li className="cursor-pointer">Contact</li>
          </ul>
          <a
            href="src/assets/cv_jorgerojas.pdf"
            download
            className="px-10 py-2 h-14 flex items-center border border-black text-lg font-semibold rounded-full"
          >
            Download CV
          </a>
        </nav>
      </div>
    </header>
  );
};
