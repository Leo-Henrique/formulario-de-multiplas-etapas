import React from "react";
import SVGArcade from "../assets/icon-arcade.svg";
import SVGAdvanced from "../assets/icon-advanced.svg";
import SVGPro from "../assets/icon-pro.svg";
import { UserContext } from "../UserContext";
import PricePerPeriod from "./Helpers/PricePerPeriod";

export default function SelectPlan() {
    const plans = [
        {
            id: "arcade",
            icon: <SVGArcade />,
            name: "Arcade",
            price: {
                month: 50,
                year: 500,
            },
        },
        {
            id: "advanced",
            icon: <SVGAdvanced />,
            name: "Avançado",
            price: {
                month: 60,
                year: 600,
            },
        },
        {
            id: "pro",
            icon: <SVGPro />,
            name: "Pro",
            price: {
                month: 80,
                year: 800,
            },
        },
    ];
    const { period } = React.useContext(UserContext);

    return (
        <>
            <ul>
                {plans.map(({ id, icon, name, price }) => (
                    <li key={id}>
                        <label htmlFor={id}>
                            <input type="checkbox" id={id} name={id} />

                            <span>{icon}</span>
                            <span>{name}</span>

                            <PricePerPeriod
                                period={period}
                                price={price}
                            />

                            {period == "year" && (
                                <span>2 meses grátis</span>
                            )}
                        </label>
                    </li>
                ))}
            </ul>

            <div>
                <span>Mensal</span>
                <label htmlFor="period">
                    <input type="checkbox" id="period" name="period" />

                    <span></span>
                </label>
                <span>Anual</span>
            </div>
        </>
    );
}
