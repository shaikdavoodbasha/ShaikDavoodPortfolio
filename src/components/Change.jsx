import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import c1 from "../assets/c1.png"
import c2 from "../assets/c2.png"
import c3 from "../assets/c3.png"
import c4 from "../assets/c4.png"
import c5 from "../assets/c5.png"
import c6 from "../assets/c6.png"
import c7 from "../assets/c7.png"
import c8 from "../assets/c8.png"
import c9 from "../assets/c9.png"
import c10 from "../assets/c10.png"
import c11 from "../assets/c11.png"
import c12 from "../assets/c12.png"
import c13 from "../assets/c13.png"
import c14 from "../assets/c14.png"
import c15 from "../assets/c15.png"
import c16 from "../assets/c16.png"




const Change = () => {
    return (
        <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
            <div>
                <span className="block mb-4 text-xs md:text-sm bg-custom-red-gradient bg-clip-text text-transparent font-medium">
                    Better every day
                </span>
                <h3 className="text-[16px] md:text-[30px] font-semibold">
                    Pushing Boundaries, Embracing Growth!
                </h3>
                <p className="text-base md:text-lg text-slate-400 my-4 md:my-6">
                    I constantly push myself to learn and master new technologies,
                    believing that growth comes from stepping out of comfort zones.
                    Every challenge is an opportunity to innovate, and every project
                    is a step toward excellence
                </p>
                <button className="bg-custom-red-gradient  text-white font-medium py-2 px-4 rounded transition-all hover:bg-[#f8f8f8] hover:text-[#000] active:scale-95">
                    Let's Go
                </button>
            </div>
            <ShuffleGrid />
        </section>
    );
};

const shuffle = (array) => {
    let currentIndex = array.length,
        randomIndex;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ];
    }

    return array;
};

const squareData = [
    {
        id: 1,
        src: c1,
    },
    {
        id: 2,
        src: c2,
    },
    {
        id: 3,
        src: c3,
    },
    {
        id: 4,
        src: c4,
    },
    {
        id: 5,
        src: c5,
    },
    {
        id: 6,
        src: c6,
    },
    {
        id: 7,
        src: c7,
    },
    {
        id: 8,
        src: c8,
    },
    {
        id: 9,
        src: c9,
    },
    {
        id: 10,
        src: c10,
    },
    {
        id: 11,
        src: c11,

    },
    {
        id: 12,
        src: c12,
    },
    {
        id: 13,
        src: c13,
    },
    {
        id: 14,
        src: c14,
    },
    {
        id: 15,
        src: c15,
    },
    {
        id: 16,
        src: c16,
    },
];

const generateSquares = () => {
    return shuffle(squareData).map((sq) => (
        <motion.div
            key={sq.id}
            layout
            transition={{ duration: 1.5, type: "spring" }}
            className="w-full h-full"
            style={{
                backgroundImage: `url(${sq.src})`,
                backgroundSize: "cover",
            }}
        ></motion.div>
    ));
};

const ShuffleGrid = () => {
    const timeoutRef = useRef(null);
    const [squares, setSquares] = useState(generateSquares());

    useEffect(() => {
        shuffleSquares();

        return () => clearTimeout(timeoutRef.current);
    }, []);

    const shuffleSquares = () => {
        setSquares(generateSquares());

        timeoutRef.current = setTimeout(shuffleSquares, 3000);
    };

    return (
        <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
            {squares.map((sq) => sq)}
        </div>
    );
};

export default Change;