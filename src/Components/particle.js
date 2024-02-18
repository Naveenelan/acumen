import React from 'react'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
function particle() {
    const particlesInit = async (main) => {
        console.log(main);
        await loadFull(main)
    };
    const particlesLoaded = (container) => {
        console.log(container);
    }
    return (
        <Particles className='particle'
            id="tsparticles"
            init={particlesInit}
            Loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "#1a1817",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ff6f00",
                    },
                    links: {
                        color: "#ff6f00",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 2,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        directions: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 2.3,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 2, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />
    )
}

export default particle
