import React from "react";
import useAnimateComponent from "../hooks/useAnimateComponent";
import { PlanContext } from "../PlanContext";

export function Buttons({ nextStep, nextText = "Próximo" }) {
    const { step, setStep, parent } = React.useContext(PlanContext);
    const previousStep = () => setStep(step - 1);
    const previous = useAnimateComponent("fadeLeft", parent, previousStep);
    const next = useAnimateComponent("fadeRight", parent, nextStep);

    return (
        <div className="buttons">
            {step !== 0 ? (
                <button
                    className="buttons__prev"
                    type="button"
                    onClick={previous}
                >
                    Voltar
                </button>
            ) : null}

            <button
                className={`buttons__next${
                    nextText === "Confirmar" ? " --confirm" : ""
                }`}
                type="button"
                onClick={step === 0 ? nextStep : next}
            >
                {nextText}
            </button>
        </div>
    );
}
