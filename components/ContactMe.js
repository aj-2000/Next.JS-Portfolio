import React from "react";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "./ModelDraco";
const contactMe = (props) => {
  return (
    <div className="flex">
      <h1 className="basis-full"> I am ContactMe Page </h1>
      <button className="basis-full" onClick={props.contactMeToHomeHandler}>Back to Home</button>

      <div className="bg-gray-dark basis-full">
      <Canvas>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
      </Canvas>
      </div>
      
    </div>
  );
};

export default contactMe
