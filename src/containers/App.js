import React from "react";
import Header from "../components/Header"
import SearchBox from "../components/SearchBox"
import Location from "../components/Location"
import Current from "../components/Current"
import Footer from "../components/Footer"
import "./App.css";

const api = {
  key: "4e4af810918ede5b35797f8aaef35723",
  base: "https://api.openweathermap.org/data/2.5/"
}

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      city: "",
      temp: "",
      weather: "",
      weatherC: "",
      weatherF: "",
      hilow: [],
      unit: ['metric', 'C'],
    }
  }

  toggleUnit = () => {
    if(this.state.unit[0] === "metric"){
      this.setState({
        unit: ['imperial', 'F']
      })
      this.fetchWeatherF(this.state.city)
      console.log('switching to imperial')
    }
    if(this.state.unit[0] === "imperial"){
      this.setState({
        unit: ['metric', 'C']
      })
      this.fetchWeatherC(this.state.city)   
      console.log('switching to metric')

    }
  }

  onSearch = (event) => {
    if(event.keyCode === 13){
      this.fetchWeather(event.target.value)
    }
  }

  fetchWeather = (query) => {
      fetch(`${api.base}weather?q=${query}&units=${this.state.unit[0]}&APPID=${api.key}`)
        .then((response) => {
          return response.json()
        })
        .then((weather) =>this.updateWeather(weather))
        .catch(() => console.log('Error!'))
  }

  fetchWeatherC = (query) => {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then((response) => {
        return response.json()
      })
      .then((weather) =>this.updateWeather(weather))
      .catch(() => console.log('Error!'))
}

  fetchWeatherF = (query) => {
    fetch(`${api.base}weather?q=${query}&units=imperial&APPID=${api.key}`)
      .then((response) => {
        return response.json()
      })
      .then((weather) =>this.updateWeather(weather))
      .catch(() => console.log('Error!'))
  }





  updateWeather = (weather) => {
    this.setState({ 
      city: `${weather.name}, ${weather.sys.country}`, 
      temp:`${Math.round(weather.main.temp)}`,
      weather:`${weather.weather[0].description}`,
      hilow: [`${Math.round(weather.main.temp_min)}`,`${Math.round(weather.main.temp_max)}`]
    })
  }

  render() {
    const { city, date, temp, weather, hilow, unit } = this.state;
    return !city.length ?
      <div className="app-wrap">
        <Header>
              <SearchBox 
              onSearch={ this.onSearch }/>
            </Header>
            <Footer />
      </div>:
    (
      <div className="app-wrap">
        <main className="main">
          <Header>
            <SearchBox 
            onSearch={ this.onSearch }/>
          </Header>

          <Location 
          city={ city } 
          date={ date }/>

          <Current 
          temp={ temp } 
          unit={ unit[1] } 
          hilow={ hilow } 
          weather={ weather }
          toggleUnit={ this.toggleUnit }
          />

        </main>
        <Footer />
      </div>
    )
  }
}



export default App;
