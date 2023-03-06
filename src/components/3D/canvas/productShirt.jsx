import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei"
import BoxMesh from "../meshs/boxMesh";

const ProductShirt = () => {
    return (
        <Canvas className="bg-gray-500"  dpr={[1, 2]} camera={{ fov: 25 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 5]} />
            <pointLight position={[-10, -10, -10]} />
            <BoxMesh />
            <OrbitControls />
        </Canvas>
    )
};

export default ProductShirt;
