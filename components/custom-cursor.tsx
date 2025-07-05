"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { useMouseStore } from "@/lib/store";

export function CustomCursor() {
  const { mousePosition, cursorVariant, setMousePosition, setCursorVariant } =
    useMouseStore();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setCursorVariant("hover");
    const handleMouseLeave = () => setCursorVariant("default");

    window.addEventListener("mousemove", handleMouseMove);

    const interactiveElements = document.querySelectorAll(
      'button, a, [role="button"], input, textarea'
    );
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [setMousePosition, setCursorVariant]);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1,
    },
    hover: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      scale: 1.5,
    },
    click: {
      x: mousePosition.x - 12,
      y: mousePosition.y - 12,
      scale: 0.8,
    },
  };

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-50 mix-blend-difference hidden md:block"
      variants={variants}
      animate={cursorVariant}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
    >
      <div className="w-full h-full bg-white rounded-full opacity-50" />
    </motion.div>
  );
}
