// import { FiBarChart, FiBell, FiDollarSign, FiPlay } from "react-icons/fi";
// import { GiClick } from "react-icons/gi";

// import { AnimatePresence, motion } from "framer-motion";
// import { useWindowSize } from "./useWindowSize";
// import { useState } from "react";
// import ecommerce from "../assets/ecommerce.png"
// import porfolio1 from "../assets/portfolio1.png"
// import geminiclone from "../assets/geminiclone.png"
// import practice from "../assets/practice.png"


// const Projects = () => {
//     const [open, setOpen] = useState(items[0].id);

//     return (
//         <section className="p-4 bg-[#000000] py-[50px]">
//             <div className="flex justify-center items-center py-[30px]">
//                 <p className="text-[66px] bg-custom-red-gradient bg-clip-text text-transparent">PROJECTS</p>
//             </div>
//             <div className="flex flex-col lg:flex-row h-fit lg:h-[450px] w-full max-w-6xl mx-auto shadow overflow-hidden">
//                 {items.map((item) => {
//                     return (
//                         <Panel
//                             key={item.id}
//                             open={open}
//                             setOpen={setOpen}
//                             id={item.id}
//                             Icon={item.Icon}
//                             title={item.title}
//                             imgSrc={item.imgSrc}
//                             description={item.description}
//                         />
//                     );
//                 })}
//             </div>
//         </section>
//     );
// };

// const Panel = ({ open, setOpen, id, Icon, title, imgSrc, description, href }) => {
//     const { width } = useWindowSize();
//     const isOpen = open === id;

//     return (
//         <>
//             <button
//                 className="bg-white hover:bg-slate-50 transition-colors p-3 border-r-[1px] border-b-[1px] border-slate-200 flex flex-row-reverse lg:flex-col justify-end items-center gap-4 relative group"
//                 onClick={() => setOpen(id)}
//             >
//                 <span
//                     style={{
//                         writingMode: "vertical-lr",
//                     }}
//                     className="hidden lg:block text-xl font-light rotate-180 bg-custom-red-gradient bg-clip-text text-transparent"
//                 >
//                     {title}
//                 </span>
//                 <span className="block lg:hidden text-xl font-light">{title}</span>
//                 <div className="w-6 lg:w-full aspect-square bg-custom-red-gradient  text-white grid place-items-center">
//                     <Icon />
//                 </div>
//                 <span className="w-4 h-4 bg-white group-hover:bg-slate-50 transition-colors border-r-[1px] border-b-[1px] lg:border-b-0 lg:border-t-[1px] border-slate-200 rotate-45 absolute bottom-0 lg:bottom-[50%] right-[50%] lg:right-0 translate-y-[50%] translate-x-[50%] z-20" />
//             </button>

//             <AnimatePresence>
//                 {isOpen && (
//                     <motion.div
//                         key={`panel-${id}`}
//                         variants={width && width > 1024 ? panelVariants : panelVariantsSm}
//                         initial="closed"
//                         animate="open"
//                         exit="closed"
//                         style={{
//                             backgroundImage: `url(${imgSrc})`,
//                             backgroundPosition: "center",
//                             backgroundSize: "cover",
//                         }}
//                         className="w-full h-full overflow-hidden relative bg-black flex items-end"
//                     >
//                         <motion.div
//                             variants={descriptionVariants}
//                             initial="closed"
//                             animate="open"
//                             exit="closed"
//                             className="px-4 py-2 bg-black/40 backdrop-blur-sm text-white"
//                         >
//                             <p>{description}</p>
//                         </motion.div>
//                     </motion.div>
//                 )}
//             </AnimatePresence>
//         </>
//     );
// };

// export default Projects;

// const panelVariants = {
//     open: {
//         width: "100%",
//         height: "100%",
//     },
//     closed: {
//         width: "0%",
//         height: "100%",
//     },
// };

// const panelVariantsSm = {
//     open: {
//         width: "100%",
//         height: "200px",
//     },
//     closed: {
//         width: "100%",
//         height: "0px",
//     },
// };

// const descriptionVariants = {
//     open: {
//         opacity: 1,
//         y: "0%",
//         transition: {
//             delay: 0.125,
//         },
//     },
//     closed: { opacity: 0, y: "100%" },
// };

// const items = [
//     {
//         id: 1,
//         href: "https://shaikdavoodbasha.github.io/titleswear/",
//         title: "E-commerce website",
//         Icon: GiClick,
//         imgSrc: ecommerce,
//         description:
//             "Developed the frontend interface for an online clothing store, focusing on user experience and aesthetic appeal Responsive design for mobile and desktop The Interactive product showcase Dynamic product filtering and sorting options.",
//     },
//     {
//         id: 2,
//         href: "https://shaikdavoodbasha.github.io/Davood_New_Portfolio/",
//         title: "Portfolio",
//         Icon: GiClick,
//         imgSrc: porfolio1,
//         description:
//             "Developed A Seamless, User-Attractive 3D-Protfolio Showcase of My Skills and Projects.",
//     },
//     {
//         id: 3,
//         href: "https://shaikdavoodbasha.github.io/newgemini/",
//         title: "Google Gemini Clone",
//         Icon: GiClick,
//         imgSrc: geminiclone,
//         description:
//             "The Google Gemini Clone is a web application designed to replicate the functionalities of Google Gemini, utilizing the Google Gemini API. Built with React, this project offers an interactive chat interface that allows users to engage with the AI model in a conversational manner.",
//     },
//     {
//         id: 4,
//         href: "https://shaikdavoodbasha.github.io/twountitled/",
//         title: "Responsive Ui",
//         Icon: GiClick,
//         imgSrc: practice,
//         description:
//             " Responsive design.",
//     },
// ];
import { FiBarChart, FiBell, FiDollarSign, FiPlay } from "react-icons/fi";
import { GiClick } from "react-icons/gi";

import { AnimatePresence, motion } from "framer-motion";
import { useWindowSize } from "./useWindowSize";
import { useState } from "react";
import ecommerce from "../assets/ecommerce.png";
import porfolio1 from "../assets/portfolio1.png";
import geminiclone from "../assets/geminiclone.png";
import practice from "../assets/practice.png";

const Projects = () => {
    const [open, setOpen] = useState(items[0].id);

    return (
        <section className="p-4 bg-[#000000] py-[50px]">
            <div className="flex justify-center items-center py-[30px]">
                <p className="text-[50px] bg-custom-red-gradient bg-clip-text text-transparent">PROJECTS</p>
            </div>
            <div className="flex flex-col lg:flex-row h-fit lg:h-[450px] w-full max-w-6xl mx-auto shadow overflow-hidden">
                {items.map((item) => (
                    <Panel
                        key={item.id}
                        open={open}
                        setOpen={setOpen}
                        id={item.id}
                        Icon={item.Icon}
                        title={item.title}
                        imgSrc={item.imgSrc}
                        description={item.description}
                        href={item.href}
                    />
                ))}
            </div>
        </section>
    );
};

const Panel = ({ open, setOpen, id, Icon, title, imgSrc, description, href }) => {
    const { width } = useWindowSize();
    const isOpen = open === id;

    return (
        <>
            <button
                className="bg-white hover:bg-slate-50 transition-colors p-3 border-r-[1px] border-b-[1px] border-slate-200 flex flex-row-reverse lg:flex-col justify-end items-center gap-4 relative group"
                onClick={() => setOpen(id)}
            >
                <span
                    style={{
                        writingMode: "vertical-lr",
                    }}
                    className="hidden lg:block text-xl font-light rotate-180 bg-custom-red-gradient bg-clip-text text-transparent"
                >
                    {title}
                </span>
                <span className="block lg:hidden text-xl font-light">{title}</span>
                <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-6 lg:w-full aspect-square bg-custom-red-gradient text-white grid place-items-center"
                >
                    <Icon />
                </a>
                <span className="w-4 h-4 bg-white group-hover:bg-slate-50 transition-colors border-r-[1px] border-b-[1px] lg:border-b-0 lg:border-t-[1px] border-slate-200 rotate-45 absolute bottom-0 lg:bottom-[50%] right-[50%] lg:right-0 translate-y-[50%] translate-x-[50%] z-20" />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        key={`panel-${id}`}
                        variants={width && width > 1024 ? panelVariants : panelVariantsSm}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        style={{
                            backgroundImage: `url(${imgSrc})`,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                        }}
                        className="w-full h-full overflow-hidden relative bg-black flex items-end"
                    >
                        <motion.div
                            variants={descriptionVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            className="px-4 py-2 bg-black/40 backdrop-blur-sm text-white"
                        >
                            <p>{description}</p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Projects;

const panelVariants = {
    open: {
        width: "100%",
        height: "100%",
    },
    closed: {
        width: "0%",
        height: "100%",
    },
};

const panelVariantsSm = {
    open: {
        width: "100%",
        height: "200px",
    },
    closed: {
        width: "100%",
        height: "0px",
    },
};

const descriptionVariants = {
    open: {
        opacity: 1,
        y: "0%",
        transition: {
            delay: 0.125,
        },
    },
    closed: { opacity: 0, y: "100%" },
};

const items = [
    {
        id: 1,
        href: "https://shaikdavoodbasha.github.io/titleswear/",
        title: "E-commerce website",
        Icon: GiClick,
        imgSrc: ecommerce,
        description:
            "Developed the frontend interface for an online clothing store, focusing on user experience and aesthetic appeal Responsive design for mobile and desktop The Interactive product showcase Dynamic product filtering and sorting options. Tech used : React , Tailwind .",
    },
    {
        id: 2,
        href: "https://shaikdavoodbasha.github.io/Davood_New_Portfolio/",
        title: "Portfolio",
        Icon: GiClick,
        imgSrc: porfolio1,
        description:
            "Developed A Seamless, User-Attractive 3D-Protfolio Showcase of My Skills and Projects. Tech used : React , Tailwind ,React Threefiber.",
    },
    {
        id: 3,
        href: "https://shaikdavoodbasha.github.io/newgemini/",
        title: "Google Gemini Clone",
        Icon: GiClick,
        imgSrc: geminiclone,
        description:
            "The Google Gemini Clone is a web application designed to replicate the functionalities of Google Gemini, utilizing the Google Gemini API. Built with React, this project offers an interactive chat interface that allows users to engage with the AI model in a conversational manner .Tech used : React , Tailwind .",
    },
    {
        id: 4,
        href: "https://shaikdavoodbasha.github.io/twountitled/",
        title: "Responsive Ui",
        Icon: GiClick,
        imgSrc: practice,
        description: "Responsive design. Tech used : React , Tailwind.",
    },
];
