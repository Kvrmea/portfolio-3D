import React from 'react'
import { useGLTF, useTexture } from '@react-three/drei'

export function Room(props) {
    const matcapTexture = useTexture('/images/textures/mat1.png');
    const { nodes, materials } = useGLTF('/models/optimized-room.glb');

    const colors = {
        gentleGreen: '#00ff41',
        gentlePink: '#ff007f',
        razerGreen: '#44d62c',
        logiPink: '#f50057',
        blackDesk: '#050505',
        screenBlue: '#4cc9f0'
    };

    return (
        <group {...props} dispose={null}>
            {/* RIDEAUX */}
            <mesh geometry={nodes._________6_blinn1_0.geometry}>
                <meshPhongMaterial color="#1a1a40" />
            </mesh>

            {/* CORPS DE LA ROOM (MATCAP) */}
            <mesh geometry={nodes.body1_blinn1_0.geometry}>
                <meshPhongMaterial map={matcapTexture} />
            </mesh>

            <mesh geometry={nodes.cabin_blinn1_0.geometry} material={materials.blinn1} />
            <mesh geometry={nodes.chair_body_blinn1_0.geometry} material={materials.blinn1} />
            <mesh geometry={nodes.comp_blinn1_0.geometry} material={materials.blinn1} />

            {/* ÉCRANS - EMISSIVE */}
            <mesh geometry={nodes.emis_lambert1_0.geometry}>
                <meshStandardMaterial
                    color="black"
                    emissive={colors.screenBlue}
                    emissiveIntensity={5}
                />
            </mesh>

            <mesh geometry={nodes.handls_blinn1_0.geometry} material={materials.blinn1} />
            <mesh geometry={nodes.keyboard_blinn1_0.geometry} material={materials.blinn1} />
            <mesh geometry={nodes.kovrik_blinn1_0.geometry} material={materials.blinn1} />
            <mesh geometry={nodes.lamp_bl_blinn1_0.geometry} material={materials.blinn1} />
            <mesh geometry={nodes.lamp_white_blinn1_0.geometry} material={materials.blinn1} />

            {/* SOURIS ROSE */}
            <mesh geometry={nodes.miuse_blinn1_0.geometry}>
                <meshPhongMaterial color={colors.logiPink} />
            </mesh>

            <mesh geometry={nodes.monitor2_blinn1_0.geometry} material={materials.blinn1} />
            <mesh geometry={nodes.monitor3_blinn1_0.geometry} material={materials.blinn1} />
            <mesh geometry={nodes.pCylinder5_blinn1_0.geometry} material={materials.blinn1} />
            <mesh geometry={nodes.pillows_blinn1_0.geometry} material={materials.blinn1} />
            <mesh geometry={nodes.polySurface53_blinn1_0.geometry} material={materials.blinn1} />
            <mesh geometry={nodes.radiator_blinn1_0.geometry} material={materials.blinn1} />
            <mesh geometry={nodes.radiator_blinn1_0001.geometry} material={materials.blinn1} />
            <mesh geometry={nodes.railing_blinn1_0.geometry} material={materials.blinn1} />
            <mesh geometry={nodes.red_bttns_blinn1_0.geometry} material={materials.blinn1} />
            <mesh geometry={nodes.red_vac_blinn1_0.geometry} material={materials.blinn1} />
            <mesh geometry={nodes.stylus_blinn1_0.geometry} material={materials.blinn1} />

            {/* BUREAU NOIR */}
            <mesh geometry={nodes.table_blinn1_0.geometry}>
                <meshPhongMaterial color={colors.blackDesk} />
            </mesh>

            <mesh geometry={nodes.tablet_blinn1_0.geometry} material={materials.blinn1} />
            <mesh geometry={nodes.triangle_blinn1_0.geometry} material={materials.blinn1} />
            <mesh geometry={nodes.vac_black_blinn1_0.geometry} material={materials.blinn1} />
            <mesh geometry={nodes.vacuum1_blinn1_0.geometry} material={materials.blinn1} />
            <mesh geometry={nodes.vacuumgrey_blinn1_0.geometry} material={materials.blinn1} />
            <mesh geometry={nodes.vires_blinn1_0.geometry} material={materials.blinn1} />
            <mesh geometry={nodes.window_blinn1_0.geometry} material={materials.blinn1} />
            <mesh geometry={nodes.window4_phong1_0.geometry} material={materials.phong1} />
        </group>
    )
}

useGLTF.preload('/models/optimized-room.glb')
