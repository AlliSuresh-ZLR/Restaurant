import React, { useState, useContext, createContext } from 'react'
import { Provider } from 'react-redux'
import { RouterProvider, useLocation } from 'react-router-dom'
import Card from './container/Card'
import Card1 from './container/Card1'
import Filter from './container/Filter'
import Header from './container/Header'
import Table from './container/Table'

function Home() {
  const location=useLocation();
  console.log();

  return (
    <div>
      <Header />

      <Filter />
      <Table />
      <Card />

    </div>
  )
}

export default Home