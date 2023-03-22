import React from "react";
import PricePerPeriod from "./Helpers/PricePerPeriod";
import SVGCheckmark from "../assets/icon-checkmark.svg";
import { PlanContext } from "../PlanContext";
import { Buttons } from "./Buttons";

export const complements = [
    {
        id: "online",
        title: "Serviço online",
        desc: "Acesso a jogos multiplayer",
        price: {
            month: 5,
            year: 50,
        },
    },
    {
        id: "storage",
        title: "Mais armazenamento",
        desc: "1TB extra de armazenamento em nuvem",
        price: {
            month: 10,
            year: 100,
        },
    },
    {
        id: "profile",
        title: "Perfil personalizável",
        desc: "Tema personalizado em seu perfil",
        price: {
            month: 10,
            year: 100,
        },
    },
];

export function AddOns() {
    const { addOns, setAddOns, step, setStep, period } = React.useContext(PlanContext);
    const change = ({ target }) => {
        if (target.checked) {
            const addOnSelected = complements.filter(complement => complement.id === target.id)[0];

            setAddOns([...addOns, { 
                addOnId: addOnSelected.id,
                addOnTitle: addOnSelected.title,
                addOnPrice: addOnSelected.price
            }]);
        } else {
            setAddOns(addOns.filter(addOn => addOn.addOnId !== target.id));
        }
    }
    const nextStep = () => setStep(step + 1);

    return (
        <>
            <ul className="addons__list">
                {complements.map(({ id, title, desc, price }) => {
                    const selected = addOns.map(addOns => addOns.addOnId);

                    return (
                        <li className="addons__item" key={id}>
                            <input
                                className={`addons__input${selected.includes(id) ? " --checked" : ""}`}
                                type="checkbox"
                                id={id}
                                name={id}
                                value={id}
                                onChange={change}
                                checked={selected.includes(id) ? true : false}
                            />

                            <label className="addons__label" htmlFor={id}>
                                <span className="addons__checkbox">
                                    <SVGCheckmark />
                                </span>

                                <span className="addons__infos">
                                    <span className="addons__title">
                                        {title}
                                    </span>
                                    <span className="addons__desc">
                                        {desc}
                                    </span>
                                </span>

                                <PricePerPeriod
                                    period={period}
                                    price={price}
                                    before="+"
                                    classes="addons__price"
                                />
                            </label>
                        </li>
                    );
                })}
            </ul>

            <Buttons nextStep={nextStep} />
        </>
    );
}
