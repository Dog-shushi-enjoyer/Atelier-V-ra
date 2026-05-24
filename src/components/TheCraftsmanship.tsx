/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion } from "motion/react";
import { PORTFOLIO_ARTIFACTS } from "../data";
import { CuratorialPerspective, TextureDetail } from "../types";
import { Sparkles, Eye, ShieldCheck, Microscope } from "lucide-react";

interface TheCraftsmanshipProps {
  perspective: CuratorialPerspective;
}

export default function TheCraftsmanship({ perspective }: TheCraftsmanshipProps) {
  const isPrestige = perspective === "PRESTIGE";
  
  // Flatten textures list across all portfolio artifacts for the composite study ledger
  const allTextures: TextureDetail[] = PORTFOLIO_ARTIFACTS.flatMap((art) => art.textures);
  
  const [selectedTexture, setSelectedTexture] = useState<TextureDetail>(allTextures[0]);
  const [zoomScale, setZoomScale] = useState<number>(1);
  const [isExamining, setIsExamining] = useState<boolean>(false);

  return (
    <section
      id="craftsmanship-section"
      className="relative min-h-screen py-24 px-6 md:px-16 flex flex-col justify-center overflow-hidden"
      style={{
        backgroundColor: isPrestige ? "#25201e" : "#1e1a19",
        color: isPrestige ? "#b8aca2" : "#b8aca2",
        transition: "background-color 1.2s ease, color 1.2s ease"
      }}
    >
      <div className="absolute inset-x-0 top-0 h-[100px] bg-gradient-to-b from-[#1b1716] to-transparent opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full z-10 relative">
        {/* Stage Header */}
        <div className="flex justify-between items-end border-b pb-8 border-current/10 mb-16">
          <div className="flex flex-col">
            <span className="text-[10px] font-mono tracking-widest text-[#827168] uppercase mb-1">
              Tactile Verification // Stage 04
            </span>
            <h2
              className={`text-4xl md:text-5xl font-light tracking-tight ${
                isPrestige ? "font-serif-prestige" : "font-serif-avant"
              }`}
            >
              CRAFT &amp; PROVENANCE
            </h2>
          </div>
          <span className="hidden md:block text-[10px] font-mono tracking-[0.2em] opacity-80 uppercase text-[#827168]">
            Extreme HD Texture Analytics
          </span>
        </div>

        {/* Dynamic Micro-Interaction Laboratory Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Column 1: Texture Selector Cards (Asymmetrical Column) (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <Microscope size={14} className="text-[#931717]" />
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#827168]">
                Material Specimen Ledger
              </span>
            </div>

            <div className="space-y-4">
              {allTextures.map((tex) => {
                const isCurrent = selectedTexture.id === tex.id;
                return (
                  <button
                    key={tex.id}
                    id={`select-texture-${tex.id}`}
                    onClick={() => {
                      setSelectedTexture(tex);
                      setZoomScale(1);
                    }}
                    className={`w-full text-left p-6 border transition-all duration-500 rounded relative overflow-hidden group ${
                      isCurrent
                        ? "bg-black/45 border-[#931717] translate-x-1"
                        : "bg-black/15 border-current/10 hover:border-current/30"
                    }`}
                  >
                    {/* Shadow overlay highlights */}
                    <div className="absolute inset-y-0 left-0 w-[3px] bg-[#931717] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center" />
                    
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-[9px] font-mono text-[#827168] tracking-widest block uppercase">
                        Specimen {tex.id.slice(0, 8).toUpperCase()}
                      </span>
                      {isCurrent && (
                        <span className="text-[8px] font-mono text-[#931717] border border-[#931717] px-2 py-0.5 tracking-widest uppercase rounded">
                          ACTIVE SCAN
                        </span>
                      )}
                    </div>

                    <h4
                      className={`text-lg md:text-xl font-light tracking-tight transition-colors duration-300 ${
                        isCurrent ? "text-white" : "text-current/80"
                      } ${isPrestige ? "font-serif-prestige" : "font-sans-avant"}`}
                    >
                      {tex.name}
                    </h4>

                    <div className="mt-3 flex items-center justify-between text-[10px] font-mono text-[#827168]">
                      <span>Click to render macro view</span>
                      <span>{tex.shadowFactor.split(" ")[0]} Light Abs.</span>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="p-6 bg-black/40 border border-current/10 font-mono text-xs text-current/75 space-y-3">
              <div className="flex items-center gap-2 text-[#827168]">
                <ShieldCheck size={14} className="text-[#931717]" />
                <span className="uppercase tracking-widest font-semibold">Integrity Protocol</span>
              </div>
              <p className="leading-relaxed text-[11px] uppercase">
                We collect no mass-produced elements. Every specimen is individually commissioned, hand-hewn, and certified by chemical analysis of local trace mineral impurities.
              </p>
            </div>
          </div>

          {/* Column 2: The High Contrast Cinematic Micro-Shot Viewer (7 cols) */}
          <div className="lg:col-span-7 space-y-8 bg-black/30 p-6 md:p-8 rounded border border-current/10">
            <div className="flex justify-between items-center pb-4 border-b border-current/10 font-mono text-[11px]">
              <span className="text-[#827168] uppercase tracking-wider">
                MACRO SPECTROGRAPHIC PROJECTION_
              </span>
              <div className="flex items-center gap-4">
                <span>ZOOM: {zoomScale}x</span>
              </div>
            </div>

            {/* Immersive interactive visual frame holding macro-shot */}
            <div
              className="relative aspect-video w-full bg-black overflow-hidden border border-current/15 group cursor-zoom-in"
              onMouseEnter={() => setIsExamining(true)}
              onMouseLeave={() => {
                setIsExamining(false);
                setZoomScale(1);
              }}
              onMouseMove={() => {
                if (zoomScale < 1.4) {
                  setZoomScale(1.4);
                }
              }}
            >
              {/* Scanline overlay representing scientific verification for Julian Vance */}
              <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-transparent via-current/[0.04] to-transparent bg-[length:100%_4px]" />
              
              <div className="absolute top-4 left-4 z-10 bg-black/75 px-3 py-1 text-[9px] font-mono tracking-widest text-[#931717] uppercase rounded border border-[#931717]/20">
                SOMA-PROBE: 01-ACTIVE
              </div>

              {/* Dynamic slow panning/zoom lens */}
              <motion.img
                src={selectedTexture.image}
                alt={selectedTexture.name}
                referrerPolicy="no-referrer"
                animate={{
                  scale: zoomScale,
                  filter: isExamining
                    ? "contrast(1.45) brightness(0.95)"
                    : "contrast(1.2) grayscale(0.2) brightness(0.85)"
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full h-full object-cover origin-center"
              />

              <div className="absolute bottom-4 right-4 z-10 bg-black/80 p-3 text-right max-w-xs border border-current/10">
                <span className="text-[8px] font-mono text-[#827168] uppercase block mb-1">
                  TACTILE FEEDBACK COEFFICIENT
                </span>
                <span className="text-xs font-mono uppercase font-bold text-white tracking-tight">
                  {selectedTexture.tactileFeedback}
                </span>
              </div>
            </div>

            {/* Specefics Spec Metadata Sheet for Connoisseur Helena Rostova */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-black/20 p-6 border border-current/5 font-mono text-xs">
              <div className="space-y-4">
                <div>
                  <span className="text-[#827168] block uppercase tracking-[0.15em] mb-1">
                    Geological Provenance
                  </span>
                  <p className="text-current/90 leading-relaxed uppercase">
                    {selectedTexture.provenance}
                  </p>
                </div>
                <div>
                  <span className="text-[#827168] block uppercase tracking-[0.15em] mb-1">
                    Light Scattering Accentuation
                  </span>
                  <p className="text-[#931717] font-semibold leading-relaxed uppercase">
                    {selectedTexture.shadowFactor}
                  </p>
                </div>
              </div>

              <div className="space-y-4 md:border-l md:pl-6 border-current/10">
                <div>
                  <span className="text-[#827168] block uppercase tracking-[0.15em] mb-1">
                    Chemical Imperative
                  </span>
                  <p className="text-current/80 leading-relaxed">
                    {selectedTexture.chemicalComposition}
                  </p>
                </div>
                <div>
                  <span className="text-[#827168] block uppercase tracking-[0.15em] mb-1">
                    Micro-Surface Integrity
                  </span>
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#931717] animate-ping" />
                    <span className="text-current/95 uppercase text-[10px]">PASSES TWILIGHT DIFFRACTION TEST</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
