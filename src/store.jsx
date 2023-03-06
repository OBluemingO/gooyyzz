import React, { createContext, useReducer } from "react";

const initialState = {
    isScaleCursor: false,
    isScaleCursorDown: false,
    pos: { x: 0, y: 0 },
};

const actions = {
    HIT_ELEMENT: "HIT_ELEMENT",
    NOT_HIT_ELEMENT: "NOT_HIT_ELEMENT",
    MOUSE_SCALE: "MOUSE_SCALE",
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
            case actions.MOUSE_SCALE:
                return {
                    ...state,
                    isScaleCursorDown: !state.isScaleCursorDown,
                };
            case actions.POINTER_POSITION:
                return { ...state, pos: action.newState };
            default:
                throw new Error(`Unhandled action type: ${action.type}`);
        }
    }, initialState);

    const actionState = {
        cursor: state.isScaleCursor,
        pointer: state.pos,
        cursorDown: state.isScaleCursorDown,
        handleCursorScaleDown: (newState) => {
            dispatch({ type: actions.MOUSE_SCALE, newState });
        },
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
