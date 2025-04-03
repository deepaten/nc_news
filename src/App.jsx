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
import SingleArticle from './components/SingleArticle';
import ArticleComments from './components/ArticleComments';

function App() {



  return (
    
      <div className='App'>
        <Header />

        <Nav />
      
          { <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/api/articles" element={<Articles />} />                 
          <Route path="/api/articles/:article_id" element={<SingleArticle />} />  
          <Route path="/api/articles/:article_id/comments" element={<ArticleComments />} />                           
          
          </Routes>  }
       
        <Footer/>

      </div>
  )
}

export default App
