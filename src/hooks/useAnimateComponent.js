import React from "react";

export default function useAnimateComponent(animation, ref, callback) {
    const [newCallback, setNewCallback] = React.useState(null);

    React.useEffect(() => {
        const animate = () => {
            const attr = "data-transition";
            const { current } = ref;
            const duration = +getComputedStyle(current).transitionDuration.slice(0, -1) * 1000;

            if (!current.hasAttribute(attr)) {
                current.setAttribute(attr, "");
                current.classList.add(`--${animation}`);
                setTimeout(() => {
                    callback();
                    current.classList.remove(`--${animation}`);
                }, duration);
                setTimeout(() => current.removeAttribute(attr), duration * 2);
            }
        };

        setNewCallback(() => animate);
    }, []);

    return newCallback;
}
