import React from "react";
import SVGThankYou from "../assets/icon-thank-you.svg";
import { PlanContext } from "../PlanContext";

export default function Finished() {
    const { personal } = React.useContext(PlanContext);

    return (
        <section className="finished">
            <div className="finished__icon">
                <SVGThankYou />
            </div>

            <h1 className="finished__title">
                Obrigado, {personal.name}!
            </h1>

            <p className="finished__desc">
                Obrigado por confirmar sua inscrição! Esperamos que você se divirta usando nossa plataforma!
            </p>
        </section>
    );
}
