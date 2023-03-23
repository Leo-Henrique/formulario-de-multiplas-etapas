import React from "react";
import PricePerPeriod from "./Helpers/PricePerPeriod";
import { PlanContext } from "../PlanContext";
import { Buttons } from "./Buttons";
import useAnimateComponent from "../hooks/useAnimateComponent";

export default function Summary(props) {
    const { plan, addOns, period, step, setStep, parent } = React.useContext(PlanContext);
    const periodPlan = () => period == "month" ? "Mensal" : "Anual";
    const periodTotal = () => period == "month" ? "por mês" : "por ano";
    const total = () => {
        const planPrice = plan.planPrice[period];
        const addOnsPrice = addOns.map(addOn => addOn.addOnPrice[period]);

        return addOnsPrice.reduce((acc, item) => acc + item, planPrice);
    };
    const changePlan = useAnimateComponent(parent, () => setStep(1));
    const nextStep = () => setStep(null);

    return (
        <>
            <div>
                <div className="summary__infos">
                    <div className="summary__plan">
                        <div className="summary__plan__title">
                            <p>
                                {plan.planTitle} ({periodPlan()})
                            </p>

                            <button onClick={changePlan}
                            type="button">Alterar</button>
                        </div>

                        <span className="summary__plan__price">
                            <PricePerPeriod
                                period={period}
                                price={plan.planPrice}
                            />
                        </span>
                    </div>

                    <ul className="summary__addons">
                        {addOns.map(({ addOnTitle, addOnPrice }) => (
                            <li
                                className="summary__addons__item"
                                key={addOnTitle}
                            >
                                <span className="summary__addons__title">
                                    {addOnTitle}
                                </span>
                                <PricePerPeriod
                                    period={period}
                                    price={addOnPrice}
                                    before="+"
                                    classes="summary__addons__price"
                                />
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="summary__total">
                    <span className="summary__total__text">
                        Total ({periodTotal()})
                    </span>

                    <span className="summary__total__price">
                        R$ {total()}/{period === "month" ? "mês" : "ano"}
                    </span>
                </div>
            </div>

            <Buttons nextStep={nextStep} nextText="Confirmar" />
        </>
    );
}
