import React, { Suspense, useState, useEffect, useRef } from 'react';
import "../styles.css"
import Button from "../components/Button.js"
import { Html, Line, OrbitControls } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber'

import { EffectComposer, Bloom, ToneMapping } from '@react-three/postprocessing'
import { useNavigate } from 'react-router-dom';

function Content() {
    // const navigate = useNavigate();
    const redirectTo = (path) => {
        // navigate(path);
        console.log('nav')
    }
    return (
        <div className='w-full h-full'>
            <nav className="flex flex-row fixed w-screen justify-between px-12 py-6">
                <h1 className="font-museo text-[40px] text-white cursor-pointer" onClick={() => redirectTo("/")}>LinkHub</h1>
                <Button text="sign in"
                    onClick={() => redirectTo("/login")}/>
            </nav>
            <div className="w-screen h-screen bg-transparent flex flex-row justify-between items-center px-12">
            <div className="h-1/2 flex flex-col justify-evenly">
                <h1 className="text-primary text-xl w-[630px] font-semibold">showcase everything about you in one simple link.</h1>
                <button
                    className="w-fit text-[30px] font-museo rounded-full border-2 border-white text-white px-4 py-2"
                    onClick={() => redirectTo("/signup")}
                    >get started</button>
            </div>
            {/* <img src={Graphic} alt="LinkHub Graphic" /> */}
            </div>
        </div>
    );
}


function Home() {



    return (
        <Canvas style={{ backgroundColor: "#0F1011", height: "100vh" }}>
            <ambientLight />
            <EffectComposer disableNormalPass>
                <Bloom mipmapBlur luminanceThreshold={1} levels={8} intensity={1} />
                <ToneMapping />
            </EffectComposer>
            <Shapes />
            <Suspense fallback={null}>
                <Html fullscreen>
                    <Content />
                </Html>
            </Suspense>
        </Canvas>
    );
}

function Shapes(){
    const groupRef = useRef();
    useFrame((state) => {
        const x = state.pointer.x;
        const y = state.pointer.y;
        // TODO: Why is this jittery when over html element?
        groupRef.current.rotation.set(
            (-y * 0.1),
            (x * 0.1),
            0
        );
    });


    // Calculate sphere positions
    const spherePositions = [...Array(5)].map(() => ({
        x: Math.random() * 5 - 2.5,
        y: Math.random() * 5 - 2.5,
        z: Math.random() * 5 - 2.5,
    }));
    return (
        <group ref={groupRef} position={[2, 0, 0]}>
            <Shape key={0} position={[0, 0, 0]} color={"#72E7D8"}>
                <sphereGeometry args={[0.5, 32]} />
            </Shape>
            {spherePositions.map((pos, index) => (
                <Shape key={index + 1} position={[pos.x, pos.y, pos.z]} color={"#72E7D8"}>
                    <sphereGeometry args={[0.5, 32]} />
                </Shape>
            ))}
            {spherePositions.map((pos, index) => (
                <Line
                    lineWidth={5}
                    key={index}
                    points={[[0, 0, 0], [pos.x, pos.y, pos.z]]}
                    color="#72E7D8"
                />
            ))}
        </group>
    );
}

function Shape({ children, color, ...props }) {
    const [hovered, hover] = useState(false)
    return (
      <mesh {...props}>
        {children}
        {/* In order to get selective bloom we must crank colors out of
          their 0-1 spectrum. We push them way out of range. What previously was [1, 1, 1] now could
          for instance be [10, 10, 10]. */}
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={!hovered ? 4.25 : 0} />
      </mesh>
    )
  }
  
  

export default Home;
