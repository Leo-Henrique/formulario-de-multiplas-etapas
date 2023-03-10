import React from "react";

export default function useNextStep(callback) {
    React.useEffect(() => {
        const btnNext = document.querySelector(".card__next");
        btnNext.addEventListener("click", callback)
    }, [])
}
