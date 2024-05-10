import './WeatherForecast.css'
import WeatherData from './WeatherData'

function WeatherForecast({day, img, imgAlt, conditions, time}) {
  
  return (
    <div className="weather">
      <WeatherData 
        day={day} 
        img={img} 
        imgAlt={imgAlt} 
        conditions={conditions} 
        time={time}
      />
    </div>
  )
}

export default WeatherForecast
