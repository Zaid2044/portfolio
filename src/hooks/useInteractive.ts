'use client'

import { useEffect, useRef } from 'react'

interface MousePos {
  x: number
  y: number
}

export function useMousePosition() {
  const [mousePosition, setMousePosition] = useRef<MousePos>({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition.current = {
        x: e.clientX,
        y: e.clientY,
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return mousePosition.current
}

export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useRef<number>(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition.current = window.scrollY
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return scrollPosition.current
}

export function useViewportSize() {
  const [size, setSize] = useRef({ width: 0, height: 0 })

  useEffect(() => {
    const handleResize = () => {
      setSize.current = {
        width: window.innerWidth,
        height: window.innerHeight,
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return size.current
}
