import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const card = document.getElementById("card");
const root = createRoot(card);

root.render(
    <React.StrictMode>
        <App card={card} />
    </React.StrictMode>
);
