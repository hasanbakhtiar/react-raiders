import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./assets/css/style.css";
import App from "./App";
import { ProductProvider } from "./context/ProductContext";
import { CartProvider } from "react-use-cart";
import { LangProvider } from "./context/LangContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div >
    <LangProvider>
      <CartProvider>
        <ProductProvider>
          <App />
        </ProductProvider>
      </CartProvider>
    </LangProvider>
    </div>
  </StrictMode>
);
