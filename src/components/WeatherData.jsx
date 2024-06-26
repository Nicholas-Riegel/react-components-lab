import WeatherIcon from './WeatherIcon'

function WeatherData({day, img, imgAlt, conditions, time}) {
  return (
    <>
        <h2>{day}</h2>
        <WeatherIcon img={img} imgAlt={imgAlt}/>
        <p><span>conditions: </span>{conditions}</p>
        <p><span>time: </span>{time}</p>
    </>
  )
}

export default WeatherData