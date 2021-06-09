import { useEffect } from "react";

export const useBeforeTop = (onBefore) => {
    const handle = (event) => {
        const {
            clientY
        } = event;
        if (clientY <= 0) {
            console.log("leaving");
        };
    };
    useEffect(() => {
        if (typeof onBefore !== "function") {
            return;
        } else {
            document.addEventListener("mouseleave", handle);
            return () => document.removeEventListener("mouseleave", handle);
        };
    }, []);
};