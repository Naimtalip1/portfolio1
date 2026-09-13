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
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    // Handle high-DPI displays
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const resizeCanvas = () => {
      width = canvas.width = window.innerWidth * dpr
      height = canvas.height = window.innerHeight * dpr
      ctx.scale(dpr, dpr)
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Mouse tracking with smooth lerp
    const mouse = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      targetX: window.innerWidth / 2,
      targetY: window.innerHeight / 2,
      radius: 180,
      active: false,
    }

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouse.targetX = e.clientX - rect.left
      mouse.targetY = e.clientY - rect.top
      mouse.active = true
    }

    const handleMouseLeave = () => {
      mouse.active = false
    }

    // Ripple wave effect on click
    const ripples = []
    const handleCanvasClick = (e) => {
      const rect = canvas.getBoundingClientRect()
      ripples.push({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        radius: 10,
        maxRadius: 260,
        alpha: 0.8,
        speed: 4,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('click', handleCanvasClick)

    // --- 1. NEURAL NODES & SYNAPSES SETUP ---
    const isMobile = window.innerWidth < 768
    const nodeCount = isMobile ? 32 : 64
    const nodes = []

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        baseRadius: Math.random() * 2 + 1.2,
        color: i % 4 === 0 ? '#38bdf8' : i % 3 === 0 ? '#6366f1' : '#3F72AF',
        pulse: Math.random() * Math.PI * 2,
      })
    }

    // Dynamic data packets travelling along neural connections
    const packets = []
    const spawnPacket = (from, to) => {
      packets.push({
        fromX: from.x,
        fromY: from.y,
        toX: to.x,
        toY: to.y,
        progress: 0,
        speed: 0.015 + Math.random() * 0.02,
        color: '#67e8f9',
      })
    }

    // --- 2. AURORA ORBS SETUP ---
    const auroraOrbs = [
      { x: window.innerWidth * 0.25, y: window.innerHeight * 0.3, vx: 0.2, vy: 0.15, radius: 420, color: 'rgba(59, 130, 246, 0.18)' },
      { x: window.innerWidth * 0.75, y: window.innerHeight * 0.6, vx: -0.15, vy: -0.2, radius: 480, color: 'rgba(99, 102, 241, 0.16)' },
      { x: window.innerWidth * 0.5, y: window.innerHeight * 0.8, vx: 0.1, vy: -0.1, radius: 360, color: 'rgba(14, 165, 233, 0.14)' },
    ]

    // --- 3. ROBOTICS LIDAR SCAN SWEEP ---
    let lidarScanY = 0
    let lidarDir = 1

    let frame = 0

    // RENDER LOOP
    const render = () => {
      frame++
      const w = window.innerWidth
      const h = window.innerHeight

      // Smooth mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.08
      mouse.y += (mouse.targetY - mouse.y) * 0.08

      ctx.clearRect(0, 0, w, h)

      // --- LAYER 1: DEEP CANVAS GRADIENT ---
      const bgGrad = ctx.createLinearGradient(0, 0, 0, h)
      bgGrad.addColorStop(0, '#060d1d')
      bgGrad.addColorStop(0.5, '#0b1b36')
      bgGrad.addColorStop(1, '#081326')
      ctx.fillStyle = bgGrad
      ctx.fillRect(0, 0, w, h)

      // --- LAYER 2: ORGANIC AURORA ORBS ---
      auroraOrbs.forEach((orb) => {
        orb.x += orb.vx
        orb.y += orb.vy

        if (orb.x < -100 || orb.x > w + 100) orb.vx *= -1
        if (orb.y < -100 || orb.y > h + 100) orb.vy *= -1

        const radial = ctx.createRadialGradient(orb.x, orb.y, 10, orb.x, orb.y, orb.radius)
        radial.addColorStop(0, orb.color)
        radial.addColorStop(1, 'transparent')
        ctx.fillStyle = radial
        ctx.beginPath()
        ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      // --- LAYER 3: INTERACTIVE SPOTLIGHT (LINEAR/VERCEL GLOW) ---
      if (mouse.active) {
        const spotGrad = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 450)
        spotGrad.addColorStop(0, 'rgba(56, 189, 248, 0.15)')
        spotGrad.addColorStop(0.5, 'rgba(99, 102, 241, 0.07)')
        spotGrad.addColorStop(1, 'transparent')
        ctx.fillStyle = spotGrad
        ctx.beginPath()
        ctx.arc(mouse.x, mouse.y, 450, 0, Math.PI * 2)
        ctx.fill()
      }

      // --- LAYER 4: ROBOTICS PERSPECTIVE CYBER-GRID & LIDAR SWEEP ---
      ctx.save()
      const gridYStart = h * 0.45
      const gridHeight = h - gridYStart
      const gridCols = isMobile ? 12 : 24
      const vanishX = w / 2
      const vanishY = gridYStart - 80

      ctx.strokeStyle = 'rgba(56, 189, 248, 0.04)'
      ctx.lineWidth = 1

      // Perspective horizon lines
      for (let i = 0; i <= 8; i++) {
        const lineProg = Math.pow(i / 8, 2)
        const lineY = gridYStart + lineProg * gridHeight
        ctx.beginPath()
        ctx.moveTo(0, lineY)
        ctx.lineTo(w, lineY)
        ctx.stroke()
      }

      // Perspective vertical rays radiating from vanishing point
      for (let i = -gridCols / 2; i <= gridCols / 2; i++) {
        const bottomX = vanishX + (i * (w / (gridCols * 0.7)))
        ctx.beginPath()
        ctx.moveTo(vanishX, vanishY)
        ctx.lineTo(bottomX, h)
        ctx.stroke()
      }
      ctx.restore()

      // Autonomous LiDAR scan sweep
      lidarScanY += 1.2 * lidarDir
      if (lidarScanY > h) {
        lidarScanY = h
        lidarDir = -1
      } else if (lidarScanY < 0) {
        lidarScanY = 0
        lidarDir = 1
      }

      const scanGrad = ctx.createLinearGradient(0, lidarScanY - 40, 0, lidarScanY + 40)
      scanGrad.addColorStop(0, 'transparent')
      scanGrad.addColorStop(0.5, 'rgba(56, 189, 248, 0.12)')
      scanGrad.addColorStop(1, 'transparent')
      ctx.fillStyle = scanGrad
      ctx.fillRect(0, lidarScanY - 40, w, 80)

      // Subtle bright laser line at the center of the scan
      ctx.strokeStyle = 'rgba(103, 232, 249, 0.35)'
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.moveTo(0, lidarScanY)
      ctx.lineTo(w, lidarScanY)
      ctx.stroke()

      // --- LAYER 5: ROBOTICS CAD CROSSHAIRS & TELEMETRY ---
      const crosshairs = [
        { x: w * 0.1, y: h * 0.22, label: 'SYS_NODE::01' },
        { x: w * 0.88, y: h * 0.28, label: 'ROBOTICS_CORE' },
        { x: w * 0.12, y: h * 0.78, label: '1.5533° N, 110.3592° E' },
        { x: w * 0.85, y: h * 0.82, label: 'TEGAS_NEXUS' },
      ]

      ctx.save()
      ctx.font = '10px "Courier New", monospace'
      ctx.fillStyle = 'rgba(148, 163, 184, 0.35)'
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.25)'
      ctx.lineWidth = 1

      crosshairs.forEach((mark) => {
        // Draw small crosshair '+'
        ctx.beginPath()
        ctx.moveTo(mark.x - 7, mark.y)
        ctx.lineTo(mark.x + 7, mark.y)
        ctx.moveTo(mark.x, mark.y - 7)
        ctx.lineTo(mark.x, mark.y + 7)
        ctx.stroke()

        // Label
        ctx.fillText(mark.label, mark.x + 12, mark.y + 4)
      })
      ctx.restore()

      // --- LAYER 6: INTERACTIVE CLICK RIPPLES ---
      for (let i = ripples.length - 1; i >= 0; i--) {
        const rip = ripples[i]
        rip.radius += rip.speed
        rip.alpha -= 0.015

        if (rip.alpha <= 0 || rip.radius >= rip.maxRadius) {
          ripples.splice(i, 1)
          continue
        }

        ctx.save()
        ctx.strokeStyle = `rgba(56, 189, 248, ${rip.alpha})`
        ctx.lineWidth = 1.5
        ctx.beginPath()
        ctx.arc(rip.x, rip.y, rip.radius, 0, Math.PI * 2)
        ctx.stroke()

        ctx.strokeStyle = `rgba(99, 102, 241, ${rip.alpha * 0.5})`
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.arc(rip.x, rip.y, rip.radius * 0.7, 0, Math.PI * 2)
        ctx.stroke()
        ctx.restore()
      }

      // --- LAYER 7: NEURAL SYNAPSE NETWORK & VECTOR FILAMENTS ---
      const connectionDist = isMobile ? 100 : 140

      // Update and draw node connections
      for (let i = 0; i < nodes.length; i++) {
        const nodeA = nodes[i]

        // Position drift
        nodeA.x += nodeA.vx
        nodeA.y += nodeA.vy

        // Bounce on boundary
        if (nodeA.x < 0 || nodeA.x > w) nodeA.vx *= -1
        if (nodeA.y < 0 || nodeA.y > h) nodeA.vy *= -1

        // Mouse attraction/repulsion interaction
        if (mouse.active) {
          const dx = mouse.x - nodeA.x
          const dy = mouse.y - nodeA.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < mouse.radius) {
            const force = (1 - dist / mouse.radius) * 0.8
            nodeA.x += (dx / dist) * force * 1.5
            nodeA.y += (dy / dist) * force * 1.5

            // Draw laser tether to mouse cursor
            ctx.strokeStyle = `rgba(56, 189, 248, ${(1 - dist / mouse.radius) * 0.35})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(nodeA.x, nodeA.y)
            ctx.lineTo(mouse.x, mouse.y)
            ctx.stroke()
          }
        }

        // Ripple interaction
        ripples.forEach((rip) => {
          const dx = nodeA.x - rip.x
          const dy = nodeA.y - rip.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (Math.abs(dist - rip.radius) < 30) {
            const push = (1 - Math.abs(dist - rip.radius) / 30) * 2
            nodeA.x += (dx / (dist || 1)) * push
            nodeA.y += (dy / (dist || 1)) * push
          }
        })

        // Draw connections between nearby nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const nodeB = nodes[j]
          const dx = nodeA.x - nodeB.x
          const dy = nodeA.y - nodeB.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < connectionDist) {
            const alpha = (1 - dist / connectionDist) * 0.28
            ctx.strokeStyle = `rgba(99, 102, 241, ${alpha})`
            ctx.lineWidth = 0.8
            ctx.beginPath()
            ctx.moveTo(nodeA.x, nodeA.y)
            ctx.lineTo(nodeB.x, nodeB.y)
            ctx.stroke()

            // Randomly spawn data packet pulses
            if (frame % 90 === 0 && Math.random() < 0.15 && packets.length < 16) {
              spawnPacket(nodeA, nodeB)
            }
          }
        }
      }

      // Draw active data packets
      for (let p = packets.length - 1; p >= 0; p--) {
        const pkt = packets[p]
        pkt.progress += pkt.speed

        if (pkt.progress >= 1) {
          packets.splice(p, 1)
          continue
        }

        const currX = pkt.fromX + (pkt.toX - pkt.fromX) * pkt.progress
        const currY = pkt.fromY + (pkt.toY - pkt.fromY) * pkt.progress

        ctx.fillStyle = pkt.color
        ctx.shadowColor = pkt.color
        ctx.shadowBlur = 8
        ctx.beginPath()
        ctx.arc(currX, currY, 2.2, 0, Math.PI * 2)
        ctx.fill()
        ctx.shadowBlur = 0
      }

      // Draw the neural nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i]
        node.pulse += 0.03
        const radius = node.baseRadius + Math.sin(node.pulse) * 0.6

        // Node glow
        ctx.fillStyle = node.color
        ctx.shadowColor = node.color
        ctx.shadowBlur = 6
        ctx.beginPath()
        ctx.arc(node.x, node.y, radius, 0, Math.PI * 2)
        ctx.fill()
        ctx.shadowBlur = 0
      }

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('click', handleCanvasClick)
    }
  }, [mounted])

  return (
    <div className="absolute inset-0 overflow-hidden w-full h-full pointer-events-auto select-none z-0">
      <canvas
        ref={canvasRef}
        className="block w-full h-full"
        style={{ width: '100%', height: '100%' }}
      />
      {/* Heavy vignette to ensure seamless contrast for text and terminal */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-[#060d1d]/80 pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />
    </div>
  )
}
