import { Variants } from 'framer-motion';

export const buttonAnimation: Variants = {
  hover: {
    scale: "1.05",
    transition: {
      duration: 2,
      ease: "easeIn",
    },
  },
  tap: {
    scale: "0.97",
    transition: {
      duration: 2,
      ease: "easeIn",
    },
  },hidden: {
    y: 50,
    opacity: 0,
    transition: {
      duration: 1.3,
      ease: 'backInOut',
    }
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.3,
      ease: 'backInOut',
    }
  }
};

export const headerButtonAnimation: Variants = {
  hover: {
    scale: "1.05",
    transition: {
      duration: 2,
      ease: "easeIn",
    },
  },
  tap: {
    scale: "0.97",
    transition: {
      duration: 2,
      ease: "easeIn",
    },
  },
  hidden: {
    y: -20,
    opacity: 0
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [.1,.12,.24,.59],
      duration: .3,
      delay: 1
    }
  }
}

export const headerItem: Variants = {
  hidden: {
    y: -20,
    opacity: 0
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [.1,.12,.24,.59],
      duration: .3,
    }
  }
}

export const headerDivItem: Variants = {
  hidden: {
  },
  show: {
    transition: {
      staggerChildren: .3,
      delay: 1
    }
  }
}

export const mainDivTextVariants: Variants = {
  hidden: {
  },
  show: {
    transition: {
      staggerChildren: .3,
      delay: 1
    }
  }
}

export const techDivVariants: Variants = {
  hidden: {
  },
  show: {
    transition: {
      staggerChildren: .3,
      delay: 1
    }
  }
}

export const techTextVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -10  
  },
  show :{
    opacity: 1,
    y: 0,
    transition: {
      ease: 'easeInOut',
      duration: .8
    }
  }
}

export const socialIcon: Variants = {
  default: i => ({
    scale: 1.2,
    rotateZ: i,
    transition: {
      repeat: Infinity,
      duration: 1.2,
      repeatType: "reverse",
    }
  }),
  hovered: {
    scale: 1.1,
    rotate: 0
  },
  clicked: {
    scale: 1.3,
  }
}

export const fadeUpProjectImageUX: Variants = {
  hidden: {
    y: 50,
    scale: .5,
    opacity: 0,
    rotate: 0,
    transition: {
      duration: 1.3,
      ease: 'easeInOut',
    }
  },
  visible: i => ({
    y: 0,
    scale: 1,
    opacity: 1,
    rotate: i,
    transition: {
      duration: .4,
      type: 'spring',
      bounce: false,
      delay: Math.abs(i) / 10,
      ease: 'linear',
    }
  })
}

export const fade: Variants = {
  initial: {
    opacity: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.1,
    }
  },
  animate: {
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.1,
    }
  },
  exit: {
    opacity: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.1,
    }
  }
}

export const loaderBkgVariants: Variants = {
  hidden: { width: 0 },
  show: {
    width: "100vw",
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.1,
    },
  },
  exit: {
    left: '100vw',
    transition: {
      ease: "easeInOut",
      duration: 0.5,
    },
  },
};

export const draw: Variants = {
  hidden: {
    pathLength: 0,
    opacity: 0,
    strokeWidth: 10,
  },
  visible: {
    pathLength: 1,
    strokeWidth: 15,
    opacity: 1,
    transition: {
      pathLength: { delay: 1, type: "spring", duration: 1.2, bounce: 0 },
      opacity: { delay: 1, duration: 0.01 },
    },
  },
};

export const fadeUpBottom: Variants = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 1.3,
      ease: 'backInOut',
    }
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.3,
      ease: 'backInOut',
    }
  }
}
  
export const fadeUp: Variants = {
  hidden: {
    y: 50,
    opacity: 0,
    transition: {
      duration: 1.3,
      ease: 'backInOut',
    }
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.3,
      ease: 'backInOut',
    }
  }
}

export const fadeUpImage: Variants = {
  hidden: {
    y: 50,
    scale: 1,
    opacity: 0,
    transition: {
      duration: 1.3,
      ease: 'backInOut',
    }
  },
  visible: {
    y: 0,
    scale: 1.5,
    opacity: 1,
    transition: {
      duration: 1.3,
      ease: 'backInOut',
    }
  }
}

export const fadeUpProjectImage: Variants = {
  hidden: {
    y: 50,
    scale: .4,
    opacity: 0,
    transition: {
      duration: 1.3,
      ease: 'easeInOut',
    }
  },
  visible: {
    y: 0,
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1.3,
      ease: 'easeInOut',
    }
  }
}

export const letterAnimation: Variants = {
  initial: {
    y: 400,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [.6,.01,-0.05,.95],
      duration: 1,
    }
  }
}

export const fadeDown: Variants = {
  hidden: {
    y: -50,
    opacity: 0,
    transition: {
      duration: 1.3,
      ease: 'backInOut',
    }
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.3,
      ease: 'backInOut',
    }
  }
}
