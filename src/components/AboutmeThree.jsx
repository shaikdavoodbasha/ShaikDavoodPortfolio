import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import CanvasLoader from './CanvasLoader';
import AboutmeModel from './AboutmeModel';

const AboutmeThree = () => {
    return (
        <div className='w-full h-full sm:h-[100vh] flex justify-around items-center  px-[4vw]'>
            <div className='basis-[50%] h-full flex justify-center items-center'>
                <p className='bg-custom-red-gradient bg-clip-text text-transparent text-[60px] sm:text-[70px] whitespace-nowrap'>About Me</p>

            </div>
            <div className='basis-[50%] h-full '>
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
                        <AboutmeModel scale={1} position={[0, -6, 0]} rotation={[0, 220, 0]} />
                        {/* Lighting */}
                        <ambientLight intensity={1} />
                        <directionalLight position={[10, 10, 10]} intensity={0.5} />
                    </Suspense>
                </Canvas>

            </div>

        </div>
    )
}

export default AboutmeThree