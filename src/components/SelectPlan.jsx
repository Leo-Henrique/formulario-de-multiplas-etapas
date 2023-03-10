import React from "react";
import SVGArcade from "../assets/icon-arcade.svg";
import SVGAdvanced from "../assets/icon-advanced.svg";
import SVGPro from "../assets/icon-pro.svg";
import PricePerPeriod from "./Helpers/PricePerPeriod";
import { PlanContext } from "../PlanContext";

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
    const { period } = React.useContext(PlanContext);

    return (
        <>
            <ul className="plan__list">
                {plans.map(({ id, icon, name, price }, index) => (
                    <li className="plan__item" key={id}>
                        <input
                            className="plan__input"
                            type="checkbox"
                            id={id}
                            name={id}
                            checked={index == 0 && true}
                        />

                        <label className="plan__label" htmlFor={id}>
                            <span className="plan__icon">{icon}</span>
                            <span className="plan__name">{name}</span>

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
                ))}
            </ul>

            <div className="plan__toggle">
                <span className="--active">Mensal</span>

                <label className="plan__toggle__btn"
                htmlFor="period">
                    <input type="checkbox" id="period" name="period" />

                    <span></span>
                </label>

                <span>Anual</span>
            </div>
        </>
    );
}
