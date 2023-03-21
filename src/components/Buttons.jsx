import React from "react";

export function Buttons({ step, setStep, nextStep, nextText = "Próximo" }) {
    const previousStep = () => setStep(step - 1);

    return (
        <div className="buttons">
            {step !== 0 ? (
                <button className="buttons__prev"
                type="button"
                onClick={previousStep}>
                    Voltar
                </button>
            ) : null}

            <button className={`buttons__next${nextText === "Confirmar" ? " --confirm" : ""}`}
            type="button"
            onClick={nextStep}>
                {nextText}
            </button>
        </div>
    );
}
