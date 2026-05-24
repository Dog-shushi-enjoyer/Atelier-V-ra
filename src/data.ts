/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArchitecturalArtifact } from "./types";

export const ATELIER_MANIFESTO = {
  quote: "Architecture is the only art form we live inside.",
  subtitle: "We do not broker square footage; we curate architectural legacies.",
  paragraphs: [
    "A home is an uncompromised extension of self—a living gallery where rare craftsmanship meets human experience. We stand in absolute opposition to the transactional velocity of modern real estate. We reject the generic subdivisions, the hurried listings, and the gaudy luxury clichés that speak loudly yet say nothing.",
    "For Julian Vance, who seeks the silent integrity of unrefined concrete and invisible, seamless systems. For Dr. Helena Rostova, who demands the weight of unhurried history and the unquestionable provenance of hand-hewn stone. We offer no compromise.",
    "Every artifact in our collection is an intentional monologue of scale, material purity, and shadow, built not to accommodate, but to endure as an intellectual milestone."
  ]
};

export const PORTFOLIO_ARTIFACTS: ArchitecturalArtifact[] = [
  {
    id: "obsidian-plinth",
    title: "THE OBSIDIAN PLINTH",
    location: "HIGASHIYAMA OUTSKIRTS, KYOTO",
    materials: [
      "Carbonized Shou Sugi Ban Cedar",
      "Porous Basalt Slabs",
      "Brushed Oxblood Iron Panels",
      "Obsidian Water Planes"
    ],
    philosophy: "A study in absolute shadow, drawing light only where the ritual of presence demands it.",
    yearCompleted: "2024",
    architect: "Véra & Kengo Associates",
    provenanceStory: "The wood was carbonized by hand over eleven weeks using traditional Yakisugi techniques in Okayama, sealing the organic lignin to create a carbon layer that refracts twilight with a deep violet-black velvet hue. Structural weight is supported by massive subterranean basalt boulders, left in their raw geological state to connect the structure to Japan's ancient tectonic bedrock.",
    scaleMetric: "1,940 m³ Somatic Mass",
    monographPage: "PAGE XLII",
    heroImage: "https://images.unsplash.com/photo-1508333706533-1ab43ecb1606?auto=format&fit=crop&q=80&w=1200",
    detailImages: [
      "https://images.unsplash.com/photo-1504297050568-910d24c426d3?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800"
    ],
    textures: [
      {
        id: "yakisugi-cedar",
        name: "YAKISUGI CARBONIZED CEDAR",
        chemicalComposition: "Organic cellulose carbonized at 800°C, stabilized with natural tung oil",
        provenance: "Sustainably harvested Yoshino forest, charred manually in Okayama",
        tactileFeedback: "Slightly powdery, intensely rich, absorbing 99% of direct ocular glare",
        shadowFactor: "99.2% Deep Velvet Light Absorption",
        image: "https://images.unsplash.com/photo-1507499739999-097706ad8914?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: "oxblood-iron",
        name: "OXBLOOD OXIDIZED STEEL",
        chemicalComposition: "Acid-etched structural steel, layered with ferric oxide suspension",
        provenance: "Engineered in the metallurgy labs of Fukuoka, cold-cured over three months",
        tactileFeedback: "Chilled mineral resistance, dynamic micro-abrasion grain",
        shadowFactor: "Moderate, rich warm-crimson scattering in horizontal sunset rays",
        image: "https://images.unsplash.com/photo-1504297050568-910d24c426d3?auto=format&fit=crop&q=80&w=800"
      }
    ]
  },
  {
    id: "travertine-monolith",
    title: "THE TRAVERTINE MONOLITH",
    location: "AMANGIRI ESCARPMENT, UTAH CORRIDOR",
    materials: [
      "Vein-Cut Raw Travertine",
      "Poured-in-place Board-Marked Concrete",
      "Burnished Bronze Pivot Slabs",
      "Dry Desert Silica Floor Compound"
    ],
    philosophy: "A geological extension of the red-clay wilderness, carved to let the desert wind write its own history on stone.",
    yearCompleted: "2023",
    architect: "Atelier Véra Studio",
    provenanceStory: "Crafted as an architectural canyon wedged organically between two sandstone escarpments. The facade features colossal slabs of vein-cut travertine imported from Tivoli, selected for their deep horizontal cavities. These crevices gather dry red dust over time, coloring the walls naturally to match the Utah canyon floor. Power and climate control are entirely subterranean, utilizing silent, emission-free geothermal loops.",
    scaleMetric: "2,450 m³ Void Volume",
    monographPage: "PAGE LVIII",
    heroImage: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1200",
    detailImages: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&q=80&w=800"
    ],
    textures: [
      {
        id: "vein-cut-travertine",
        name: "VEIN-CUT TIVOLI TRAVERTINE",
        chemicalComposition: "Calcium carbonate deposit, unrefined, filled with active geothermal gas pores",
        provenance: "Acquired from the historically protected deposits of Tivoli, Italy",
        tactileFeedback: "Warm, coarse, with deep micro-caverns that hold desert heat long past sunset",
        shadowFactor: "High-relief texture shadows, constant shifting under physical motion",
        image: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: "poured-concrete",
        name: "CAST BOARD-MARKED RAW CONCRETE",
        chemicalComposition: "Portland mineral aggregate, hand-beaten into Oregon pine shutter hulls",
        provenance: "Cast entirely on-site using local canyon sand for chromatic unification",
        tactileFeedback: "Cool, solid, featuring the wood-grain imprint of natural centuries-old pine",
        shadowFactor: "Diffused matte-gray light dispersion with sharp horizontal ridge casting",
        image: "https://images.unsplash.com/photo-1531971589569-0d9370cbe1e5?auto=format&fit=crop&q=80&w=800"
      }
    ]
  },
  {
    id: "concrete-monograph",
    title: "THE CONCRETE MONOGRAPH",
    location: "MUSEUM DISTRICT, BERLIN-MITTE",
    materials: [
      "Unrefined Structural Concrete",
      "Tempered Smoked Églomisé Glass",
      "Acid-Etched Solid Brass Pivots",
      "Stained Smoked Oak Plank Flooring"
    ],
    philosophy: "A towering dialog with the solemn historic canvas of Berlin, prioritizing raw material permanence and light wells.",
    yearCompleted: "2025",
    architect: "Atelier Véra",
    provenanceStory: "Located adjacent to Berlin's historic core, this raw concrete monograph utilizes double-height monolithic columns that frame open sky wells. The unrefined concrete has been treated with acid washes to deliberately expose the aggregate matrix, evoking a physical sense of weight and permanence. Floating bronze-encased pivot doors weighing 1.2 tons slide with absolute, silent fluid motion at the brush of a finger.",
    scaleMetric: "3,110 m³ Structural Frame",
    monographPage: "PAGE XCIV",
    heroImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1200",
    detailImages: [
      "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=800"
    ],
    textures: [
      {
        id: "industrial-aggregate",
        name: "ACID-WASHED INDUSTRIAL AGGREGATE",
        chemicalComposition: "Coarse granite gravel, river rock matrix, high-alumina cement structure",
        provenance: "Formulated and cured on the banks of the Spree",
        tactileFeedback: "Abrasive, deeply geological, cold to the human touch",
        shadowFactor: "Extreme scattering, mimicking weathered urban facades",
        image: "https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: "brushed-brass",
        name: "BRUSHED RAW BRASS JOINERY",
        chemicalComposition: "Copper-zinc alloy, entirely untreated with artificial lacquer to ensure aging",
        provenance: "Milled in traditional metallurgic foundries of Saxony",
        tactileFeedback: "Sleek, microscopic hand-polished brush ridges, gaining a distinct custom patina with age",
        shadowFactor: "High metallic glow, catching low angle candle or ceiling lighting",
        image: "https://images.unsplash.com/photo-1507499739999-097706ad8914?auto=format&fit=crop&q=80&w=800"
      }
    ]
  }
];
