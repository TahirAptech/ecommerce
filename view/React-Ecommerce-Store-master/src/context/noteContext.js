import { createContext, useReducer, useState } from "react";

const AppReducer = (state, { type, payload }) => {
    switch (type) {
        case 'PLUS':
            return ++state;
        case 'MINUS':
            return --state;
        case 'setName':
            return state = payload;
        default:
            return state;
    }
}

// Create Context
export const PersonContext = createContext();

// Provider Component
export const GlobalProvider = ({ children }) => {
    const [state, mydispatch] = useReducer(AppReducer, 0);

    // Actions
    const setText = (text) => {
        mydispatch({ type: 'setName', payload: text })
    }
    const PLUS = (text) => {
        mydispatch({ type: 'PLUS' })
    }
    const MINUS = (text) => {
        mydispatch({ type: 'MINUS' })
    }

    return (
        <PersonContext.Provider value={{ state, setText, PLUS, MINUS }}>
            {children}
        </PersonContext.Provider>
    )
}
