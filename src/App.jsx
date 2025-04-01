import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Articles from './components/Articles';
import Home from './components/Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <Header />

        <Nav />
      
          { <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/api/articles" element={<Articles />} />
          <Route path="/api/articles/:article_id" element={<Articles />} />
          </Routes>  }
       
        <Footer/>

      </div>

    </>
  )
}

export default App
