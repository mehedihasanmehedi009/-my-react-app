import React from 'react'
import { Header } from './Componet/header/Header'
import { Outlet } from 'react-router'
import { Footer } from './Componet/Footer/Footer'

export const Rout = () => {
  return (
    <>
    <div className='bg-base-300'>
      <Header/>
    <Outlet/>
    <Footer/>
    </div>
     </>
  )
}
