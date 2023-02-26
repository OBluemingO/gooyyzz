import { useState } from 'react'
import Navbar from './components/bars/navbar'
import Home from './pages/home'

function App() {
  return (
    <div className='bg-light-purple max-w-[1440px] mx-auto'>
      <Navbar />
      <Home />
    </div>
  )
}

export default App
