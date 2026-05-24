/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion } from "motion/react";
import { ATELIER_MANIFESTO } from "../data";
import { CuratorialPerspective } from "../types";

interface ManifestoProps {
  perspective: CuratorialPerspective;
}

export default function Manifesto({ perspective }: ManifestoProps) {
  const isPrestige = perspective === "PRESTIGE";
  const [tactileTension, setTactileTension] = useState<number>(0.85); // Interactive slide controller for opacity/focus

  return (
    <section
      id="manifesto-section"
      className="relative min-h-screen w-full flex flex-col justify-center py-20 px-6 md:px-16"
      style={{
        backgroundColor: isPrestige ? "#25201e" : "#1e1a19",
        color: isPrestige ? "#b8aca2" : "#b8aca2",
        transition: "background-color 1.2s ease, color 1.2s ease"
      }}
    >
      {/* Structural blueprint grids embedded silently into background */}
      <div className="absolute inset-0 z-0 opacity-5 grid grid-cols-4 md:grid-cols-6 pointer-events-none">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="border-r border-current h-full relative">
            <span className="absolute bottom-4 left-2 text-[8px] font-mono select-none">
              COORD_R0{i + 1}
            </span>
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto w-full flex flex-col justify-center">
        {/* Stage Label */}
        <div className="flex items-center gap-2 mb-12">
          <span className="text-[10px] font-mono tracking-widest text-[#827168] uppercase">
            Curatorial Manifesto // Stage 02
          </span>
          <span className="h-[1px] w-12 bg-current opacity-20"></span>
        </div>

        {/* Big Quote Monolith */}
        <blockquote className="mb-14 overflow-hidden">
          <p
            className={`text-4xl md:text-6xl lg:text-7xl leading-tight font-light select-none ${
              isPrestige ? "font-serif-prestige" : "font-serif-avant"
            }`}
            style={{
              color: isPrestige ? "#b8aca2" : "#931717",
              transition: "color 1s ease"
            }}
          >
            "{ATELIER_MANIFESTO.quote}"
          </p>
        </blockquote>

        {/* Dynamic Opacity Controller Slider - Replaces traditional sliders with high-art UI */}
        <div className="mb-16 max-w-md bg-black/20 p-6 rounded border border-current/15">
          <div className="flex justify-between items-center mb-3">
            <span className="text-[10px] font-mono tracking-widest uppercase text-[#827168]">
              COGNITIVE PAUSE REGULATOR_
            </span>
            <span className="text-xs font-mono text-current opacity-80">
              {Math.round(tactileTension * 100)}% Focus Tension
            </span>
          </div>
          <input
            id="tension-regulator-input"
            type="range"
            min="0.15"
            max="1"
            step="0.01"
            value={tactileTension}
            onChange={(e) => setTactileTension(parseFloat(e.target.value))}
            className="w-full h-[2px] bg-current/20 appearance-none cursor-ew-resize accent-[#931717]"
          />
          <p className="text-[9px] font-mono text-[#827168] mt-2 uppercase tracking-wide">
            Adjust the tension threshold to focus the literary prose beneath. Forces cognitive stillness.
          </p>
        </div>

        {/* Manifesto paragraphs rendering with calculated opacity based on control slider */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          <div className="space-y-8 flex flex-col justify-between">
            <p
              className={`text-lg md:text-xl leading-relaxed font-light ${
                isPrestige ? "font-sans-prestige" : "font-sans-avant"
              }`}
              style={{
                opacity: tactileTension,
                transition: "opacity 0.4s ease, color 1s ease"
              }}
            >
              {ATELIER_MANIFESTO.paragraphs[0]}
            </p>
            <p
              className={`text-base md:text-lg leading-relaxed ${
                isPrestige ? "font-sans-prestige" : "font-sans-avant"
              } text-current/80`}
              style={{
                opacity: Math.max(0.15, tactileTension - 0.2),
                transition: "opacity 0.4s ease, color 1s ease"
              }}
            >
              {ATELIER_MANIFESTO.paragraphs[1]}
            </p>
          </div>

          <div className="flex flex-col justify-between pt-4 border-t md:border-t-0 md:border-l md:pl-12 border-current/10">
            <p
              className={`text-base md:text-lg leading-relaxed ${
                isPrestige ? "font-sans-prestige font-light italic" : "font-sans-avant font-light"
              }`}
              style={{
                opacity: Math.max(0.2, tactileTension - 0.1),
                transition: "opacity 0.4s ease, color 1s ease"
              }}
            >
              {ATELIER_MANIFESTO.paragraphs[2]}
            </p>

            <div className="mt-12 md:mt-0 p-6 border-l-2 border-[#931717] bg-black/10">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#827168] block mb-2">
                Curatorial Protocol
              </span>
              <p className="text-xs font-mono text-current/70 leading-relaxed">
                By maintaining uncompromised ratios of literal whitespace and tactile material studies, we restrict application visibility strictly to intellectual peers who understand spatial mass.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
