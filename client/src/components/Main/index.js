import styles from './styles.module.css'
import { BiSearchAlt2 } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";
import { useLocation } from '../../context/LocationContext'
import { useEffect } from 'react';


function Main() {
  const { location, setLocation, coordinates, setCoordinates, autoLocate, setAutoLocate, setViewState } = useLocation();

  useEffect(() => {
    findLocation()
  }, [coordinates]);


  const findCoordinates = (e) => {
    e.preventDefault()
    fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=${process.env.REACT_APP_API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        setCoordinates({ lon: data[0].lon, lat: data[0].lat })
      })
      .catch((error) => console.log(error))
  }

  const findLocation = () => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${process.env.REACT_APP_API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        setLocation(data.city.name)
        setViewState({
          longitude: coordinates.lon,
          latitude: coordinates.lat,
          zoom: 11.5
        })
      })
      .catch(e => console.log(e))
  }

  return (
    <div>
      <div className={styles.searchbox}>
        <span><button><AiOutlineMenu /></button></span>
        <div className={styles.searchinput}>
          <form action="submit" onSubmit={findCoordinates}>
            <input
              type="text"
              id='search'
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder='Search for a Charging Location'
            />
          </form>
          <label htmlFor="search"><BiSearchAlt2 /></label>
        </div>
      </div>
    </div>
  )
}

export default Main