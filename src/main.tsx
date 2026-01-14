import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppRoutes from "./AppRoutes";
import { PokemonProvider } from "./context/PokemonProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PokemonProvider>
      <AppRoutes />
    </PokemonProvider>
  </StrictMode>
);
