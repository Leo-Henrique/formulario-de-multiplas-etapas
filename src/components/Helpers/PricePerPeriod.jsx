import React from "react";

export default function PricePerPeriod({
    period,
    price: { month, year },
    before,
    classes
}) {
    const handlePeriod = () => {
        if (period == "month") return `R$ ${month}/mês`;
        else return `R$ ${year}/ano`;
    };

    return (
        <span className={classes}>
            {before && before}
            {handlePeriod()}
        </span>
    );
}
