import styles from './styles.module.css'
import { BiSearchAlt2 } from "react-icons/bi";
import { BiCurrentLocation } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";
import { useLocation } from '../../context/LocationContext'
import { useEffect, useState } from 'react';


function Main() {
  const { location, setLocation, coordinates, setCoordinates, autoLocate, setAutoLocate, setViewState, currentLocation, setCurrentLocation } = useLocation();

  const [status, setStatus] = useState(null);

  useEffect(() => {
    findLocation()
  }, [coordinates]);
  
  useEffect(() => {
    getLocation()
  }, []);


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
  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus('Geolocation is not supported by your browser');
    } else {
      setStatus('Locating...');
      navigator.geolocation.getCurrentPosition((position) => {
        setStatus("Konum tespit edildi.");
        setCoordinates({ lon: position.coords.longitude, lat: position.coords.latitude })
        setCurrentLocation({ lon: position.coords.longitude, lat: position.coords.latitude })
      }, () => {
        setStatus('Unable to retrieve your location');
      });
    }
  }

  return (
    <div>
      <div className={styles.searchbox}>
        <span><button className={styles.menu}><AiOutlineMenu /></button></span>
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
          <button onClick={getLocation} className={styles.locate} ><BiCurrentLocation size={25} /></button>
        </div>
      </div>
    </div>

  )
}

export default Main