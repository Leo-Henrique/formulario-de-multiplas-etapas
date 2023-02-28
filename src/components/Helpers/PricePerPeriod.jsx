import React from "react";

export default function PricePerPeriod({ period, price: { month, year }, before }) {
    const handlePeriod = () => {
        if (period == "month")
            return `R$${month}/mês`
        else
            return `R$${year}/ano`
    }

    return <span>{before && before}{handlePeriod()}</span>;
}
