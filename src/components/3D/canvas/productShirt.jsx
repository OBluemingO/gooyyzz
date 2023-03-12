import { Canvas } from "@react-three/fiber";
import { OrbitControls, PresentationControls } from "@react-three/drei";
import BoxMesh from "../meshs/boxMesh";

const ProductShirt = ({red}) => {
    
    return (
        <Canvas className="bg-light-purple" camera={{ fov: 25 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 5]} />
            <pointLight position={[-10, -10, -10]} />
            {/* <PresentationControls
                cursor={false}
            > */}
                <BoxMesh red={red} />
            {/* </PresentationControls> */}
        </Canvas>
    );
};

export default ProductShirt;
