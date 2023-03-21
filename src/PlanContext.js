import React from "react";
import { plans } from "./components/SelectPlan";
import { complements } from "./components/AddOns";

export const PlanContext = React.createContext();
export const planInfos = () => {
    const { 
        id: planId,
        title: planTitle, 
        price: planPrice,
    } = plans.filter(({id}) => id === "arcade")[0];
    const { 
        id: addOnId,
        title: addOnTitle, 
        price: addOnPrice,
    } = complements.filter(({id}) => id === "online")[0];
    const [plan, setPlan] = React.useState({planId, planTitle, planPrice});
    const [addOns, setAddOns] = React.useState([{addOnId, addOnTitle, addOnPrice}]);
    const [period, setPeriod] = React.useState("month");

    return {
        plan,
        setPlan,
        addOns,
        setAddOns,
        period,
        setPeriod,
    }
};