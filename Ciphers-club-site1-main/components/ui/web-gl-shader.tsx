'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export function WebGLShader() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const sceneRef = useRef<{
    scene: THREE.Scene | null
    camera: THREE.OrthographicCamera | null
    renderer: THREE.WebGLRenderer | null
    mesh: THREE.Mesh | null
    uniforms: {
      resolution: { value: [number, number] }
      time: { value: number }
    } | null
    animationId: number | null
  }>({
    scene: null,
    camera: null,
    renderer: null,
    mesh: null,
    uniforms: null,
    animationId: null,
  })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const refs = sceneRef.current

   const vertexShader = `
      attribute vec3 position;

      void main() {
        gl_Position = vec4(position, 1.0);
      }
    `

    const fragmentShader = `
      precision highp float;

      uniform vec2 resolution;
      uniform float time;

      void main() {
        vec2 p =
          (gl_FragCoord.xy * 2.0 - resolution)
          / min(resolution.x, resolution.y);

        float d = length(p) * 0.05;

        float rx = p.x * (1.0 + d);
        float gx = p.x;
        float bx = p.x * (1.0 - d);

        float r =
          0.045 /
          abs(p.y + sin((rx + time * 0.45) * 2.2) * 0.34);

        float g =
          0.045 /
          abs(p.y + sin((gx + time * 0.45) * 2.2) * 0.34);

        float b =
          0.045 /
          abs(p.y + sin((bx + time * 0.45) * 2.2) * 0.34);

        vec3 color = vec3(r, g, b);

        color = pow(color, vec3(1.15));

        gl_FragColor = vec4(color, 1.0);
      }
    `

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: false,
    })

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(new THREE.Color(0x020504))

    refs.renderer = renderer

    const scene = new THREE.Scene()
    refs.scene = scene

    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)
    refs.camera = camera

    refs.uniforms = {
      resolution: {
        value: [window.innerWidth, window.innerHeight],
      },
      time: {
        value: 0,
      },
    }

    const geometry = new THREE.BufferGeometry()

    const positions = new Float32Array([
      -1, -1, 0,
       1, -1, 0,
      -1,  1, 0,

       1, -1, 0,
       1,  1, 0,
      -1,  1, 0,
    ])

    geometry.setAttribute(
      'position',
      new THREE.BufferAttribute(positions, 3)
    )

    const material = new THREE.RawShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: refs.uniforms,
    })

    const mesh = new THREE.Mesh(geometry, material)

    refs.mesh = mesh
    scene.add(mesh)

    const handleResize = () => {
      if (!refs.renderer || !refs.uniforms) return

      const width = window.innerWidth
      const height = window.innerHeight

      refs.renderer.setSize(width, height, false)
      refs.uniforms.resolution.value = [width, height]
    }

    const animate = () => {
      if (refs.uniforms) {
        refs.uniforms.time.value += 0.012
      }

      if (refs.renderer && refs.scene && refs.camera) {
        refs.renderer.render(refs.scene, refs.camera)
      }

      refs.animationId = requestAnimationFrame(animate)
    }

    handleResize()
    animate()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)

      if (refs.animationId !== null) {
        cancelAnimationFrame(refs.animationId)
      }

      geometry.dispose()
      material.dispose()
      renderer.dispose()

      refs.scene = null
      refs.camera = null
      refs.renderer = null
      refs.mesh = null
      refs.uniforms = null
      refs.animationId = null
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 h-full w-full"
    />
  )
}