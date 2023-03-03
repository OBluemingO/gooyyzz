import React, { createContext, useReducer } from "react";

const initialState = {
    isScaleCursor: false,
    pos: { x: 0, y: 0 },
};

const actions = {
    HIT_ELEMENT: "HIT_ELEMENT",
    NOT_HIT_ELEMENT: "NOT_HIT_ELEMENT",
    POINTER_POSITION: "POINTER_POSITION",
};

export const Context = createContext(initialState);

export const Store = ({ children }) => {
    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case actions.NOT_HIT_ELEMENT:
                return { ...state, isScaleCursor: false };
            case actions.HIT_ELEMENT:
                return { ...state, isScaleCursor: true };
            case actions.POINTER_POSITION:
                return { ...state, pos: action.newState };
            default:
                throw new Error(`Unhandled action type: ${action.type}`);
        }
    }, initialState);

    const actionState = {
        cursor: state.isScaleCursor,
        pointer: state.pos,
        handleCursorHit: (newState) => {
            dispatch({ type: actions.HIT_ELEMENT, newState });
        },
        handleCursorNotHit: (newState) => {
            dispatch({ type: actions.NOT_HIT_ELEMENT, newState });
        },
        handlePositionPointer: (newState) => {
            dispatch({ type: actions.POINTER_POSITION, newState });
        },
    };

    return <Context.Provider value={actionState}>{children}</Context.Provider>;
};
