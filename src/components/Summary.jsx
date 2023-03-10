import React from "react";
import PricePerPeriod from "./Helpers/PricePerPeriod";
import { PlanContext } from "../PlanContext";

export default function Summary(props) {
    const { plan, addOns, period } = React.useContext(PlanContext);
    const periodPlan = () => period == "month" ? "Mensal" : "Anual";
    const periodTotal = () => period == "month" ? "por mês" : "por ano";

    return (
        <>
            <div className="summary__infos">
                <div className="summary__plan">
                    <div className="summary__plan__title">
                        <p>
                            {plan.title} ({periodPlan()})
                        </p>

                        <button type="button">Alterar</button>
                    </div>

                    <span className="summary__plan__price">
                        R$ 50/mês
                        {/* plan.price + Helper */}
                    </span>
                </div>

                <ul className="summary__addons">
                    {addOns.map(({ title, price }) => (
                        <li className="summary__addons__item" key={title}>
                            <span className="summary__addons__title">
                                {title}
                            </span>
                            <PricePerPeriod
                                period={period}
                                price={price}
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
                    +R$ 50,00/mês
                </span>
            </div>
        </>
    );
}
