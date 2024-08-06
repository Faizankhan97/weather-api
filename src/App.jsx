import { useEffect, useState } from 'react'
import './App.css'
import SearchIcon from './assets/search.png';
import Cloud from './assets/cloud.png';
import Humidity from './assets/humidity.png';
import Wind from './assets/wind.png';
import axios from 'axios';

function App() {
  const [isData, setIsData] = useState('')
  const [isName, setIsName] = useState('')

  const handleClick = () => {
    if (isName !== "") {
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${isName}&appid=c8e1e294ffa808f3736db3282dc68eb0`;
      axios
        .get(apiUrl)
        .then((res) => {
          setIsData(res);
          console.log(res?.data);
        })
        .catch((err) => setIsData(err));
    }
  }

    const convertToCelsius = (temp) => {
      return temp - 273.15;
    };

  return (
    <>
      <div className="container">
        <div className="weather">
          <div className="search">
            <input
              type="text"
              placeholder="Enter City Name"
              onChange={(e) => setIsName(e.target.value)}
              value={isName}
            />
            <button onClick={handleClick}>
              <img src={SearchIcon} alt="" />
            </button>
          </div>
          <div className="winfo">
            <img src={Cloud} alt="" className="icon" />
            <h1>{Math.floor(convertToCelsius(isData?.data?.main?.temp))}°C</h1>
            <h2>{isData?.data?.name}</h2>
            <div className="details">
              <div className="col">
                <img src={Humidity} alt="" />
                <div className="humidity">
                  <p>{isData?.data?.main?.humidity}%</p>
                  <p>Humidity</p>
                </div>
              </div>
              <div className="col">
                <img src={Wind} alt="" />
                <div className="wind">
                  <p>{isData?.data?.wind?.speed}km/h</p>
                  <p>Wind</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
