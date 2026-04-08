'use client'
import { useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadSlim } from 'tsparticles-slim'

export default function ParticleBackground() {
    const particlesInit = useCallback(async engine => {
        await loadSlim(engine)
    }, [])

    return (
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-auto">
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={{
                    background: {
                        color: {
                            value: "transparent",
                        },
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: { enable: true, mode: "push" },
                            onHover: { enable: true, mode: "grab" },
                            resize: true,
                        },
                        modes: {
                            push: { quantity: 3 },
                            grab: { distance: 150, links: { opacity: 0.5 } },
                        },
                    },
                    particles: {
                        color: { value: "#DBE2EF" },
                        links: {
                            color: "#3F72AF",
                            distance: 150,
                            enable: true,
                            opacity: 0.2,
                            width: 1,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: { default: "bounce" },
                            random: false,
                            speed: 1.5,
                            straight: false,
                        },
                        number: {
                            density: { enable: true, area: 800 },
                            value: 50,
                        },
                        opacity: { value: 0.3 },
                        shape: { type: "circle" },
                        size: { value: { min: 1, max: 3 } },
                    },
                    detectRetina: true,
                }}
                className="w-full h-full"
            />
        </div>
    )
}
