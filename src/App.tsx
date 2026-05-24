/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { CuratorialPerspective } from "./types";
import OpeningFrame from "./components/OpeningFrame";
import Manifesto from "./components/Manifesto";
import TheCuration from "./components/TheCuration";
import TheCraftsmanship from "./components/TheCraftsmanship";
import TheVeil from "./components/TheVeil";

export default function App() {
  const [perspective, setPerspective] = useState<CuratorialPerspective>("PRESTIGE");

  // Smooth scroll helper
  const handleScrollToManifesto = () => {
    const section = document.getElementById("manifesto-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main
      className="min-h-screen w-full relative selection:bg-[#931717] selection:text-white"
      style={{
        backgroundColor: perspective === "PRESTIGE" ? "#b8aca2" : "#25201e",
        transition: "background-color 1s ease"
      }}
    >
      {/* Stage 1: The Opening Frame (Magazine cover aesthetic) */}
      <OpeningFrame
        perspective={perspective}
        setPerspective={setPerspective}
        onScrollToManifesto={handleScrollToManifesto}
      />

      {/* Stage 2: The Manifesto (Decelerated typography) */}
      <Manifesto perspective={perspective} />

      {/* Stage 3: The Curation (Asymmetrical art grid) */}
      <TheCuration perspective={perspective} />

      {/* Stage 4: The Craftsmanship (Tactile Specimen Study) */}
      <TheCraftsmanship perspective={perspective} />

      {/* Stage 5: The Veil (Stark Dark private gatekeeping inquiry) */}
      <TheVeil perspective={perspective} />
    </main>
  );
}
