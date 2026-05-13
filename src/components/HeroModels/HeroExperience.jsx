import { OrbitControls, Sparkles } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { Room } from "./Room";
import React, { Suspense, useRef } from "react";
import HeroLight from "./HeroLight.jsx";
import {Bloom, EffectComposer} from "@react-three/postprocessing";

// On crée un composant "porteur" pour l'animation
const AnimatedSceneElements = () => {
    // On crée une référence pour le groupe qui contient la Room et les Sparkles
    const groupRef = useRef();
    const time = useRef(0);

    useFrame((state, delta) => {
        if (!groupRef.current) return;

        time.current += delta;
        const t = time.current;

        const noise =
            Math.sin(t * 0.8) * Math.cos(t * 0.6);

        groupRef.current.position.y =
            Math.sin(t * 0.5) * 0.15 +
            Math.sin(t * 1.2) * 0.05 +
            noise * 0.03;

        groupRef.current.position.x =
            Math.sin(t * 0.3) * 0.1 +
            noise * 0.02;

        groupRef.current.rotation.x =
            Math.sin(t * 0.4) * 0.02 +
            noise * 0.01;
    });

    return (
        <group ref={groupRef}>
            <Room />

            <Sparkles
                count={35}
                scale={8}
                size={2}
                speed={0.3}
                color="#4cc9f0"
                opacity={0.4}
            />
            <Sparkles
                count={15}
                scale={6}
                size={1.2}
                speed={0.2}
                color="#ff007f"
                opacity={0.3}
            />
        </group>
    );
};

const HeroExperience = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
    const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

    return (
        <Canvas camera={{ position: [0, 0, 15], fov: 45 }}
                gl={{ antialias: true, powerPreference: "high-performance", failIfMajorPerformanceCaveat: true }}
                dpr={[1, 2]}
        >
            <OrbitControls
                enablePan={false}
                enableZoom={!isTablet}
                maxDistance={20}
                minDistance={5}
                minPolarAngle={Math.PI / 5}
                maxPolarAngle={Math.PI / 2}
            />
            <HeroLight />
            <Suspense fallback={null}>
                <group
                    scale={isMobile ? 0.7 : 1}
                    position={[0, -3.5, 0]}
                    rotation={[0, -Math.PI / 4, 0]}
                >
                    {/* On remplace <Room /> et <Sparkles /> par notre composant animé.
                        Le design et les particules restent exacts, mais ils flottent.
                    */}
                    <AnimatedSceneElements />
                </group>
            </Suspense>

            {/* BLOOM GLOBAL : Beaucoup plus stable, pas d'écran noir */}
            <EffectComposer disableNormalPass>
                <Bloom
                    intensity={0.4}
                    luminanceThreshold={0.2} // Seul ce qui est très brillant (emissive) fera un halo
                    mipmapBlur
                />
            </EffectComposer>

        </Canvas>
    );
};

export default HeroExperience;
