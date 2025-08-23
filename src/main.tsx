import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { PdfInterface } from "@/pdf-interface.tsx";
import { Resume } from "@/resume.tsx";

const root = document.getElementById("root");
if (!root) throw new Error("Could not find root element");

createRoot(root).render(
  <StrictMode>
    <PdfInterface document={Resume} />
  </StrictMode>,
);
