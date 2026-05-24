/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ChevronDown, Sparkles } from "lucide-react";
import { CuratorialPerspective } from "../types";

interface OpeningFrameProps {
  perspective: CuratorialPerspective;
  setPerspective: (p: CuratorialPerspective) => void;
  onScrollToManifesto: () => void;
}

export default function OpeningFrame({
  perspective,
  setPerspective,
  onScrollToManifesto
}: OpeningFrameProps) {
  const isPrestige = perspective === "PRESTIGE";

  return (
    <section
      id="opening-frame"
      className="relative h-screen w-full flex flex-col justify-between overflow-hidden px-6 py-8 md:px-16 md:py-12 select-none"
      style={{
        backgroundColor: isPrestige ? "#b8aca2" : "#25201e",
        color: isPrestige ? "#25201e" : "#b8aca2",
        transition: "background-color 1s ease, color 1s ease"
      }}
    >
      {/* Immersive Atmospheric Cinematic Asset (Panning/Zooming texture backdrops) */}
      <div className="absolute inset-0 z-0 opacity-25 mix-blend-multiply pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            rotate: [0, 1, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${
              isPrestige
                ? "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1600"
                : "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1600"
            })`,
            filter: "contrast(1.15) grayscale(0.5) brightness(0.7)"
          }}
        />
      </div>

      {/* Decorative Brand Header Lines & Perspective Toggle */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center w-full gap-4 max-w-7xl mx-auto border-b pb-4 border-current/10">
        <div className="flex flex-col">
          <span
            className={`text-xs uppercase tracking-[0.4em] ${
              isPrestige ? "font-sans-prestige text-[#827168]" : "font-sans-avant text-[#827168]"
            }`}
          >
            Atelier Véra
          </span>
          <span
            className={`text-[10px] tracking-[0.2em] font-mono opacity-80`}
          >
            ISSUE 01 // LANDSCAPE AS INTELLECT
          </span>
        </div>

        {/* Dynamic Micro-movement perspective curation toggle */}
        <div className="flex items-center gap-3">
          <span className="text-[10px] tracking-wider uppercase font-mono text-[#827168]">
            Perspective:
          </span>
          <div className="relative flex bg-black/10 rounded-full p-1 border border-current/10 overflow-hidden">
            <button
              id="set-perspective-prestige"
              onClick={() => setPerspective("PRESTIGE")}
              className={`px-4 py-1.5 text-[10px] tracking-[0.15em] uppercase transition-all duration-500 rounded-full z-10 font-mono ${
                isPrestige
                  ? "text-[#b8aca2] bg-[#25201e]"
                  : "text-current hover:opacity-100 opacity-60"
              }`}
            >
              PRESTIGE
            </button>
            <button
              id="set-perspective-avant-garde"
              onClick={() => setPerspective("AVANT_GARDE")}
              className={`px-4 py-1.5 text-[10px] tracking-[0.15em] uppercase transition-all duration-500 rounded-full z-10 font-mono ${
                !isPrestige
                  ? "text-[#25201e] bg-[#b8aca2]"
                  : "text-current hover:opacity-100 opacity-60"
              }`}
            >
              AVANT-GARDE
            </button>
          </div>
        </div>
      </div>

      {/* The Central Magazine Page Title Block */}
      <div className="relative z-10 flex flex-col justify-center my-auto w-full max-w-7xl mx-auto">
        <div className="overflow-hidden mb-2">
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span
              className={`text-xs uppercase tracking-[0.6em] ${
                isPrestige ? "font-sans-prestige text-[#827168]" : "font-sans-avant text-[#827168]"
              }`}
            >
              An Independent Design Monograph
            </span>
          </motion.div>
        </div>

        <h1 className="relative flex flex-col leading-[0.9] select-none">
          {/* Subtle overlay accent */}
          <span
            className="absolute -top-12 -left-6 text-7xl font-sans-avant opacity-10 blur-[1px]"
            style={{ color: "#931717" }}
          >
            ヴェラ
          </span>
          <span className="overflow-hidden py-2 block">
            <motion.span
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`text-6xl md:text-8xl lg:text-9xl block font-medium tracking-tight ${
                isPrestige ? "font-serif-prestige" : "font-serif-avant"
              }`}
            >
              ATELIER VÉRA
            </motion.span>
          </span>
          <span className="overflow-hidden py-2 block">
            <motion.span
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.4, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className={`text-3xl md:text-5xl lg:text-6xl text-opacity-80 block tracking-tight font-light italic ${
                isPrestige ? "font-serif-prestige" : "font-serif-avant"
              }`}
              style={{
                color: isPrestige ? "#931717" : "#931717"
              }}
            >
              CHRONICLES OF PERMANENCE
            </motion.span>
          </span>
        </h1>

        <div className="mt-8 flex flex-col md:flex-row gap-8 md:gap-16 w-full max-w-3xl">
          <div className="flex-1">
            <p
              className={`text-sm leading-relaxed ${
                isPrestige ? "font-sans-prestige font-light" : "font-sans-avant font-light"
              }`}
            >
              We deconstruct luxury. We reject standard sales checklists, noisy maps, and transactional clutter. This is a quiet archive of rare spatial landmarks built to command gravity and survive currents.
            </p>
          </div>
          <div className="flex-1 flex flex-col justify-end">
            <div className="flex items-center gap-2">
              <span className="h-[1px] w-8 bg-current opacity-40"></span>
              <span className="text-[10px] font-mono tracking-widest uppercase opacity-80">
                SCROLL DEPTH REVELATION01 // 05
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Understated Footer Guide */}
      <div className="relative z-10 flex justify-between items-end w-full max-w-7xl mx-auto border-t pt-4 border-current/10">
        <div className="text-[10px] font-mono opacity-80 uppercase tracking-widest">
          Est. 2026 // Zürich • Kyoto • Utah
        </div>

        <motion.button
          id="scroll-to-manifesto"
          onClick={onScrollToManifesto}
          className="group flex flex-col items-center gap-2 text-[10px] font-mono tracking-widest uppercase cursor-pointer hover:opacity-100 opacity-80"
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <span>ENTER PORTFOLIO ARCHIVE</span>
          <ChevronDown size={14} className="group-hover:translate-y-0.5 transition-transform duration-300" />
        </motion.button>

        <div className="hidden md:block text-[10px] font-mono opacity-80 uppercase tracking-widest text-[#827168]">
          No. 7a71d0fe
        </div>
      </div>
    </section>
  );
}
