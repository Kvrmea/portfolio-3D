import React, {useRef} from 'react'
import { gsap } from "gsap";
import { ScrollTrigger} from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger)

const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);
    const video1Ref = useRef(null);
    const video2Ref = useRef(null);

    const videoJavaRef = useRef(null);
    const videoConnectInRef = useRef(null);

    // Play/pause vidéo
    const togglePlay = (videoRef) => {
        if (videoRef.current.paused) {
            videoRef.current.play();
        } else {
            videoRef.current.pause();
        }
    };

    useGSAP(() => {
        const projects = [
            project1Ref.current,
            project2Ref.current,
            project3Ref.current,
            video1Ref.current,
            video2Ref.current,
        ];

        projects.forEach((card, index) => {
            if (!card) return;
            gsap.fromTo(
                card,
                {
                    y: 50,
                    opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.3 * (index + 1),
                    scrollTrigger: {
                        trigger: card,
                        start: 'top bottom-=100'
                    }
                }
            )
        });
        gsap.fromTo(
            sectionRef.current,
            { opacity: 0 },
            { opacity: 1 , duration: 1.5 });
    }, []);

    return (
        <section id="work" ref={sectionRef} className="app-showcase">
            <div className="w-full">
                {/* PREMIÈRE LIGNE */}
                <div className="showcaselayout">
                    {/* LEFT */}
                    <div className="first-project-wrapper" ref={project1Ref}>
                        <div className="image-wrapper">
                            <img src="/images/projet1S.png" alt="Solar System" />
                        </div>
                        <div className="text-content">
                            <h2>3D Solar System Data Visualization</h2>
                            <p className="text-white-50 md:text-xl">
                                Take a deep dive into the cosmos with detailed celestial views. Explore their size, composition, and orbit for an immersive educational journey far beyond Earth.<br />
                                <br />
                                <strong>Stack :</strong> Three.js, Node.js, HTML, CSS, JavaScript.
                            </p>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="project-list-wrapper overflow-hidden">
                        <div className="project" ref={project2Ref}>
                            <div className="image-wrapper bg-[#ffefdb]">
                                <img src="/images/projet2C.png" alt="Mycinema" />
                            </div>
                            <h2>My cinema - plateform for admin</h2>
                        </div>

                        <div className="project" ref={project3Ref}>
                            <div className="image-wrapper bg-[#ffe7db]">
                                <img src="/images/projet3K.png" alt="Klivio" />
                            </div>
                            <h2>Klivio - app for training</h2>
                        </div>
                    </div>
                </div>

                {/* DEUXIÈME LIGNE - INVERSÉE */}
                <div className="showcaselayout mt-20">
                    {/* LEFT - Rot & Reload (Petit) */}
                    <div className="project-list-wrapper overflow-hidden">
                        <div className="project" ref={video2Ref} onClick={() => togglePlay(videoJavaRef)}>
                            <div className="image-wrapper cursor-pointer group relative bg-black">
                                <video
                                    ref={videoJavaRef}
                                    src="/videos/Rotnreload-web.mp4"
                                    preload="metadata"
                                    playsInline
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                                    <div className="bg-white/20 p-3 rounded-full backdrop-blur-sm">🔊 Play Sound</div>
                                </div>
                            </div>
                            <h2>Rot & Reload - Java Game</h2>
                        </div>
                    </div>

                    {/* RIGHT - Connect'In (Grand) */}
                    <div className="first-project-wrapper" ref={video1Ref} onClick={() => togglePlay(videoConnectInRef)}>
                        <div className="image-wrapper cursor-pointer group relative">
                            <video
                                ref={videoConnectInRef}
                                src="/videos/Connectin-web.mp4"
                                loop
                                muted
                                playsInline
                                preload="metadata"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                                <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm">▶️</div>
                            </div>
                        </div>
                        <div className="text-content">
                            <h2>Connect'In - Social Network</h2>
                            <p className="text-white-50 md:text-xl">
                                FullStack Social Network: private messaging, post management, and social interactions. (Watch demo)<br /><br />
                                <strong>Stack :</strong> Laravel, React, Docker, Tailwind.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ShowcaseSection
