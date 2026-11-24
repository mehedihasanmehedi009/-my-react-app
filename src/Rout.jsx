import React from 'react'
import { Header } from './Componet/header/Header'
import { Outlet } from 'react-router'

export const Rout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
     </>
  )
}
