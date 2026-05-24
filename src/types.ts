/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface TextureDetail {
  id: string;
  name: string;
  chemicalComposition: string;
  provenance: string;
  tactileFeedback: string;
  shadowFactor: string;
  image: string;
}

export interface ArchitecturalArtifact {
  id: string;
  title: string;
  location: string;
  materials: string[];
  philosophy: string;
  yearCompleted: string;
  architect: string;
  provenanceStory: string;
  scaleMetric: string; // instead of square feet, we say "Chamber Volume" or "Somatic Spacial Footprint" (e.g. "1,200 m³ Somatic Mass")
  monographPage: string; // "Page XIV" index style
  heroImage: string;
  detailImages: string[];
  textures: TextureDetail[];
}

export type CuratorialPerspective = "PRESTIGE" | "AVANT_GARDE"; // Prestige = Cormorant + DM Sans, AvantGarde = Italiana + Space Grotesk
