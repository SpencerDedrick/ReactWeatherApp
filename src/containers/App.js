//Test Branch
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
      weatherDataC: null,
      weatherDataF: null,
      cityName: "",
      weather: "",
      temp: "",
      hiLow: [],
      unit: ['metric', 'C'],
    }
  }


  //toggleUnit will change the temperature and units from imperial to metric and vice versa when the temperature is clicked or tapped
  toggleUnit = () => {
    if(this.state.unit[0] === "metric"){
      this.setUnitImperial()
    }
    if(this.state.unit[0] === "imperial"){
     this.setUnitMetric()
  }
}

  setUnitImperial = () => {
    this.setState({
      unit: ['imperial', 'F']
    })
    this.updateWeatherData(this.state.weatherDataF)
  }
  
  setUnitMetric = () => {
    this.setState({
      unit: ['metric', 'C']
    })
    this.updateWeatherData(this.state.weatherDataC)  
    }

    onSearch = (event) => {
      if(event.keyCode === 13){
        this.fetchWeather(this.formatUrl(event.target.value))
      }
    }
    
    formatUrl = (query) => {
      return (
      [`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`,
      `${api.base}weather?q=${query}&units=imperial&APPID=${api.key}` ]
      )
    }

    fetchWeather = async (urls) => {
      const [ weatherDataC, weatherDataF] = await Promise.all(urls.map(async (url) => {
        const response = await fetch(url)
        return response.json()
      }))
      this.setWeatherData(weatherDataC, weatherDataF)
      this.updateWeatherData(weatherDataC)
     }

     setWeatherData = async (dataC, dataF) => {
       this.setState({
         weatherDataC: dataC,
         weatherDataF: dataF,
         weather: `${dataC.weather[0].description}`,
       })
     }

    updateWeatherData = async (data) => {
      this.setState({ 
        cityName: `${data.name}, ${data.sys.country}`, 
        temp:`${Math.round(data.main.temp)}`,
        hilow: [`${Math.round(data.main.temp_min)}`,`${Math.round(data.main.temp_max)}`],
      })
    }
    
/*   toggleUnit = () => {
    if(this.state.unit[0] === "metric"){
      this.setState({
        unit: ['imperial', 'F']
      })
      this.fetchWeatherF(this.state.cityName)
      console.log('switching to imperial')
    }
    if(this.state.unit[0] === "imperial"){
      this.setState({
        unit: ['metric', 'C']
      })
      this.fetchWeatherC(this.state.cityName)   
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
      cityName: `${weather.name}, ${weather.sys.country}`, 
      temp:`${Math.round(weather.main.temp)}`,
      weather:`${weather.weather[0].description}`,
      hilow: [`${Math.round(weather.main.temp_min)}`,`${Math.round(weather.main.temp_max)}`]
    })
  } */

  render() {
    const { cityName, date, temp, weather, hilow, unit } = this.state;
    return !cityName.length ?
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
          city={ cityName } 
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
