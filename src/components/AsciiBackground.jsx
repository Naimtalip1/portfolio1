'use client'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function AsciiBackground() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    const asciiArts = [
        "{ }", "</>", "/*", "*/", "=>", "==", "!==", "&&", "||", "const", "0101",
        "[ ]", "( )", "0", "1", "let", "function", "return", "import", "async", "await", "() =>", "N.T24",
    ]

    // Generate random floating items
    const floatingItems = Array.from({ length: 30 }).map((_, i) => {
        const text = asciiArts[Math.floor(Math.random() * asciiArts.length)]
        const left = `${Math.random() * 100}%`
        const duration = 15 + Math.random() * 25 // 15s to 40s
        const delay = Math.random() * -30 // start at random points in animation

        // Y movement goes from bottom to top or vice versa
        const fromY = Math.random() > 0.5 ? 1000 : -100
        const toY = fromY === 1000 ? -100 : 1000

        const sway = (Math.random() - 0.5) * 300

        return (
            <motion.div
                key={i}
                className="absolute text-[#DBE2EF]/20 font-mono text-lg md:text-3xl font-bold whitespace-nowrap pointer-events-none select-none z-0"
                style={{ left }}
                animate={{
                    y: [fromY, toY],
                    x: [0, sway, 0],
                    rotate: [0, Math.random() > 0.5 ? 360 : -360],
                    opacity: [0, 0.6, 0.6, 0],
                }}
                transition={{
                    duration,
                    delay,
                    repeat: Infinity,
                    ease: "linear"
                }}
            >
                {text}
            </motion.div>
        )
    })

    return (
        <div className="absolute inset-0 overflow-hidden w-full h-full pointer-events-none z-[5]">
            {/* Heavy glassmorphism on the Aurora sits at z-10, so z-[5] makes it sit behind the blur or in front depending on where it's placed. 
          Actually, let's make it z-[15] so it sits ABOVE the Aurora blur, but behind the text text (which is z-10 relative parent). 
          Wait, relative z-10 is the content container. So z-[5] here inside an absolute 0 container is fine. 
      */}
            {floatingItems}
        </div>
    )
}
