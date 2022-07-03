import React from 'react'
import { useContext } from 'react'
import  {PersonContext}  from '../context/noteContext'
import SubAboutDetail from './SubAboutDetail';

const SubAbout = () => {
  
  const { counterState } = useContext(PersonContext);

  return (
    <div>
      <h2>SubAbout Component {counterState}</h2>
      <SubAboutDetail />
    </div>
  )
}

export default SubAbout
