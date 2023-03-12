import { useRef, useState } from "react";
import { Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const BoxMesh = ({ red }) => {
    const [size, set] = useState(0.5);
    const [stopAnimation, setStopAnimation] = useState(false);
    const boxMeshRef = useRef();
    useFrame(() => {
        if (!stopAnimation) {
            boxMeshRef.current.rotation.y += 0.002;
            boxMeshRef.current.rotation.x += 0.002;
        }
    });
    return (
        <mesh
            rotation={[1, 0.8, 0]}
            position={[0, -0.1, 0]}
            ref={boxMeshRef}
        >
            <boxBufferGeometry />
            <meshStandardMaterial color={red ? [1, 0, 0] : [1, 1, 1]} />
        </mesh>
    );
};

export default BoxMesh;
