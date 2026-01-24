"use client";

import { useEffect, useState, useRef } from "react";

interface Position {
  x: number;
  y: number;
}

export default function CustomCursor() {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [trail, setTrail] = useState<Position[]>([]);
  const animationRef = useRef<number | null>(null);
  const trailRef = useRef<Position[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newPosition = { x: e.clientX, y: e.clientY };
      setPosition(newPosition);
      setIsVisible(true);

      const target = e.target as HTMLElement;
      const isClickable =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        window.getComputedStyle(target).cursor === "pointer";
      setIsPointer(Boolean(isClickable));

      // Update trail
      trailRef.current = [newPosition, ...trailRef.current.slice(0, 4)];
      setTrail([...trailRef.current]);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // Don't render on touch devices
  if (typeof window !== "undefined" && "ontouchstart" in window) {
    return null;
  }

  return (
    <>
      {/* Cursor trail dots */}
      {trail.map((pos, index) => (
        <div
          key={index}
          className="fixed pointer-events-none z-[9997] transition-all duration-300 ease-out"
          style={{
            left: pos.x,
            top: pos.y,
            transform: `translate(-50%, -50%) scale(${0.8 - index * 0.15})`,
            opacity: (0.6 - index * 0.15) * (isVisible ? 1 : 0),
          }}
        >
          <div className="w-2 h-2 rounded-full bg-cyan-electric/60" />
        </div>
      ))}

      {/* Main cursor dot with glow */}
      <div
        className={`fixed pointer-events-none z-[9999] mix-blend-difference transition-all duration-150 ease-out ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          left: position.x,
          top: position.y,
          transform: `translate(-50%, -50%) scale(${isClicking ? 0.7 : isPointer ? 1.2 : 1}) rotate(${isClicking ? 45 : 0}deg)`,
        }}
      >
        <div
          className={`rounded-full bg-cyan-electric transition-all duration-200 shadow-lg ${
            isPointer ? "w-5 h-5 shadow-cyan-electric/50" : "w-3 h-3"
          }`}
        />
        {/* Glow effect */}
        <div
          className={`absolute inset-0 rounded-full bg-cyan-electric/30 blur-sm transition-all duration-300 ${
            isPointer ? "w-8 h-8 -m-1.5" : "w-6 h-6 -m-1.5"
          }`}
        />
      </div>

      {/* Animated cursor ring */}
      <div
        className={`fixed pointer-events-none z-[9998] transition-all duration-400 ease-out ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          left: position.x,
          top: position.y,
          transform: `translate(-50%, -50%) scale(${isPointer ? 2 : 1}) rotate(${isClicking ? 180 : 0}deg)`,
        }}
      >
        <div
          className={`rounded-full border-2 transition-all duration-300 animate-pulse ${
            isPointer
              ? "w-12 h-12 border-cyan-electric shadow-lg shadow-cyan-electric/20"
              : "w-8 h-8 border-white/40"
          }`}
        />
        {/* Outer ring for extra effect */}
        <div
          className={`absolute inset-0 rounded-full border transition-all duration-500 ${
            isPointer
              ? "w-16 h-16 -m-2 border-cyan-electric/20 animate-ping"
              : "w-12 h-12 -m-2 border-white/10"
          }`}
        />
      </div>

      {/* Magnetic effect particles */}
      {isPointer && (
        <>
          <div
            className="fixed pointer-events-none z-[9996] transition-all duration-300 ease-out"
            style={{
              left: position.x - 15,
              top: position.y - 15,
              transform: `translate(-50%, -50%) scale(${isVisible ? 1 : 0})`,
            }}
          >
            <div className="w-1 h-1 rounded-full bg-cyan-electric/80 animate-bounce" />
          </div>
          <div
            className="fixed pointer-events-none z-[9996] transition-all duration-400 ease-out"
            style={{
              left: position.x + 15,
              top: position.y - 15,
              transform: `translate(-50%, -50%) scale(${isVisible ? 1 : 0})`,
            }}
          >
            <div className="w-1 h-1 rounded-full bg-cyan-electric/60 animate-bounce" style={{ animationDelay: '0.1s' }} />
          </div>
          <div
            className="fixed pointer-events-none z-[9996] transition-all duration-500 ease-out"
            style={{
              left: position.x,
              top: position.y - 20,
              transform: `translate(-50%, -50%) scale(${isVisible ? 1 : 0})`,
            }}
          >
            <div className="w-1 h-1 rounded-full bg-cyan-electric/40 animate-bounce" style={{ animationDelay: '0.2s' }} />
          </div>
        </>
      )}

      {/* Hide default cursor */}
      <style jsx global>{`
        * {
          cursor: none !important;
        }
        @media (hover: none) and (pointer: coarse) {
          * {
            cursor: auto !important;
          }
        }
      `}</style>
    </>
  );
}
