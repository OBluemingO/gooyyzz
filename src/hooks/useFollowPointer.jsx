import { Context } from "../store";
import { useState, useEffect, useContext } from "react";

export const useFollowPointer = (ref) => {

    const { handlePositionPointer } = useContext(Context)

    useEffect(() => {
        if (!ref.current) return;

        const handlePointerMove = ({ clientX, clientY }) => {
            const element = ref.current;

            const x = clientX - element.offsetLeft - element.offsetWidth / 2;
            const y = clientY - 25;

            handlePositionPointer({x,y})
        };

        window.addEventListener("pointermove", handlePointerMove);

        return () => {
            window.removeEventListener("pointermove", handlePointerMove);
        };
    }, []);
    
};
