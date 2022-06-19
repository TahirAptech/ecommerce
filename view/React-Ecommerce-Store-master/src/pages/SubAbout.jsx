import React from 'react'
import { useContext } from 'react'
import  {PersonContext}  from '../context/noteContext'
import SubAboutDetail from './SubAboutDetail';

const SubAbout = () => {
  
  const { state } = useContext(PersonContext);

  return (
    <div>
      <h2>SubAbout Component {state}</h2>
      <SubAboutDetail />
    </div>
  )
}

export default SubAbout
