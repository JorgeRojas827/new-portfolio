import React from "react";
import { motion } from "framer-motion";
import { draw } from "../helpers/Animations";

interface IProps {
  size?: number;
}

export const Logo = ({ size = 64 }: IProps) => {
  return (
    <picture>
      <motion.svg
        viewport={{ once: true }}
        id="ekKNLs0wtJI1"
        className="mr-3"
        style={{
          width: size,
          height: size,
        }}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 512 512"
        shape-rendering="geometricPrecision"
        text-rendering="geometricPrecision"
        initial="hidden"
        whileInView="visible"
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
  );
};
