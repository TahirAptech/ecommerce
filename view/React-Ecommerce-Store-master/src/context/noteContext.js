import { createContext, useReducer, useState } from "react";

// const AppReducer = (state, { type, payload }) => {
//     switch (type) {
//         case 'PLUS':
//             return ++state;
//         case 'MINUS':
//             return --state;
//         default:
//             return state;
//     }
// }
const AppReducer2 = (state, { type, payload }) => {
    switch (type) {
        case 'setName':
            return (state = payload);
        default:
            return state;
    }
}
// Create Context
export const PersonContext = createContext();

// Provider Component
export const GlobalProvider = (prop) => {
    // const [state, mydispatch] = useReducer(AppReducer, 0);
    const [state2, mydispatch2] = useReducer(AppReducer2, "Tahir");

    // Actions
    const setText = (text) => {
        mydispatch2({ type: 'setName', payload: text })
    }
    // const PLUS = (text) => {
    //     mydispatch({ type: 'PLUS' })
    // }
    // const MINUS = (text) => {
    //     mydispatch({ type: 'MINUS' })
    // }
    var [counterState, setCounter] = useState(0);
    let Plus = (num) => {
        setCounter(counterState = (counterState + num))
    }
    let Minus = () => {
        setCounter(--counterState)
    }
    return (
        <PersonContext.Provider value={{ counterState, Plus, Minus, state2, setText }}>
            {prop.children}
        </PersonContext.Provider>
    )
}
