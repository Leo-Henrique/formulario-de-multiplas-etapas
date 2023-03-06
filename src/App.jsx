import React from "react";
import "./scss/style.scss";
import PersonalInfo from "./components/PersonalInfo";
import SelectPlan from "./components/SelectPlan";
import AddOns from "./components/AddOns";
import { UserPlan } from "./UserContext";
import Summary from "./components/Summary";

export default function App({ card }) {
    const classes = ["card", "container"];
    React.useEffect(() => classes.forEach(name => card.classList.add(name)), []);

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
    const [step, setStep] = React.useState(2);


    return (
        <>
            <ul className="card__steps">
                {steps.map(({ title }, index) => {
                    const id = ++index;

                    return (
                        <li className="card__step" key={title}>
                            <span className="card__step__number">
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

            <form className="card__form">
                <div className="card__content">
                    <h1 className="card__title">
                        {steps[step].title}
                    </h1>

                    <p className="card__desc">
                        {steps[step].desc}
                    </p>

                    <UserPlan>
                        <fieldset className={steps[step].class}>
                            {steps[step].component}
                        </fieldset>
                    </UserPlan>
                </div>

                <div className="card__btns">
                    {step !== 0 ? (
                        <button className="card__prev">
                            Voltar
                        </button>
                    ) : null}

                    <button className="card__next"
                    type="button">
                        Próximo
                    </button>
                </div>
            </form>
        </>
    );
}
