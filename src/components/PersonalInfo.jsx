import React from "react";
import { PlanContext } from "../PlanContext";
import { Buttons } from "./Buttons";
import useForm from "../hooks/useForm";

export function PersonalInfo() {
    const ex = "p. ex.";
    const fields = [
        {
            id: "name",
            label: "Nome",
            placeholder: `${ex} Leonardo Henrique`,
            state: useForm("name"),
        },
        {
            id: "email",
            label: "Endereço de e-mail",
            placeholder: `${ex} leonardo.h@example.com`,
            state: useForm("email"),
        },
        {
            id: "tel",
            label: "Número de telefone",
            placeholder: `${ex} (14) 90000-0000`,
            state: useForm("tel"),
        }
    ];
    const { step, setStep } = React.useContext(PlanContext);
    const nextStep = () => {
        const validations = Object.values(fields).map(input => input.state.validate());
        const validated = validations.every(validation => validation);

        if (validated) setStep(step + 1);
    }

    return (
        <>
            <div className="infos__list">
                {fields.map(({ id, label, placeholder, state, ref }, index) => (
                    <div key={id}
                    className="infos__item">
                        <div className="infos__info">
                            <label htmlFor={id}
                            className="infos__label">
                                {label}
                            </label>

                            {state.error && (
                                <span className="infos__error">{state.error}</span>
                            )}
                        </div>

                        <input className={`infos__input${state.error ? " --error" : ""}`}
                        type="text"
                        id={id}
                        name={id}
                        placeholder={placeholder}
                        value={state.value}
                        onChange={state.change}
                        autoFocus={index === 0 && true}
                        ref={ref}
                        />
                    </div>
                ))}
            </div>

            <Buttons step={step}
            setStep={setStep}
            nextStep={nextStep} />
        </>
    );
}
