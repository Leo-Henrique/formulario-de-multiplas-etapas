import React from "react";
import SVGThankYou from "../assets/icon-thank-you.svg";

export default function Finished() {
    return (
        <section className="finished">
            <div className="finished__icon">
                <SVGThankYou />
            </div>

            <h1 className="finished__title">
                Obrigado!
            </h1>

            <p className="finished__desc">
                Obrigado por confirmar sua inscrição! Esperamos que você se divirta usando nossa plataforma!
            </p>
        </section>
    );
}
