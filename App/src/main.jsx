import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./Component/nav.css";
import HeroSec from "./Component/Hero-sec.jsx";

import Nav from "./Component/nav.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <HeroSec />
  </>
);
