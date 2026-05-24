/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ArrowRight, Layers, MapPin, HardHat, Compass } from "lucide-react";
import { PORTFOLIO_ARTIFACTS } from "../data";
import { CuratorialPerspective, ArchitecturalArtifact } from "../types";

interface TheCurationProps {
  perspective: CuratorialPerspective;
}

export default function TheCuration({ perspective }: TheCurationProps) {
  const isPrestige = perspective === "PRESTIGE";
  const [selectedArtifact, setSelectedArtifact] = useState<ArchitecturalArtifact | null>(null);

  return (
    <section
      id="curation-section"
      className="relative min-h-screen py-24 px-6 md:px-16 overflow-hidden"
      style={{
        backgroundColor: isPrestige ? "#b8aca2" : "#25201e",
        color: isPrestige ? "#25201e" : "#b8aca2",
        transition: "background-color 1.2s ease, color 1.2s ease"
      }}
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Stage Header */}
        <div className="flex justify-between items-end border-b pb-8 border-current/10 mb-20">
          <div className="flex flex-col">
            <span className="text-[10px] font-mono tracking-widest text-[#827168] uppercase mb-1">
              The Curation // Stage 03
            </span>
            <h2
              className={`text-4xl md:text-5xl font-light tracking-tight ${
                isPrestige ? "font-serif-prestige" : "font-serif-avant"
              }`}
            >
              PHYSICAL MONOLITHS
            </h2>
          </div>
          <span className="hidden md:block text-[10px] font-mono tracking-[0.2em] opacity-80 uppercase">
            Curatorial Collection // Zürich
          </span>
        </div>

        {/* Asymmetrical Gallery Grid */}
        <div className="relative flex flex-col gap-32 md:gap-48">
          {PORTFOLIO_ARTIFACTS.map((artifact, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={artifact.id}
                className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Image Monolith Frame */}
                <div className="w-full lg:w-3/5 relative group cursor-pointer overflow-hidden flex justify-center">
                  <div
                    className="absolute top-2 left-2 text-[10px] font-mono mix-blend-difference text-white z-10 tracking-[0.25em] px-2 py-1 bg-black/40"
                  >
                    {artifact.monographPage}
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.025 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    onClick={() => setSelectedArtifact(artifact)}
                    className="w-full h-[350px] md:h-[550px] bg-black overflow-hidden relative border border-current/10 shadow-2xl"
                  >
                    {/* Dark atmospheric mask */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 pointer-events-none transition-opacity duration-700 group-hover:opacity-40" />
                    <img
                      src={artifact.heroImage}
                      alt={artifact.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 filter grayscale-[20%] brightness-[85%]"
                    />
                  </motion.div>
                </div>

                {/* Editorial Text Block */}
                <div className="w-full lg:w-2/5 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin size={12} className="text-[#827168]" />
                    <span className="text-[10.5px] font-mono tracking-widest text-[#827168] uppercase">
                      {artifact.location}
                    </span>
                  </div>

                  <h3
                    className={`text-3xl md:text-4xl lg:text-5xl font-light tracking-tight mb-6 ${
                      isPrestige ? "font-serif-prestige" : "font-serif-avant"
                    }`}
                  >
                    {artifact.title}
                  </h3>

                  <p
                    className={`text-sm leading-relaxed mb-8 text-current/80 line-clamp-3 ${
                      isPrestige ? "font-sans-prestige font-light" : "font-sans-avant font-light"
                    }`}
                  >
                    {artifact.philosophy}
                  </p>

                  <div className="grid grid-cols-2 gap-4 border-t border-b py-6 border-current/10 mb-8 font-mono text-[10.5px]">
                    <div>
                      <span className="text-[#827168] block uppercase tracking-wider mb-1">
                        Somatic Metric
                      </span>
                      <span className="font-semibold">{artifact.scaleMetric}</span>
                    </div>
                    <div>
                      <span className="text-[#827168] block uppercase tracking-wider mb-1">
                        Completed Year
                      </span>
                      <span>{artifact.yearCompleted}</span>
                    </div>
                  </div>

                  {/* Elite Private Invitation CTA instead of transactional buttons */}
                  <div className="flex">
                    <button
                      id={`open-monograph-${artifact.id}`}
                      onClick={() => setSelectedArtifact(artifact)}
                      className={`group flex items-center gap-3 text-xs tracking-widest uppercase pb-2 border-b-2 border-[#931717] font-mono hover:opacity-100 opacity-90 transition-opacity`}
                    >
                      <span>Inquire Privately for Monograph</span>
                      <ArrowRight
                        size={12}
                        className="transform group-hover:translate-x-1.5 transition-transform duration-300 text-[#931717]"
                      />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Monograph Deep Dive Modal Overlay */}
      <AnimatePresence>
        {selectedArtifact && (
          <motion.div
            id="monograph-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-black/95 z-50 overflow-y-auto px-6 py-12 md:p-16 flex justify-center items-start text-[#b8aca2]"
          >
            <div className="max-w-4xl w-full flex flex-col relative bg-[#1e1a19] border border-current/10 mt-10 md:mt-20 p-8 md:p-14 shadow-2xl">
              {/* Close Button */}
              <button
                id="close-monograph-modal"
                onClick={() => setSelectedArtifact(null)}
                className="absolute top-6 right-6 text-current/60 hover:text-current hover:rotate-90 transition-all duration-300 cursor-pointer p-2 rounded-full bg-black/40 border border-current/10"
              >
                <X size={18} />
              </button>

              {/* Modal Curatorial Title Block */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-current/10 pb-6 mb-8 gap-4 font-mono text-xs">
                <div>
                  <span className="text-[#827168] block tracking-widest uppercase mb-1">
                    Atelier Véra Editorial Archive
                  </span>
                  <div className="flex items-center gap-2">
                    <Compass size={13} className="text-[#931717]" />
                    <span className="uppercase tracking-widest">{selectedArtifact.monographPage}</span>
                  </div>
                </div>
                <div className="flex gap-6">
                  <span>METRIC: {selectedArtifact.scaleMetric}</span>
                  <span>YEAR: {selectedArtifact.yearCompleted}</span>
                </div>
              </div>

              {/* Title & Archival Code */}
              <h4
                className={`text-4xl md:text-5xl font-light tracking-tight mb-4 ${
                  isPrestige ? "font-serif-prestige" : "font-serif-avant"
                }`}
                style={{ color: "#b8aca2" }}
              >
                {selectedArtifact.title}
              </h4>
              <p className="text-xs uppercase tracking-widest text-[#827168] font-mono mb-8">
                LOCATION: {selectedArtifact.location} // ARCHITECT: {selectedArtifact.architect}
              </p>

              {/* Monograph Prose & Provenance (Targeting Helena Rostova's expectation of reading independent design design monographs) */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-14 mb-10">
                <div className="md:col-span-3 space-y-6">
                  <h5 className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#827168] border-b pb-2 border-current/10">
                    Provenance Narrative
                  </h5>
                  <p className="text-sm font-sans-prestige font-light leading-relaxed text-current/90">
                    {selectedArtifact.provenanceStory}
                  </p>
                  <p className="text-sm font-sans-prestige font-light italic leading-relaxed text-current/75">
                    "This space was not conceived to serve standard daily expectations. It acts rather as an isolated capsule for intellectual observation, where the shadow play across raw textures is the primary choreographical experience." — Véra
                  </p>
                </div>

                <div className="md:col-span-2 space-y-6">
                  <h5 className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#827168] border-b pb-2 border-current/10">
                    Material Specification
                  </h5>
                  <ul className="space-y-4 text-xs font-mono">
                    {selectedArtifact.materials.map((m, i) => (
                      <li key={i} className="flex gap-2 items-start text-current/80">
                        <span className="text-[#931717] font-bold">▪</span>
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="bg-[#25201e] p-5 border border-[#931717] mt-4">
                    <span className="text-[9px] font-mono uppercase tracking-widest text-[#827168] block mb-2">
                      Inquire Privately
                    </span>
                    <p className="text-[11px] font-mono text-current/60 leading-relaxed uppercase">
                      By private invitation only. Subterranean private inspection slots may be requested.
                    </p>
                  </div>
                </div>
              </div>

              {/* Mini Gallery (Asymmetrical Images) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {selectedArtifact.detailImages.map((img, idx) => (
                  <div key={idx} className="relative aspect-video overflow-hidden border border-current/10 bg-black">
                    <img
                      src={img}
                      alt="Detail shot"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover filter grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute bottom-2 right-2 text-[8px] font-mono bg-black/60 px-2 py-0.5 text-[#827168]">
                      DETAIL SPEC_0{idx + 1}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
