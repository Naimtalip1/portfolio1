'use client'

import { useEffect, useRef, useState } from 'react'

export default function HeroBackground() {
  const canvasRef = useRef(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId
    const dpr = Math.min(typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1, 2)

    const resize = () => {
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      ctx.scale(dpr, dpr)
    }
    resize()
    window.addEventListener('resize', resize)

    // Smooth cursor tracking
    const mouse = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      targetX: window.innerWidth / 2,
      targetY: window.innerHeight / 2,
      active: false,
    }

    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouse.targetX = e.clientX - rect.left
      mouse.targetY = e.clientY - rect.top
      mouse.active = true
    }

    const onMouseLeave = () => {
      mouse.active = false
    }

    // Click wave ripples
    const ripples = []
    const onClick = (e) => {
      const rect = canvas.getBoundingClientRect()
      ripples.push({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        radius: 10,
        maxRadius: 220,
        alpha: 0.6,
        speed: 3.5,
      })
    }

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseleave', onMouseLeave)
    window.addEventListener('click', onClick)

    // --- NODES & SYNAPSE SETUP ---
    const isMobile = window.innerWidth < 768
    const count = isMobile ? 28 : 55
    const nodes = []

    for (let i = 0; i < count; i++) {
      nodes.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 1.5 + 1,
        color: i % 3 === 0 ? '#38bdf8' : i % 2 === 0 ? '#818cf8' : '#60a5fa',
        pulse: Math.random() * Math.PI * 2,
      })
    }

    // Glowing data packet pulses along lines
    const packets = []
    const spawnPacket = (from, to) => {
      packets.push({
        fromX: from.x,
        fromY: from.y,
        toX: to.x,
        toY: to.y,
        progress: 0,
        speed: 0.012 + Math.random() * 0.018,
      })
    }

    // Aurora atmospheric glowing orbs
    const orbs = [
      { x: window.innerWidth * 0.2, y: window.innerHeight * 0.35, vx: 0.15, vy: 0.1, r: 420, color: 'rgba(59, 130, 246, 0.22)' },
      { x: window.innerWidth * 0.8, y: window.innerHeight * 0.5, vx: -0.12, vy: -0.15, r: 480, color: 'rgba(99, 102, 241, 0.20)' },
      { x: window.innerWidth * 0.5, y: window.innerHeight * 0.75, vx: 0.1, vy: -0.08, r: 380, color: 'rgba(14, 165, 233, 0.16)' },
    ]

    let frame = 0

    const render = () => {
      frame++
      const w = window.innerWidth
      const h = window.innerHeight

      // Cursor smoothing
      mouse.x += (mouse.targetX - mouse.x) * 0.06
      mouse.y += (mouse.targetY - mouse.y) * 0.06

      ctx.clearRect(0, 0, w, h)

      // Base background gradient: rich, deep navy to midnight slate
      const bg = ctx.createLinearGradient(0, 0, w, h)
      bg.addColorStop(0, '#0a172e')
      bg.addColorStop(0.5, '#0f244a')
      bg.addColorStop(1, '#0c1a33')
      ctx.fillStyle = bg
      ctx.fillRect(0, 0, w, h)

      // 1. Organic Aurora Orbs
      orbs.forEach((orb) => {
        orb.x += orb.vx
        orb.y += orb.vy

        if (orb.x < -100 || orb.x > w + 100) orb.vx *= -1
        if (orb.y < -100 || orb.y > h + 100) orb.vy *= -1

        const grad = ctx.createRadialGradient(orb.x, orb.y, 10, orb.x, orb.y, orb.r)
        grad.addColorStop(0, orb.color)
        grad.addColorStop(1, 'transparent')
        ctx.fillStyle = grad
        ctx.beginPath()
        ctx.arc(orb.x, orb.y, orb.r, 0, Math.PI * 2)
        ctx.fill()
      })

      // 2. Cursor Spotlight (Linear/Vercel ambient glow)
      if (mouse.active) {
        const spot = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 350)
        spot.addColorStop(0, 'rgba(56, 189, 248, 0.12)')
        spot.addColorStop(0.5, 'rgba(99, 102, 241, 0.06)')
        spot.addColorStop(1, 'transparent')
        ctx.fillStyle = spot
        ctx.beginPath()
        ctx.arc(mouse.x, mouse.y, 350, 0, Math.PI * 2)
        ctx.fill()
      }

      // 3. Click Ripples
      for (let i = ripples.length - 1; i >= 0; i--) {
        const rip = ripples[i]
        rip.radius += rip.speed
        rip.alpha -= 0.014

        if (rip.alpha <= 0 || rip.radius >= rip.maxRadius) {
          ripples.splice(i, 1)
          continue
        }

        ctx.strokeStyle = `rgba(56, 189, 248, ${rip.alpha})`
        ctx.lineWidth = 1.2
        ctx.beginPath()
        ctx.arc(rip.x, rip.y, rip.radius, 0, Math.PI * 2)
        ctx.stroke()
      }

      // 4. Neural Network Connections & Nodes
      const maxDist = isMobile ? 95 : 135

      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i]
        a.x += a.vx
        a.y += a.vy

        // Bounce
        if (a.x < 0 || a.x > w) a.vx *= -1
        if (a.y < 0 || a.y > h) a.vy *= -1

        // Mouse tether
        if (mouse.active) {
          const dx = mouse.x - a.x
          const dy = mouse.y - a.y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < 160) {
            const pull = (1 - d / 160) * 0.5
            a.x += (dx / d) * pull
            a.y += (dy / d) * pull

            ctx.strokeStyle = `rgba(56, 189, 248, ${(1 - d / 160) * 0.25})`
            ctx.lineWidth = 0.8
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(mouse.x, mouse.y)
            ctx.stroke()
          }
        }

        // Connect to neighbors
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const d = Math.sqrt(dx * dx + dy * dy)

          if (d < maxDist) {
            const alpha = (1 - d / maxDist) * 0.18
            ctx.strokeStyle = `rgba(129, 140, 248, ${alpha})`
            ctx.lineWidth = 0.6
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()

            if (frame % 80 === 0 && Math.random() < 0.12 && packets.length < 12) {
              spawnPacket(a, b)
            }
          }
        }
      }

      // Draw light packets traveling
      for (let p = packets.length - 1; p >= 0; p--) {
        const pkt = packets[p]
        pkt.progress += pkt.speed

        if (pkt.progress >= 1) {
          packets.splice(p, 1)
          continue
        }

        const px = pkt.fromX + (pkt.toX - pkt.fromX) * pkt.progress
        const py = pkt.fromY + (pkt.toY - pkt.fromY) * pkt.progress

        ctx.fillStyle = '#67e8f9'
        ctx.beginPath()
        ctx.arc(px, py, 1.8, 0, Math.PI * 2)
        ctx.fill()
      }

      // Draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i]
        n.pulse += 0.025
        const r = n.radius + Math.sin(n.pulse) * 0.4

        ctx.fillStyle = n.color
        ctx.beginPath()
        ctx.arc(n.x, n.y, r, 0, Math.PI * 2)
        ctx.fill()
      }

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseleave', onMouseLeave)
      window.removeEventListener('click', onClick)
    }
  }, [mounted])

  return (
    <div className="absolute inset-0 overflow-hidden w-full h-full pointer-events-auto select-none z-0">
      <canvas
        ref={canvasRef}
        className="block w-full h-full"
        style={{ width: '100%', height: '100%' }}
      />
      {/* Subtle radial vignette to focus attention on content */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/30 pointer-events-none z-10" />
    </div>
  )
}
