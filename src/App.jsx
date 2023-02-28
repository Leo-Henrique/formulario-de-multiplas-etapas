import React from "react";
import "./scss/style.scss";
import PersonalInfo from "./components/PersonalInfo";
import SelectPlan from "./components/SelectPlan";
import AddOns from "./components/AddOns";

export default function App({ container }) {
    const steps = [
        {
            title: "Suas informações",
            desc: "Por favor, forneça seu nome, endereço de e-mail e número de telefone.",
            component: <PersonalInfo />,
        },
        {
            title: "Selecione seu plano",
            desc: "Você tem a opção de cobrança mensal ou anual.",
            component: <SelectPlan />
        },
        {
            title: "Complementos",
            desc: "Os complementos ajudam a aprimorar sua experiência de jogo.",
            component: <AddOns />,
        },
        {
            title: "Resumo",
            desc: "Verifique novamente se tudo está OK antes de confirmar.",
        },
    ];
    const [step, setStep] = React.useState(1);

    return (
        <div className="container">
            <ul>
                {steps.map(({ title }, index) => {
                    const id = ++index;

                    return (
                        <li key={title}>
                            <span>{id}</span>

                            <div>
                                <small>Passo {id}</small>
                                <strong>{title}</strong>
                            </div>
                        </li>
                    );
                })}
            </ul>

            <form>
                <h1>{steps[step].title}</h1>

                <p>{steps[step].desc}</p>

                <fieldset>{steps[step].component}</fieldset>
            </form>
        </div>
    );
}
