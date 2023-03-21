import React, { useEffect, useState, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import gsap from "gsap";
import _ from "lodash";

export function ShirtMesh({pos}) {
    const { nodes, materials } = useGLTF("/public/images/shirt.glb");

    const [click, setClick] = useState(false);
    const { camera } = useThree();

    useEffect(() => {
        console.log(pos,'======= pos')
        if (pos == 'pocket') {
            console.log('=== in condition')
            gsap.to(camera.position, {
                z: 3,
                y: 3,
                x: -4,
                duration: 1,
                ease: "power3.inOut",
            });
        } else if(pos == 'back side') {
            gsap.to(camera.position, {
                z: 6,
                y: 0,
                x: 0,
                duration: 1,
                ease: "power3.inOut",
            });
        }
    }, [click, pos]);

    const handleClick = () => {
        setClick((prev) => !prev);
    };

    return (
        <group
            scale={0.002}
            position={[0, -2.5, 0]}
            dispose={null}
            onClick={handleClick}
        >
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <group rotation={[Math.PI / 2, 0, 0]}>
                    <group scale={10}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.defaultMaterial.geometry}
                            material={materials.Material}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.defaultMaterial_1.geometry}
                            material={materials.Material}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.defaultMaterial_2.geometry}
                            material={materials.Material}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.defaultMaterial_3.geometry}
                            material={materials.Material}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.defaultMaterial_4.geometry}
                            material={materials.Material}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.defaultMaterial_5.geometry}
                            material={materials.Material}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.defaultMaterial_6.geometry}
                            material={materials.Material}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.defaultMaterial_7.geometry}
                            material={materials.Material}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.defaultMaterial_8.geometry}
                            material={materials.Material}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.defaultMaterial_9.geometry}
                            material={materials.Material}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.defaultMaterial_10.geometry}
                            material={materials.Material}
                        />
                    </group>
                </group>
            </group>
        </group>
    );
}

useGLTF.preload("/public/images/shirt.glb");
