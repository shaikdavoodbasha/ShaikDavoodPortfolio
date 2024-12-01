// import React, { Suspense } from 'react';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
// import HeroModel from './HeroModel';
// import CanvasLoader from './CanvasLoader';


// const Hero = () => {
//     return (
//         <div className='flex flex-col items-center justify-center h-[85vh] '>
//             <p className='herotext w-full relative text-[#131313] text-[180px] overflow-x-hidden whitespace-nowrap'>SHAIK-DAVOODBASHA</p>
//             <div className='w-full h-[450px] absolute '>
//                 <Canvas className="h-full">
//                     <Suspense fallback={<CanvasLoader />}>
//                         {/* Perspective Camera */}
//                         <PerspectiveCamera makeDefault position={[0, 0, 15]} />
//                         {/* OrbitControls */}
//                         <OrbitControls
//                             enableZoom={true}
//                             enablePan={false}
//                             enableRotate={true}
//                             autoRotate={true}
//                             autoRotateSpeed={1.5}
//                         />
//                         {/* 3D Model */}
//                         <group scale={[0.2, 0.2, 0.2]} position={[0, -3, 0]}>
//                             <HeroModel rotation={[0, Math.PI / 2, 0]} />
//                         </group>

//                         {/* Enhanced Lighting */}
//                         <ambientLight intensity={1} /> {/* Uniform base light */}

//                         {/* Directional Lights */}
//                         <directionalLight
//                             position={[10, 10, 10]}
//                             intensity={1.5}
//                             color="#ffffff"
//                             castShadow
//                         />
//                         <directionalLight
//                             position={[-10, 10, -10]}
//                             intensity={1.2}
//                             color="#ffffff"
//                             castShadow
//                         />

//                         {/* Point Lights */}
//                         <pointLight position={[0, 5, 10]} intensity={0.8} color="#ffd700" />
//                         <pointLight position={[-10, -5, -10]} intensity={0.8} color="#add8e6" />
//                         <pointLight position={[10, -5, 10]} intensity={0.8} color="#ff6347" />

//                         {/* Spotlights */}
//                         <spotLight
//                             position={[0, 15, 10]}
//                             intensity={1.5}
//                             angle={0.3}
//                             penumbra={0.5}
//                             color="#ffffff"
//                             castShadow
//                         />
//                         <spotLight
//                             position={[-5, 10, -10]}
//                             intensity={1}
//                             angle={0.4}
//                             penumbra={0.3}
//                             color="#ffa07a"
//                             castShadow
//                         />
//                     </Suspense>
//                 </Canvas>



//             </div>
//         </div>
//     )
// }

// export default Hero
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import CanvasLoader from './CanvasLoader';
import { motion } from 'framer-motion';
import HeroModel from './HeroModel';

const Hero = () => {
    return (
        <div className='flex flex-col items-center justify-center h-[85vh] overflow-hidden relative '>
            {/* Moving text */}
            <motion.p
                className='herotext absolute w-full text-[#131313] text-[180px] whitespace-nowrap '
                initial={{ x: '0%' }} // Start from the right
                animate={{ x: '-300%' }} // Move to the left
                transition={{
                    duration: 30, // Adjust speed (seconds for one loop)
                    repeat: Infinity, // Infinite loop
                    ease: 'linear', // Smooth, constant motion
                }}
            >
                SHAIK-DAVOODBASHA-SHAIK-DAVOODBASHA-SHAIKDAVOODBASHA
            </motion.p>

            {/* Canvas Container */}
            <div className='w-full h-[100vh] absolute flex justify-center items-center top-[30px]'>
            <Canvas className='h-full'>
                    <Suspense fallback={<CanvasLoader />}>
                        {/* Perspective Camera */}
                        <PerspectiveCamera makeDefault position={[0, 0, 30]} />
                        {/* OrbitControls with autoRotate enabled */}
                        <OrbitControls
                            enableZoom={true}
                            enablePan={false} // Disable manual panning to avoid interruptions
                            enableRotate={true}
                            autoRotate={true} // Enables automatic rotation
                            autoRotateSpeed={1.5} // Control the speed of automatic rotation
                        />
                        {/* 3D Model */}
                        <HeroModel scale={1.3} position={[0, -6, 0]} rotation={[0, 220,0]} />
                        {/* Lighting */}
                        <ambientLight intensity={1} />
                        <directionalLight position={[10, 10, 10]} intensity={0.5} />
                    </Suspense>
                </Canvas>
            </div>
            <div className='flex justify-center items-center mt-[5px] absolute bottom-0'>
                <p className='bg-custom-red-gradient bg-clip-text text-transparent text-[20px] sm:text-[25px] whitespace-nowrap'>CRAFTING SEAMLESS WEB EXPERIENCES WITH REACT AND BEYOND</p>
            </div>
        </div>
    );
};

export default Hero;
