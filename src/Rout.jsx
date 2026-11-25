import React from 'react'
import { Header } from './Componet/header/Header'
import { Outlet } from 'react-router'
import { Footer } from './Componet/Footer/Footer'

export const Rout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
     </>
  )
}
