import React from "react";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "./ModelDraco";
import { motion } from "framer-motion";
import {SiCodeforces, SiLeetcode, SiInstagram, SiGithub, SiLinkedin, SiMaildotru} from "react-icons/si"
const contactMe = (props) => {
  return (
    <div className="w-screen h-screen">
      <button onClick={props.contactMeToHomeHandler}>Back to Home</button>
      <button>
        <SiLeetcode/>
      </button>

      <button>
        <SiCodeforces/>
      </button>
      {/* <motion.div
        
        className="h-screen w-[30vw] bg-transparent absolute left-[100vw] translate-x-[-100%]"
      >
        <Canvas>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 2]} />
          <Suspense fallback={null}>
            <Model />
          </Suspense>
        </Canvas>
      </motion.div> */}
    </div>
  );
};

export default contactMe;
