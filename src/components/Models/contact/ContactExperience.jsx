import { OrbitControls, ContactShadows } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Computer from "./Computer";

const ContactExperience = () => {
    return (
        <Canvas
            shadows
            camera={{ position: [0, 3, 7], fov: 45 }}
            dpr={[1, 2]}
            gl={{ antialias: true, preserveDrawingBuffer: true }}
        >
            <ambientLight intensity={0.5} color="#fff4e6" />

            <directionalLight position={[5, 5, 3]} intensity={2.5} color="#ffd9b3" />

            <directionalLight
                position={[5, 9, 1]}
                castShadow
                intensity={2.5}
                color="#ffd9b3"
                shadow-mapSize={[1024, 1024]}
                // LE SEUL AJOUT :
                // Ça décale l'ombre de 0.0001 unité pour stopper le clignotement
                shadow-bias={-0.0001}
            />

            <OrbitControls
                enableZoom={false}
                minPolarAngle={Math.PI / 6}
                maxPolarAngle={Math.PI / 2}
            />

            <Suspense fallback={null}>
                <group scale={[1, 1, 1]}>
                    <mesh
                        receiveShadow
                        position={[0, -1.5, 0]}
                        rotation={[-Math.PI / 2, 0, 0]}
                    >
                        <planeGeometry args={[30, 30]} />
                        <meshStandardMaterial color="#a46b2d" />
                    </mesh>
                </group>

                {/* Ton bureau */}
                <group scale={0.03} position={[0, -1.49, -2]} castShadow>
                    <Computer />
                </group>

                <ContactShadows position={[0, -1.5, 0]} opacity={0.4} scale={20} blur={2} far={4.5} />
            </Suspense>
        </Canvas>
    );
};

export default ContactExperience;
