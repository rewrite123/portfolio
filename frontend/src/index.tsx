import { createRoot } from "react-dom/client";
import App from "./App";
import "@fontsource-variable/space-grotesk";
import "@fontsource/dm-mono/400.css";
import "@fontsource/dm-mono/500.css";
import "./style/index.scss";

const target = document.getElementById("portfolio");

if (!target) {
  throw new Error('Missing required "#portfolio" mount element.');
}

createRoot(target).render(<App />);