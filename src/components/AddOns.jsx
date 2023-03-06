import React from "react";
import { UserContext } from "../UserContext";
import PricePerPeriod from "./Helpers/PricePerPeriod";
import SVGCheckmark from "../assets/icon-checkmark.svg";


export default function AddOns() {
    const options = [
        {
            id: "online",
            title: "Serviço online",
            desc: "Acesso a jogos multiplayer",
            price: {
                month: 5,
                year: 50
            }
        },
        {
            id: "storage",
            title: "Mais armazenamento",
            desc: "1TB extra de armazenamento em nuvem",
            price: {
                month: 10,
                year: 100
            }
        },
        {
            id: "profile",
            title: "Perfil personalizável",
            desc: "Tema personalizado em seu perfil",
            price: {
                month: 10,
                year: 100
            }
        }
    ];
    const { period } = React.useContext(UserContext);

    return (
        <>
            <ul className="addons__list">
                {options.map(({ id, title, desc, price }) => (
                    <li className="addons__item"
                    key={id}>
                        <input className="addons__input"
                        type="checkbox"
                        id={id}
                        name={id} />

                        <label className="addons__label"
                        htmlFor={id}>
                            <span className="addons__checkbox">
                                <SVGCheckmark />
                            </span>

                            <span className="addons__infos">
                                <span className="addons__title">{title}</span>
                                <span className="addons__desc">{desc}</span>
                            </span>

                            <PricePerPeriod
                                period={period}
                                price={price}
                                before="+"
                                classes="addons__price"
                            />
                        </label>
                    </li>
                ))}
            </ul>
        </>
    );
}
