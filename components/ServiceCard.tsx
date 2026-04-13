"use client";

import { useState } from "react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="rounded-xl p-6 transition-all duration-200 cursor-default"
      style={{
        backgroundColor: hovered ? "oklch(0.99 0.004 70)" : "oklch(0.97 0.006 70)",
        border: `1px solid ${hovered ? "oklch(0.80 0.025 230)" : "oklch(0.88 0.012 70)"}`,
        boxShadow: hovered ? "0 4px 16px oklch(0.36 0.07 230 / 0.08)" : "none",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
      }}
      role="article"
      aria-label={title}
    >
      <div
        className="w-11 h-11 rounded-lg flex items-center justify-center mb-4 transition-colors duration-200"
        style={{
          backgroundColor: hovered ? "oklch(0.36 0.07 230 / 0.12)" : "oklch(0.36 0.07 230 / 0.07)",
        }}
      >
        <div style={{ color: "oklch(0.36 0.07 230)" }}>{icon}</div>
      </div>
      <h3
        className="font-bold text-base mb-2"
        style={{ fontFamily: "var(--font-display, Domine, serif)", color: "oklch(0.18 0.02 240)" }}
      >
        {title}
      </h3>
      <p className="text-sm leading-relaxed" style={{ color: "oklch(0.45 0.015 240)" }}>
        {description}
      </p>
    </div>
  );
}
