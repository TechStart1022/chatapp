import React from 'react';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom"

import viteLogo from '/vite.svg'
import Join from './components/Join';
function App() {
  return (
   <Router>
      <Routes>
        <Route path='/' element={ <Join/>} />
      </Routes>
   </Router>
  )
}

export default App
