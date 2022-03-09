import { useState } from "react";
import { BsList, BsX, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import IcosaedroWhite from "../../assets/icosaedro-white.svg";
import { AnimatePresence, motion } from "framer-motion";
import { draw, headerButtonAnimation, fade } from "../../helpers/Animations";
import { headerItem, headerDivItem } from "../../helpers/Animations";

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full h-1/6 flex justify-between">
      <div className="flex md:ml-16 ml-14" id="logo">
        <picture className="flex items-center justify-center">
          <motion.svg
            id="ekKNLs0wtJI1"
            className="w-24 h-24 absolute"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 512 512"
            shape-rendering="geometricPrecision"
            text-rendering="geometricPrecision"
            initial="hidden"
            animate="visible"
          >
            <motion.path
              d="M99.128278,175.793991v169.690034L264.545541,448.03052l165.417262-97.66333v-179.456367L264.54554,76.909868L99.128278,175.793991Z"
              transform="translate(.000001 0.000003)"
              fill="none"
              stroke="#000"
              variants={draw}
              stroke-width="20"
            />
            <motion.path
              d="M264.545542,82.213985L178.479733,205.483643L107.24406,340.108011L264.545542,367.99542l156.966607-23.417066-69.582346-139.094713L264.545542,82.213985Z"
              transform="translate(.000003 0.905674)"
              fill="none"
              variants={draw}
              stroke="#000"
              stroke-width="20"
            />
            <motion.path
              d="M99.128282,175.793994l79.351454,29.689649l86.065805,162.511778.000003,80.0351"
              transform="translate(.000001 0.000003)"
              fill="none"
              variants={draw}
              stroke="#000"
              stroke-width="20"
            />
            <motion.path
              d="M429.962804,170.910826l-78.032998,34.572817-173.45007.000003l86.065809,162.511776l87.384261-162.511776"
              fill="none"
              variants={draw}
              stroke="#000"
              stroke-width="20"
            />
          </motion.svg>
        </picture>
      </div>
      <div className="md:hidden flex font-black mr-10 mt-9">
        <BsList onClick={() => setOpen(!open)} size={40} />
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            id="bar"
            variants={fade}
            initial="initial"
            animate="animate"
            exit="exit"
            className="bg-black w-screen h-screen z-40 flex flex-col justify-between overflow-hidden fixed"
          >
            <div className="flex justify-between">
              <div className="flex ml-3 z-50" id="logo">
                <picture>
                  <img
                    className="w-20 h-28 text-white"
                    src={IcosaedroWhite}
                    alt="Logo personal"
                  />
                </picture>
              </div>
              <div className="md:hidden flex font-black text-white z-50 mr-8 mt-9">
                <BsX onClick={() => setOpen(!open)} size={40} />
              </div>
            </div>
            <div
              className="flex justify-center items-center self-center justify-self-center text-white z-50"
              id="items"
            >
              <nav className="flex flex-col justify-center space-x-20 text-white items-center">
                <ul className="flex flex-col space-y-16 font-poppins items-center text-white font-medium text-xl justify-between">
                  <li className="cursor-pointer">
                    <a onClick={() => setOpen(false)} href="#aboutme">
                      About me
                    </a>
                  </li>
                  <li className="cursor-pointer">
                    <a onClick={() => setOpen(false)} href="#projects">
                      Projects
                    </a>
                  </li>
                  <li className="cursor-pointer">
                    <a onClick={() => setOpen(false)} href="#contact">
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="flex flex-col items-center space-y-5 justify-center pb-8">
              <div className="w-2/3 bg-white h-0.5"></div>
              <picture className="text-white flex justify-center space-x-10 text-3xl">
                <BsGithub />
                <BsInstagram />
                <BsLinkedin />
              </picture>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="hidden mr-10 md:flex" id="items">
        <nav className="flex justify-center space-x-20 items-center">
          <motion.ul
            variants={headerDivItem}
            initial="hidden"
            animate="show"
            className="flex space-x-20 font-poppins font-medium justify-between"
          >
            <motion.li variants={headerItem} className="cursor-pointer">
              <a href="#aboutme">About me</a>
            </motion.li>
            <motion.li variants={headerItem} className="cursor-pointer">
              <a href="#projects">Projects</a>
            </motion.li>
            <motion.li variants={headerItem} className="cursor-pointer">
              <a href="#contact">Contact</a>
            </motion.li>
          </motion.ul>
          <motion.a
            href="src/assets/cv_jorgerojas.pdf"
            download
            className="px-10 py-2 h-14 flex items-center border border-black text-lg font-semibold rounded-full"
            variants={headerButtonAnimation}
            whileHover="hover"
            initial="hidden"
            animate="show"
            whileTap="tap"
          >
            Download CV
          </motion.a>
        </nav>
      </div>
    </header>
  );
};
