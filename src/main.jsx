import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CartProvider } from "./contexts/cartContext.jsx";
import { AppProvider } from "./contexts/appContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </AppProvider>
  </StrictMode>
);
