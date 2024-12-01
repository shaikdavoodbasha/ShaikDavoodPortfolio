import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import img1 from "../assets/about1.png";
import img2 from "../assets/about2.png";
import img3 from "../assets/about3.png";


export const About = () => {
    return (
        <div className="bg-[#000000] py-[100px]">
            <TextParallaxContent
                imgUrl={img1}
                subheading="Introduction"
                heading="About Myself."
            >
                <ExampleContent />
            </TextParallaxContent>
            <TextParallaxContent
                imgUrl={img2}
                subheading="My Skills"
                heading="And Expertices."
            >
                <ExampleContent2 />
            </TextParallaxContent>
            <TextParallaxContent
                imgUrl={img3}
                subheading="My learning"
                heading="Goals  and future aspirations."
            >
                <ExampleContent3 />
            </TextParallaxContent>
        </div>
    );
};

const IMG_PADDING = 12;

const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
    return (
        <div
            style={{
                paddingLeft: IMG_PADDING,
                paddingRight: IMG_PADDING,
            }}
        >
            <div className="relative h-[150vh]">
                <StickyImage imgUrl={imgUrl} />
                <OverlayCopy heading={heading} subheading={subheading} />
            </div>
            {children}
        </div>
    );
};

const StickyImage = ({ imgUrl }) => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["end end", "end start"],
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    return (
        <motion.div
            style={{
                backgroundImage: `url(${imgUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: `calc(100vh - ${IMG_PADDING * 2}px)`,
                top: IMG_PADDING,
                scale,
            }}
            ref={targetRef}
            className="sticky z-0 overflow-hidden rounded-3xl"
        >
            <motion.div
                className="absolute inset-0 bg-neutral-950/70"
                style={{
                    opacity,
                }}
            />
        </motion.div>
    );
};

const OverlayCopy = ({ subheading, heading }) => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
    const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

    return (
        <motion.div
            style={{
                y,
                opacity,
            }}
            ref={targetRef}
            className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
        >
            <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
                {subheading}
            </p>
            <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
        </motion.div>
    );
};

const ExampleContent = () => (
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
        <h2 className="col-span-1 text-3xl font-myfont md:col-span-4">
            A brief introduction about Myself
        </h2>
        <div className="col-span-1 md:col-span-8">
            <p className="mb-4 text-xl text-neutral-600 md:text-2xl font-myfont">
                Hi, I'm Shaik Davood Basha, a passionate Frontend Developer specializing in ReactJS.
                I recently graduated with a degree in Computer Science and Engineering and have
                been honing my skills to build responsive and interactive web applications.
            </p>
            {/* <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
                reiciendis blanditiis aliquam aut fugit sint.
            </p> */}
            <button className="w-full rounded bg-white px-9 py-4 text-xl text-black transition-colors hover:bg-custom-red-gradient hover:text-white duration-[.5s] md:w-fit">
                Know more <FiArrowUpRight className="inline" />
            </button>
        </div>
    </div>
);
const ExampleContent2 = () => (
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
        <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
            Highlighting My key skills and technologies I am proficient in.
        </h2>
        <div className="col-span-1 md:col-span-8">
            <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
                I have hands-on experience with HTML, CSS, JavaScript, ReactJS,
                and frameworks like Bootstrap and Tailwind CSS. Additionally,
                I am learning React threefiber.
            </p>
            {/* <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
                reiciendis blanditiis aliquam aut fugit sint.
            </p> */}
            <button className="w-full rounded bg-white px-9 py-4 text-xl text-black transition-colors hover:bg-custom-red-gradient hover:text-white duration-[.5s] md:w-fit">
                Know more <FiArrowUpRight className="inline" />
            </button>
        </div>
    </div>
);
const ExampleContent3 = () => (
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
        <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
            My  continuous learning journey and future aspirations
        </h2>
        <div className="col-span-1 md:col-span-8">
            <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
                I'm continuously learning new technologies,
                including Three js for react threefiber  and Data Structures
                and Algorithms in Python to strengthen my problem-solving
                skills. My ultimate goal is to contribute to innovative
                projects as a Frontend  Developer and create web applications UI's that stand out.
            </p>
            {/* <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
                reiciendis blanditiis aliquam aut fugit sint.
            </p> */}
            <button className="w-full rounded bg-white px-9 py-4 text-xl text-black transition-colors  hover:bg-custom-red-gradient hover:text-white duration-[.5s] md:w-fit">
                Know more <FiArrowUpRight className="inline" />
            </button>
        </div>
    </div>
);