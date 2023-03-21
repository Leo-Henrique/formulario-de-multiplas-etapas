import React from "react";
import { PlanContext } from "../PlanContext";
import { Buttons } from "./Buttons";
import useForm from "../hooks/useForm";

export function PersonalInfo() {
    const ex = "p. ex.";
    const fields = [
        {
            id: "name",
            label: "Primeiro nome",
            placeholder: `${ex} Leonardo`,
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
    const { personal, setPersonal, step, setStep } = React.useContext(PlanContext);
    const nextStep = () => {
        const validations = Object.values(fields).map(input => input.state.validate());
        const validated = validations.every(validation => validation);

        if (validated) {
            setPersonal(() => {
                let obj = {};

                fields.forEach(field => {
                    obj[field.id] = field.state.value;
                });
                return obj;
            });
            setStep(step + 1);
        };
    }

    React.useEffect(() => {
        if (personal) fields.forEach(field => field.state.setValue(personal[field.id]));
    }, []);

    return (
        <>
            <div className="infos__list">
                {fields.map(({ id, label, placeholder, state }, index) => (
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
