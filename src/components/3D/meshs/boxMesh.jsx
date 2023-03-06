import { useState } from "react";
import { Html } from "@react-three/drei";
const BoxMesh = () => {
    const [size, set] = useState(0.5);
    const [hidden, setVisible] = useState(false);
    return (
        <mesh scale={1}>
            <boxGeometry />
            <meshStandardMaterial />
            <Html
                style={{
                    transition: "all 0.2s",
                    opacity: hidden ? 0 : 1,
                    transform: `scale(${hidden ? 0.5 : 1})`,
                }}
                distanceFactor={1.5}
                position={[0, 0, 1]}
                // transform
                occlude
                onOcclude={setVisible}
            >
                <span>Size</span>
                {/* <Slider style={{ width: 100 }} min={0.5} max={1} step={0.01} value={size} onChange={set} /> */}
            </Html>
        </mesh>
    );
};

export default BoxMesh;
