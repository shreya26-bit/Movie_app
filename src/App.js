import React, { useEffect } from 'react'
import "./App.css"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Header from './Components/Header/Header'
import Home from './Pages/Home/Home'
import MovieList from './Components/MovieList/MovieList'
import MovieDetails from './Pages/MovieDetails/MovieDetails'

function App() {

  return (
    <div className='App'>
  <Router>
     <Header/>
      <Routes>
      <Route path="/"  element={<Home/>}/>
      <Route path='movie/:id' element={<MovieDetails/>}/>
      <Route path='movies/:type' element={<MovieList/>}/>
     </Routes>
     </Router>
     </div>
  )
}

export default App