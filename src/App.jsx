import React from "react";
import "./scss/style.scss";
import { PersonalInfo } from "./components/PersonalInfo";
import { SelectPlan } from "./components/SelectPlan";
import { AddOns } from "./components/AddOns";
import Summary from "./components/Summary";
import Finished from "./components/Finished";
import { PlanContext, planInfos } from "./PlanContext";
import LeoAnimate from "leo-animate.js";

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
    const parent = React.useRef();

    React.useEffect(() => {
        ["card", "container"].forEach(name => card.classList.add(name));
        new LeoAnimate();
    }, []);

    return (
        <>
            <ul className="card__steps" data-animate="fadeDown">
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
                parent
            }}>
                {step !== null ? (
                    <form className="card__form" ref={parent}>
                        <h1 className="card__title" data-animate="fadeDown" data-animate-id="title">
                            {steps[step].title}
                        </h1>

                        <p className="card__desc" data-animate="fadeDown" data-animate-sync="title">
                            {steps[step].desc}
                        </p>

                        <fieldset className={steps[step].class} data-animate={step === 0 ? "fadeDown" : null}>
                            {steps[step].component}
                        </fieldset>
                    </form>
                ) : <Finished />}
            </PlanContext.Provider>
        </>
    );
}
