'use client'
import { motion } from 'framer-motion'

export default function AuroraBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden w-full h-full bg-[#0b1b36] z-0">
            {/* Heavy glassmorphism layer to ensure smooth fluid blending */}
            <div className="absolute inset-0 backdrop-blur-[120px] z-10 w-full h-full pointer-events-none"></div>

            {/* Animated Orbs */}
            {/* Orb 1: Accent Color */}
            <motion.div
                className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-[#3F72AF] rounded-full mix-blend-screen opacity-60"
                style={{ filter: 'blur(100px)' }}
                animate={{
                    x: [0, 150, 0],
                    y: [0, 100, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                }}
            />

            {/* Orb 2: Secondary lighter Color */}
            <motion.div
                className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#DBE2EF] rounded-full mix-blend-screen opacity-20"
                style={{ filter: 'blur(120px)' }}
                animate={{
                    x: [0, -150, 0],
                    y: [0, -100, 0],
                    scale: [1, 1.5, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                }}
            />

            {/* Orb 3: Middle floating vibrant orb */}
            <motion.div
                className="absolute top-[30%] left-[40%] w-[400px] h-[400px] bg-[#6366f1] rounded-full mix-blend-screen opacity-30"
                style={{ filter: 'blur(100px)' }}
                animate={{
                    x: [0, 200, -150, 0],
                    y: [0, -150, 150, 0],
                    scale: [1, 0.8, 1.3, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                }}
            />
        </div>
    )
}
