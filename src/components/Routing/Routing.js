import React from 'react'
import { BrowserRouter, Route, Routes,Switch } from 'react-router-dom'
import Navbar from './Navbar'

const Routing = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
         <Route path='/' exact component={Home}/>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default Routing
