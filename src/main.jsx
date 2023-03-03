import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Store } from "./store";

gsap.registerPlugin(ScrollTrigger);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Store>
            <App />
        </Store>
    </React.StrictMode>
);
