import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { EmptyLibrary } from "./screens/EmptyLibrary";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <EmptyLibrary />
  </StrictMode>,
);
