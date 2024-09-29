export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];

export const myProjects = [
  {
    title: "Tomato - Food Ordering Application",
    desc: "Tomato is a modern food ordering web app built with the MERN stack. Users can browse menus, customize orders, make secure payments, and track their order status—whether pending, in progress, or delivered. Designed for both desktop and mobile, Tomato offers a fast, user-friendly experience for easy food ordering.",
    subdesc:
      "Built as a unique Software-as-a-Service app with React, Tailwind CSS, Javascript, MongoDB and Express.js. Tomato is basically a food delivery app with unique features in it.",
    href: "https://tomato-2787c.web.app/",
    texture: "/textures/project/project1.mp4",
    logo: "/assets/project-logo1.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "MongoDB",
        path: "/assets/mongodb.png",
      },
      {
        id: 4,
        name: "ExpressJS",
        path: "/assets/express.png",
      },
    ],
  },
  {
    title: "AirCNC - Vacation Rental Booking Platform",
    desc: "AirCNC is a modern vacation rental booking platform built with the MERN stack. Users can browse property listings, customize their stay, make secure payments, and track their booking. Designed for both desktop and mobile, AirCNC offers a fast, user-friendly experience for seamless travel planning.",
    subdesc:
      "Built as a unique Software-as-a-Service app with React, Tailwind CSS, Javascript, MongoDB, and Express.js, AirCNC is essentially a vacation rental platform with exclusive features that enhance the booking experience.",
    href: "https://aircnc-35392.web.app/",
    texture: "/textures/project/project2.mp4",
    logo: "/assets/project-logo2.png",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "MongoDB",
        path: "/assets/mongodb.png",
      },
      {
        id: 4,
        name: "ExpressJS",
        path: "/assets/express.png",
      },
    ],
  },
  {
    title: "Bistro Boss - Restaurant Management Application",
    desc: "Bistro Boss is a web app built with the MERN stack. Users can browse menus, customize orders, make secure payments and admins can see the analytics (sales reports, customer insights). Designed for both desktop and mobile, Bistro Boss offers a fast, user-friendly experience for easy food ordering.",
    subdesc:
      "Built as a unique Software-as-a-Service app with React, Tailwind CSS, Javascript, MongoDB and Express.js. Bistro Boss is basically a food delivery app with unique features in it.",
    href: "https://www.youtube.com/watch?v=lEflo_sc82g",
    texture: "/textures/project/project3.mp4",
    logo: "/assets/project-logo3.png",
    logoStyle: {
      backgroundColor: "#60f5a1",
      background:
        "linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
      border: "0.2px solid rgba(208, 213, 221, 1)",
      boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
    },
    spotlight: "/assets/spotlight3.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "MongoDB",
        path: "/assets/mongodb.png",
      },
      {
        id: 4,
        name: "ExpressJS",
        path: "/assets/express.png",
      },
    ],
  },
  {
    title: "Next Page - Book Browsing Platform",
    desc: "Next Page is a modern frontend project built with React, allowing users to browse a wide selection of books and view detailed information about each one. Designed for both desktop and mobile, Next Page offers a seamless, intuitive browsing experience for book lovers, enhanced with smooth animations powered by Lottie React.",
    subdesc:
      "Built with React, styled with Tailwind CSS, and animated using Lottie React, Next Page delivers a fast, responsive interface. Users can discover books, explore details, and enjoy a visually engaging experience while navigating the collection.",
    href: "https://www.youtube.com/watch?v=PuOVqP_cjkE",
    texture: "/textures/project/project4.mp4",
    logo: "/assets/project-logo4.svg",
    logoStyle: {
      backgroundColor: "#0E1F38",
      border: "0.2px solid #0E2D58",
      boxShadow: "0px 0px 60px 0px #2F67B64D",
    },
    spotlight: "/assets/spotlight4.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "Lottie React",
        path: "/assets/lottie.png",
      },
      {
        id: 4,
        name: "JavaScript",
        path: "/assets/javascript.png",
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [3, -6.2, 0]
      : isMobile
      ? [7, -6, 0]
      : isTablet
      ? [8, -7, 0]
      : [10, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
      ? [5, 3, 0]
      : isTablet
      ? [9, 3, 0]
      : [12, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
      ? [-10, 7, 0]
      : isTablet
      ? [-17, 6, 0]
      : [-24, 4, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
      ? [-11, -10, -10]
      : isTablet
      ? [-15, -7, -10]
      : [-13, -13, -10],
  };
};
