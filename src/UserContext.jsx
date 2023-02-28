import React from "react";

export const UserContext = React.createContext();

export function UserPlan({ children }) {
    const [plan, setPlan] = React.useState(null);
    const [period, setPeriod] = React.useState("month");
    const [addOns, setAddOns] = React.useState([]);

    return (
        <UserContext.Provider value={{ period }}>
            {children}
        </UserContext.Provider>
    );
}
