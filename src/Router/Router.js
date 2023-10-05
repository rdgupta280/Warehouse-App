import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import WorkShop from '../Pages/WorkShop/WorkShop'

const Router = () => {

 return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<WorkShop />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Router