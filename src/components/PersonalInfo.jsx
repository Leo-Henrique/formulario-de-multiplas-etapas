import React from "react";

export default function PersonalInfo() {
    const ex = "p. ex.";
    const fields = [
        {
            id: "name",
            label: "Nome",
            placeholder: `${ex} Leonardo Henrique`
        },
        {
            id: "email",
            label: "Endereço de e-mail",
            placeholder: `${ex} leonardo.h@example.com`
        },
        {
            id: "tel",
            label: "Número de telefone",
            placeholder: `${ex} (14) 90000-0000`
        }
    ]

    return (
        <>
            {fields.map(({ id, label, placeholder }) => (
                <div key={id}
                className="infos__item">
                    <div className="infos__info">
                        <label htmlFor={id}
                        className="infos__label">
                            {label}
                        </label>

                        {/* <span class="infos__error">Um erro ocorreu!</span> */}
                    </div>

                    <input className="infos__input"
                    type="text"
                    id={id}
                    name={id}
                    placeholder={placeholder} />
                </div>
            ))}
        </>
    );
}
