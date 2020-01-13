import React from "react";
import Header from "../components/Header"
import SearchBox from "../components/SearchBox"
import Location from "../components/Location"
import City from "../components/City"
import Date from "../components/Date"
import Current from "../components/Current"
import Temp from "../components/Temp"
import Weather from "../components/Weather"
import HiLow from "../components/HiLow"
import Footer from "../components/Footer"
import "./App.css";

const api = {
  key: "4e4af810918ede5b35797f8aaef35723",
  base: "https://api.openweathermap.org/data/2.5/"
}
var moment = require('moment');

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      city: "",
      date: `${moment().format('MMMM Do YYYY')}`,
      temp: "",
      weather: "",
      hilow: [],
      searchbox: "",
    }
  }

 /*    componentDidMount() {
      fetch(`${api.base}weather?q=houston&units=imperial&APPID=${api.key}`)
      .then((response) => { 
        return response.json();
      })
      .then((weather) => { 
        this.setState({ 
          city: `${weather.name}, ${weather.sys.country}`, 
          temp:`${Math.round(weather.main.temp)}`,
          weather:`${weather.weather[0].description}`,
          hilow: [`${Math.round(weather.main.temp_min)}`,`${Math.round(weather.main.temp_max)}`]
        })
      })
    } */

  onSearch = (event) => {
    if (event.keyCode === 13){
      this.fetchWeather(event.target.value)
    }
  }

  fetchWeather = (query) => {
      fetch(`${api.base}weather?q=${query}&units=imperial&APPID=${api.key}`)
        .then((response) => {
          return response.json()
        })
        .then((weather) =>this.updateWeather(weather));
  }

  updateWeather(weather) {
    this.setState({ 
      city: `${weather.name}, ${weather.sys.country}`, 
      temp:`${Math.round(weather.main.temp)}`,
      weather:`${weather.weather[0].description}`,
      hilow: [`${Math.round(weather.main.temp_min)}`,`${Math.round(weather.main.temp_max)}`]
    })
  }

  render() {
    const { city, date, temp, weather, hilow } = this.state;
    
    return(
      <div className="app-wrap">
        <main className="main">
          <Header>
            <SearchBox 
            onSearch={ this.onSearch } />
          </Header>

          <Location>
            <City city={ city } />
            <Date date={ date }/>
          </Location>

          <Current>
            <Temp temp={ temp }/>
            <Weather weather={ weather } />
            <HiLow hilow={ hilow }/>
          </Current>
        </main>
        <Footer />
      </div>
    )
  }
}



export default App;
