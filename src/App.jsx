import { useState } from 'react'
import './App.css'
import SearchIcon from './assets/search.png';
import Cloud from './assets/cloud.png';

function App() {

  return (
    <>
      <div className='container'>
        <div className="weather">
          <div className="search">
            <input type="text" placeholder='Enter City Name' />
            <button><img src={SearchIcon} alt="" /></button>
          </div>
          <div className='winfo'>
            <img src={Cloud} alt="" className='icon' />
            <h1>22°C</h1>
            <h2>London</h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
