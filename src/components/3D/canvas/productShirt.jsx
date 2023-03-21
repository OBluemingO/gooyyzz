import { Canvas } from "@react-three/fiber";
import {
    Html,
    OrbitControls,
    Plane,
    PresentationControls,
} from "@react-three/drei";
import BoxMesh from "../meshs/boxMesh";
import { ShirtMesh } from "../meshs/shirtMesh";
import { useState } from "react";

const ProductShirt = ({ red, pos }) => {
    return (
        <div className="h-full w-full relative">
            <Canvas className="bg-light-purple" camera={{ fov: 25 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 5]} />
                <pointLight position={[-10, -10, -10]} />

                <ShirtMesh pos={pos} />

                <OrbitControls />
            </Canvas>
        </div>
    );
};

export default ProductShirt;
