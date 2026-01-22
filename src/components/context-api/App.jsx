import { createRoot } from "react-dom/client";

import App from "./App";
import ThemeProvider from "./ThemeProvider";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
