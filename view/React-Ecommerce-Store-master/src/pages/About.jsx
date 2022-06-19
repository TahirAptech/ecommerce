import React, { createContext, useReducer, useState } from 'react'
import { useContext } from 'react';
import { PersonContext } from '../context/noteContext';
import SubAbout from './SubAbout';

const MyAbout = () => {
    const { state, PLUS, MINUS } = useContext(PersonContext);

    return (
        <div style={{ width: "15%", margin: "4rem auto", border: "1px solid", backgroundColor: "yellow", textAlign: "center" }}>
            <br></br>
            <h2>{state}</h2>
            {/* <input type="text" placeholder="Enter some text" onChange={e => setText(e.target.value)} /> */}
            <button onClick={PLUS}>PLUS</button>
            <button onClick={MINUS}>Minus</button>
        </div>
    )
}

const About = () => {

    return (
        <>
            <MyAbout />
            <SubAbout />
        </>
    )
}

export default About
