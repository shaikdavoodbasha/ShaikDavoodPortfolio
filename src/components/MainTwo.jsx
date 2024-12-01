import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import CanvasLoader from './CanvasLoader';
import FiveModel from './FiveModel';
import SixModel from './SixModel';
const MainTwo = () => {
    return (
        <div className='w-full h-[100vh] flex justify-center items-center gap-4'>
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
                        <FiveModel scale={1} position={[0, -6, 0]} rotation={[0, 200, 0]} />
                        {/* Lighting */}
                        <ambientLight intensity={1} />
                        <directionalLight position={[10, 10, 10]} intensity={0.5} />
                    </Suspense>
                </Canvas>
            </div>
           

        </div>
    )
}

export default MainTwo