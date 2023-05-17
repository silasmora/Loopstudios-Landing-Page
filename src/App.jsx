import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import MobileMenu from './components/MobileMenu'

function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function handleClick() {
    setIsMenuOpen(!isMenuOpen)
  }
  
  return (
    <>
      <div className=''>
        <Header handleClick={handleClick}/>
        <MainContent />
        <Footer />
        {isMenuOpen && <MobileMenu handleClick={handleClick} isMenuOpen={isMenuOpen}/>}
      </div>
    </>
  )
}

export default App
