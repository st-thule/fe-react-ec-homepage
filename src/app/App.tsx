import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "../stylesheet/styles.scss";

import { Page } from "./pages/Page";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Page />
  </StrictMode>
);
