import { Canvas } from "@react-three/fiber";
import { OrbitControls, Plane, PresentationControls } from "@react-three/drei";
import BoxMesh from "../meshs/boxMesh";
import { ShirtMesh } from "../meshs/shirtMesh";

const ProductShirt = ({ red }) => {
    return (
        <Canvas className="bg-light-purple" camera={{ fov: 25 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 5]} />
            <pointLight position={[-10, -10, -10]} />
            {/* <BoxMesh red={red} /> */}

            <ShirtMesh red={red} />
            <OrbitControls />
        </Canvas>
    );
};

export default ProductShirt;
