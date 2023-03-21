import React from "react";
import "./scss/style.scss";
import { PersonalInfo } from "./components/PersonalInfo";
import { SelectPlan } from "./components/SelectPlan";
import { AddOns } from "./components/AddOns";
import Summary from "./components/Summary";
import Finished from "./components/Finished";
import { PlanContext, planInfos } from "./PlanContext";

export default function App({ card }) {
    const steps = [
        {
            title: "Suas informações",
            desc: "Por favor, forneça seu nome, endereço de e-mail e número de telefone.",
            class: "infos",
            component: <PersonalInfo />,
        },
        {
            title: "Selecione seu plano",
            desc: "Você tem a opção de cobrança mensal ou anual.",
            class: "plan",
            component: <SelectPlan />,
        },
        {
            title: "Complementos",
            desc: "Os complementos ajudam a aprimorar sua experiência de jogo.",
            class: "addons",
            component: <AddOns />,
        },
        {
            title: "Resumo",
            desc: "Verifique novamente se tudo está OK antes de confirmar.",
            class: "summary",
            component: <Summary />,
        },
    ];
    const [step, setStep] = React.useState(0);
    const previousStep = () => setStep(step - 1);

    React.useEffect(() => ["card", "container"].forEach(name => card.classList.add(name)), []);

    return (
        <>
            <ul className="card__steps">
                {steps.map(({ title }, index) => {
                    const id = index + 1;
                    const active = () => index === step ? " --active" : "";

                    return (
                        <li className="card__step" key={title}>
                            <span className={`card__step__number${active()}`}>
                                {id}
                            </span>

                            <div className="card__step__infos">
                                <small>Passo {id}</small>
                                <strong>{title}</strong>
                            </div>
                        </li>
                    );
                })}
            </ul>

            <PlanContext.Provider value={{
                ...planInfos(),
                step,
                setStep,
            }}>
                {step !== null ? (
                    <form className="card__form">
                        <h1 className="card__title">
                            {steps[step].title}
                        </h1>

                        <p className="card__desc">
                            {steps[step].desc}
                        </p>

                        <fieldset className={steps[step].class}>
                            {steps[step].component}
                        </fieldset>
                    </form>
                ) : <Finished />}
            </PlanContext.Provider>
        </>
    );
}
