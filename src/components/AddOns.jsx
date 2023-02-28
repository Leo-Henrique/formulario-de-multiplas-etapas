import React from "react";

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
    ]

    return (
        <>
            <ul>
                {options.map(({ id, title, desc, price }) => (
                    <li key={id}>
                        <label htmlFor={id}>
                            <input type="checkbox"
                            id={id}
                            name={id} />

                            <span></span>

                            <span>
                                <span>{title}</span>
                                <span>{desc}</span>
                            </span>

                            <span>+R${price.month}/mês</span>
                        </label>
                    </li>
                ))}
            </ul>
        </>
    );
}
