/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CuratorialPerspective } from "../types";
import { Mail, CheckCircle, Shield, FileSignature, Sparkles } from "lucide-react";

interface TheVeilProps {
  perspective: CuratorialPerspective;
}

export default function TheVeil({ perspective }: TheVeilProps) {
  const isPrestige = perspective === "PRESTIGE";
  
  // Custom Inquiry form states
  const [philosophy, setPhilosophy] = useState<string>("Somatic Shadow");
  const [material, setMaterial] = useState<string>("Yoshino Yakisugi");
  const [intention, setIntention] = useState<string>("sanctuary");
  const [identityText, setIdentityText] = useState<string>("");
  const [inquiryEmail, setInquiryEmail] = useState<string>("");
  
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [hasSubmitted, setHasSubmitted] = useState<boolean>(false);
  const [invitationCode, setInvitationCode] = useState<string>("");

  const handleInquiryAction = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryEmail) return;

    setIsSubmitting(true);
    
    // Simulate high-tier gatekeeping validation (1.5 seconds)
    setTimeout(() => {
      // Generate a dynamic bespoke hash key matching Julian's love for metadata and Helena's serial monograph references
      const uniqueHash = `AV-${Math.floor(1000 + Math.random() * 9000)}-${philosophy.slice(0, 3).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;
      setInvitationCode(uniqueHash);
      setIsSubmitting(false);
      setHasSubmitted(true);
    }, 1600);
  };

  return (
    <section
      id="veil-section"
      className="relative min-h-screen py-24 px-6 md:px-16 flex flex-col justify-between"
      style={{
        backgroundColor: "#1b1716", // Hard, pure ebonized shadow core
        color: "#b8aca2", // Constant Raw Travertine text for maximum editorial fidelity
      }}
    >
      {/* Background radial soft red glow representing Oxblood Oxide and Crimson Residue */}
      <div className="absolute inset-0 z-0 opacity-15 overflow-hidden pointer-events-none">
        <div
          className="absolute -bottom-48 -right-48 w-[600px] h-[600px] rounded-full blur-[150px]"
          style={{ backgroundColor: "#931717" }}
        />
        <div
          className="absolute top-1/3 left-1/12 w-[400px] h-[400px] rounded-full blur-[120px]"
          style={{ backgroundColor: "#661c1a" }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto w-full my-auto">
        {/* Stage Header */}
        <div className="flex items-center gap-2 mb-10">
          <span className="text-[10px] font-mono tracking-widest text-[#827168] uppercase">
            The Veil // Stage 05
          </span>
          <span className="h-[1px] w-12 bg-[#827168] opacity-30"></span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Column 1: Gatekeeping Editorial Prose (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <h3
              className={`text-3xl md:text-4xl font-light tracking-tight leading-tight ${
                isPrestige ? "font-serif-prestige" : "font-serif-avant"
              }`}
              style={{ color: "#b8aca2" }}
            >
              INQUIRE PRIVATELY
            </h3>
            
            <p className="text-xs font-mono text-[#827168] leading-relaxed uppercase tracking-wider">
              We stand in resolute rejection of public markets. No generic registries, MLS syndicates, or transactional brokerages.
            </p>

            <p className="text-xs font-light font-sans-prestige leading-relaxed text-current/80">
              Access to the full Véra monographs, structural blueprint projections, and private physical visits are organized strictly on a personal, hand-referred basis. 
            </p>

            <div className="pt-6 border-t border-[#827168]/20 space-y-4">
              <div className="flex items-center gap-3">
                <Shield size={14} className="text-[#931717]" />
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#827168]">
                  Strict Privacy Assured
                </span>
              </div>
              <p className="text-[10px] font-mono text-[#827168] uppercase leading-relaxed">
                Your credentials are never stored on public cloud servers. Decrypted locally and preserved offline inside monolithic basalt hardware ledgers.
              </p>
            </div>
          </div>

          {/* Column 2: The Bespoke Gatekeeper Form Content (7 cols) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {!hasSubmitted ? (
                <motion.form
                  key="inquiry-form"
                  onSubmit={handleInquiryAction}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6 bg-black/40 p-8 rounded border border-current/10"
                >
                  <h4 className="text-[10px] font-mono uppercase tracking-widest text-[#827168] border-b pb-3 border-[#827168]/20 mb-6 flex items-center justify-between">
                    <span>Curatorial Registration</span>
                    <FileSignature size={12} className="text-[#931717]" />
                  </h4>

                  {/* Question 1: Philosophy Selection */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono uppercase tracking-widest text-[#827168] block">
                      01 // Somatic Philosophy Goal
                    </label>
                    <select
                      id="philosophy-select"
                      value={philosophy}
                      onChange={(e) => setPhilosophy(e.target.value)}
                      className="w-full bg-black/65 border border-current/10 px-4 py-2.5 text-xs text-current font-mono focus:border-[#931717] outline-none transition-colors"
                    >
                      <option value="Absolute Shadow">Absolute Shadow Play (Kyoto Ethos)</option>
                      <option value="Geological Integration">Geological Integration (Utah Land-Art)</option>
                      <option value="Towering Monologue">Towering Structural Monologue (Berlin Frame)</option>
                    </select>
                  </div>

                  {/* Question 2: Raw Material Priority */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono uppercase tracking-widest text-[#827168] block">
                      02 // Material Integrity Focus
                    </label>
                    <div className="grid grid-cols-3 gap-2 font-mono text-[9px] uppercase">
                      {[
                        { label: "Yoshino Yakisugi", val: "Yoshino Yakisugi" },
                        { label: "Tivoli Travertine", val: "Tivoli Travertine" },
                        { label: "Exposed Aggregates", val: "Exposed Aggregates" }
                      ].map((item) => (
                        <button
                          key={item.val}
                          id={`select-form-material-${item.val.replace(" ", "-")}`}
                          type="button"
                          onClick={() => setMaterial(item.val)}
                          className={`py-2 px-1 border text-center transition-all duration-300 ${
                            material === item.val
                              ? "bg-[#931717]/20 border-[#931717] text-white"
                              : "border-current/10 hover:border-current/30 text-[#827168]"
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Question 3: Curatorial Intention */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono uppercase tracking-widest text-[#827168] block">
                      03 // Spatial Intention Statement
                    </label>
                    <div className="space-y-2 text-xs">
                      {[
                        { label: "I seek a silent, isolated sanctuary for intellectual solitude.", id: "sanctuary" },
                        { label: "I wish to acquire and preserve an uncompromised architectural landmark.", id: "preserve" },
                        { label: "I expect space to act as a pure, brutalist extension of self.", id: "extension" }
                      ].map((opt) => (
                        <label
                          key={opt.id}
                          className={`flex items-start gap-3 p-3 border transition-colors cursor-pointer ${
                            intention === opt.id
                              ? "bg-black/30 border-[#931717]/40 text-[#b8aca2]"
                              : "border-transparent text-[#827168] hover:text-[#b8aca2]"
                          }`}
                        >
                          <input
                            type="radio"
                            name="intention"
                            id={`radio-intention-${opt.id}`}
                            checked={intention === opt.id}
                            onChange={() => setIntention(opt.id)}
                            className="mt-0.5 accent-[#931717]"
                          />
                          <span>{opt.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Question 4: Identity & Credentials (Helena/Julian context) */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono uppercase tracking-widest text-[#827168] block">
                      04 // Professional Context or Corporate Vault
                    </label>
                    <input
                      type="text"
                      id="identity-input"
                      required
                      placeholder="e.g. Vance Laboratories Ltd / The Rostova Foundation"
                      value={identityText}
                      onChange={(e) => setIdentityText(e.target.value)}
                      className="w-full bg-black/65 border border-current/10 px-4 py-2.5 text-xs font-mono text-current focus:border-[#931717] outline-none transition-colors rounded"
                    />
                  </div>

                  {/* Question 5: Private Communication Endpoint */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono uppercase tracking-widest text-[#827168] block">
                      05 // Encrypted Digital Endpoint
                    </label>
                    <input
                      type="email"
                      id="email-input"
                      required
                      placeholder="secure_handshake@lux.net"
                      value={inquiryEmail}
                      onChange={(e) => setInquiryEmail(e.target.value)}
                      className="w-full bg-black/65 border border-current/10 px-4 py-2.5 text-xs font-mono text-current focus:border-[#931717] outline-none transition-colors rounded"
                    />
                  </div>

                  <button
                    id="submit-private-inquiry"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 tracking-[0.25em] bg-[#931717] hover:bg-[#661c1a] hover:scale-[1.01] transition-all duration-300 text-white font-mono text-xs uppercase cursor-pointer rounded mt-6 disabled:opacity-50"
                  >
                    {isSubmitting ? "DECIPHERING ENCRYPTION KEYS..." : "INITIALIZE SECURE INQUIRY HANDSHAKE"}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="receipt"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="bg-[#25201e] p-8 border border-[#931717] text-current rounded space-y-6"
                >
                  <div className="flex items-center gap-3 text-emerald-500">
                    <CheckCircle size={22} />
                    <span className="text-xs font-mono uppercase tracking-widest">
                      Curatorial Handshake Standard Established
                    </span>
                  </div>

                  <h4 className="text-2xl font-light font-serif-prestige">
                    Ledger Entry Logged Successfully
                  </h4>

                  <p className="text-xs font-sans-prestige font-light leading-relaxed opacity-90">
                    Thank you, representative of <strong className="text-white uppercase font-mono">{identityText}</strong>. Your physical coordinates and somatic preferences have been registered into the Véra network.
                  </p>

                  <div className="p-6 bg-black/55 border border-current/10 font-mono text-xs space-y-3">
                    <div className="flex justify-between">
                      <span className="text-[#827168]">MANIFEST ARCHIVE ID:</span>
                      <span className="text-white">{invitationCode}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#827168]">DECRYPTION CIPHER:</span>
                      <span className="text-white">AES-256 GCM SECURE</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#827168]">PROTOCOL STATUS:</span>
                      <span className="text-[#931717] font-bold animate-pulse">PENDING MANUAL AUDIT</span>
                    </div>
                  </div>

                  <p className="text-[10px] font-mono text-[#827168] leading-relaxed uppercase">
                    Our curators will review your somatic alignment. Within 48 hours, a physical, black wax-sealed monograph invitation will be delivered to you via registered private vault courier. No digital reminders will follow.
                  </p>

                  <div className="flex pt-4">
                    <button
                      id="reset-form-button"
                      onClick={() => {
                        setHasSubmitted(false);
                        setIdentityText("");
                        setInquiryEmail("");
                      }}
                      className="text-[9px] font-mono uppercase text-[#827168] hover:text-[#b8aca2] underline tracking-widest cursor-pointer"
                    >
                      Initialize New Handshake Ledger
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>

      {/* Extreme Minimalist Clean Footer */}
      <div className="relative z-10 max-w-7xl mx-auto w-full border-t border-current/10 pt-8 mt-16 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] font-mono text-[#827168] select-none">
        <div>
          © 2026 ATELIER VÉRA ARCHIVES. ALL INTELLECTUAL CONSTRUCTS PRESERVED UNDER SWISS LAWS.
        </div>
        <div className="flex gap-6 uppercase tracking-wider">
          <span>By Private Invitation</span>
          <span>•</span>
          <span>Inquire Privately</span>
        </div>
      </div>
    </section>
  );
}
