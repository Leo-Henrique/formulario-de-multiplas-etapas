import React from "react";
import SVGArcade from "../assets/icon-arcade.svg";
import SVGAdvanced from "../assets/icon-advanced.svg";
import SVGPro from "../assets/icon-pro.svg";
import PricePerPeriod from "./Helpers/PricePerPeriod";
import { PlanContext } from "../PlanContext";
import { Buttons } from "./Buttons";
import useForm from "../hooks/useForm";

export const plans = [
    {
        id: "arcade",
        icon: <SVGArcade />,
        title: "Arcade",
        price: {
            month: 50,
            year: 500,
        },
    },
    {
        id: "advanced",
        icon: <SVGAdvanced />,
        title: "Avançado",
        price: {
            month: 60,
            year: 600,
        },
    },
    {
        id: "pro",
        icon: <SVGPro />,
        title: "Pro",
        price: {
            month: 80,
            year: 800,
        },
    },
];

export function SelectPlan() {
    const { plan, setPlan, step, setStep, period, setPeriod } = React.useContext(PlanContext);
    const change = ({ target }) => {
        if (target.checked) {
            const planSelected = plans.filter(plan => plan.id === target.id)[0];

            setPlan({ 
                planId: planSelected.id,
                planTitle: planSelected.title,
                planPrice: planSelected.price
            });
        }
    };
    const togglePeriod = ({ target: { checked } }) => {
        checked ? setPeriod("year") : setPeriod("month");
    };
    const nextStep = () => setStep(step + 1);

    return (
        <>
            <div>
                <ul className="plan__list">
                    {plans.map(
                        ({ id, icon, title, price }) => (
                            <li className="plan__item" key={id}>
                                <input className={`plan__input${plan.planId === id ? " --checked" : ""}`}
                                    type="radio"
                                    name="plan"
                                    id={id}
                                    value={id}
                                    onChange={change}
                                />

                                <label
                                    className="plan__label"
                                    htmlFor={id}
                                >
                                    <span className="plan__icon">
                                        {icon}
                                    </span>
                                    <span className="plan__name">
                                        {title}
                                    </span>

                                    <PricePerPeriod
                                        classes="plan__price"
                                        period={period}
                                        price={price}
                                    />

                                    {period == "year" && (
                                        <span className="plan__month">
                                            2 meses grátis
                                        </span>
                                    )}
                                </label>
                            </li>
                        )
                    )}
                </ul>

                <div className="plan__toggle">
                    <span className={period === "month" ? "--active" : ""}>
                        Mensal
                    </span>

                    <label className="plan__toggle__btn" htmlFor="period">
                        <input className={period === "year" ? "--checked" : ""}
                            type="checkbox"
                            id="period"
                            name="period"
                            value={period}
                            onChange={togglePeriod}
                        />

                        <span></span>
                    </label>

                    <span className={period === "year" ? "--active" : ""}>
                        Anual
                    </span>
                </div>
            </div>

            <Buttons step={step} setStep={setStep} nextStep={nextStep} />
        </>
    );
}
