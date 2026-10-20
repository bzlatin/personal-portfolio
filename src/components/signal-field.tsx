"use client";
import { useId, useState, type CSSProperties } from "react";
const modes = ["Flow", "Orbit", "Wave"];
function makePath(line: number, mode: number) {
  const points = [];
  for (let step = 0; step <= 100; step++) {
    const t = (step / 100) * Math.PI * 2;
    const v = line / 42;
    let x: number, y: number;
    if (mode === 0) {
      const r = 130 + 55 * Math.sin(t * 3 + v * 3);
      x = 260 + Math.cos(t + v * 0.7) * r * (0.68 + v * 0.5);
      y = 240 + Math.sin(t) * r * 0.9 + (v - 0.5) * 100;
    } else if (mode === 1) {
      x = 260 + Math.cos(t) * (65 + v * 145);
      y = 240 + Math.sin(t) * (45 + v * 120) + Math.cos(t) * (v - 0.5) * 130;
    } else {
      x = 55 + step * 4.1;
      y = 130 + v * 220 + Math.sin(t + v * 4) * 55 + Math.sin(t * 2) * 20;
    }
    points.push(`${step === 0 ? "M" : "L"}${x.toFixed(2)},${y.toFixed(2)}`);
  }
  return points.join(" ");
}
export function SignalField() {
  const [mode, setMode] = useState(0);
  const id = useId();
  return (
    <div className="signal-field">
      <svg
        className="signal-art"
        viewBox="0 0 520 480"
        role="img"
        aria-label={`${modes[mode]}: an interactive study of computational linework`}
      >
        <defs>
          <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#626f58" />
            <stop offset=".5" stopColor="#d1e7a8" />
            <stop offset="1" stopColor="#718265" />
          </linearGradient>
        </defs>
        <g fill="none" stroke={`url(#${id})`} strokeWidth=".8">
          {Array.from({ length: 43 }, (_, i) => (
            <path
              key={i}
              d={makePath(i, mode)}
              style={{ d: `path("${makePath(i, mode)}")` } as CSSProperties}
              opacity={0.35 + i / 65}
            />
          ))}
        </g>
      </svg>
      <div className="signal-bottom">
        <div
          className="signal-controls"
          role="group"
          aria-label="Linework shape"
        >
          {modes.map((label, i) => (
            <button
              key={label}
              type="button"
              aria-pressed={mode === i}
              onClick={() => setMode(i)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
