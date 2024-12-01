import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import CanvasLoader from './CanvasLoader';
import Modelone from './Modelone';
import ModelThree from './ModelThree';
import ModelFour from './ModelFour';

const ModeloneMain = () => {
    return (
        <div className='w-full h-[100vh] flex flex-col  items-center px-[2vw] sm:px-[4vw] ' >
            <div className='flex justify-center items-start'>
                <p className='text-[30px] sm:text-[50px] text-[#f8f8f8] '>Exploring the Third Dimension in web</p>
            </div>
            <div className='h-full flex  flex-col sm:flex-row justify-center items-center'>
                <div className=' h-full flex justify-center items-center'>
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
                            <Modelone scale={10} position={[0, -6, 0]} rotation={[0, 190, 0]} />
                            {/* Lighting */}
                            <ambientLight intensity={1} />
                            <directionalLight position={[10, 10, 10]} intensity={0.5} />
                        </Suspense>
                    </Canvas>
                </div>
                <div className=' w-full  h-full flex justify-center items-center'>
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
                            <ModelThree scale={2} position={[0, -6, 0]} rotation={[0, 210, 0]} />
                            {/* Lighting */}
                            <ambientLight intensity={1} />
                            <directionalLight position={[10, 10, 10]} intensity={0.5} />
                        </Suspense>
                    </Canvas>
                </div>
                <div className=' w-full  h-full flex justify-center items-center'>
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
                            <ModelFour scale={3} position={[0, -6, 0]} rotation={[0, 200, 0]} />
                            {/* Lighting */}
                            <ambientLight intensity={1} />
                            <directionalLight position={[10, 10, 10]} intensity={0.5} />
                        </Suspense>
                    </Canvas>
                </div>
            </div>
        </div>
    )
}

export default ModeloneMain