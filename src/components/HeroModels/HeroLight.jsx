import React from "react";

const HeroLight = () => {
    return (
        <>
            <spotLight
                position={[2, 5, 6]}
                angle={0.15}
                intensity={150}
                penumbra={0.2}
                color="white"
                castShadow
            />

            <spotLight
                position={[4, 5, 4]}
                angle={0.3}
                intensity={50}
                penumbra={0.5}
                color="#4cc9f0"
            />

            <spotLight
                position={[3, 5, 5]}
                angle={0.4}
                intensity={60}
                penumbra={1}
                color="#9d4edd"
            />

            {/* Utilisation de la balise native.
                On ne crée plus d'objet "new THREE" manuellement.
                React Three Fiber gérera la création et la destruction propre.
            */}
            <rectAreaLight
                width={8}
                height={3}
                color="#A259FF"
                intensity={10}
                position={[1, 3, 4]}
                rotation={[-Math.PI / 4, Math.PI / 4, 0]}
            />

            <pointLight
                position={[0, 1, 0]}
                intensity={10}
                color="#7209b7"
            />

            <pointLight
                position={[1, 2, -2]}
                intensity={10}
                color="#0d00a4"
            />
        </>
    );
};

export default HeroLight;
