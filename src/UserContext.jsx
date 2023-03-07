import React from "react";

export const UserContext = React.createContext();

export function UserPlan({ children }) {
    const [plan, setPlan] = React.useState({ title: "Arcade" });
    const [period, setPeriod] = React.useState("month");
    const [addOns, setAddOns] = React.useState([
        {
            title: "Serviço online",
            price: {
                month: 5,
                year: 50
            }
        }
    ]);

    return (
        <UserContext.Provider value={{ 
            plan,
            period,
            addOns
         }}>
            {children}
        </UserContext.Provider>
    );
}
