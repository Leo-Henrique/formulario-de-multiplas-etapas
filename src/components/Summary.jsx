import React from "react";
import { UserContext } from "../UserContext";
import PricePerPeriod from "./Helpers/PricePerPeriod";

export default function Summary(props) {
    const { plan, period, addOns } = React.useContext(UserContext);
    const periodPlan = () => period == "month" ? "mensal" : "anual";
    const periodTotal = () => period == "month" ? "por mês" : "por ano";

    return (
        <>
            <div>
                <div>
                    <p>
                        {plan.title} {periodPlan()}
                    </p>

                    <button type="button">Alterar</button>
                </div>

                <span>
                    R$ 50/mês
                    {/* plan.price + Helper */}
                </span>
            </div>

            <ul>
                {addOns.map(({ title, price }) => (
                    <li key={title}>
                        <span>{title}</span>
                        <PricePerPeriod
                            period={period}
                            price={price}
                            before="+"
                        />
                    </li>
                ))}
            </ul>

            <div>
                <span>Total ({periodTotal()})</span>

                <span>R$ 50,00</span>
            </div>
        </>
    );
}
