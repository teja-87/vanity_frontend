import React, { useEffect } from 'react'
import Navbar from '../../Components/navbar/Navbar'
import Maincontent from '../../Components/Maincontent/Maincontent'

const Landing = () => {
  useEffect(()=>{
    document.body.style.overflow='hidden';
    return()=>{
      document.body.style.overflow='auto';
  };
},[]);
  return (
    <>
    <Navbar/>
    <Maincontent/>
    </>
  )
}

export default Landing