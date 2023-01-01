import * as React from 'react';
import Map, { Marker, ScaleControl } from 'react-map-gl';
import styles from './styles.module.css'
import { useEffect, useState } from 'react';
import { IoMdPin } from 'react-icons/io';
import { TiLocationArrow } from 'react-icons/ti';
import { useLocation } from '../../context/LocationContext';
import { useStation } from '../../context/StationContext';


function ScreenMap() {
    const { location, setLocation, coordinates, setCoordinates, autoLocate, setAutoLocate, viewState, setViewState, currentLocation, setCurrentLocation } = useLocation();
    const { stations, setStations } = useStation();
    const [toggle, setToggle] = useState(false)

    const currentPoint = () => {
        return (
            <Marker longitude={currentLocation.lon} latitude={currentLocation.lat} anchor="bottom" >
                <TiLocationArrow color='blue' size={35} />
            </Marker>
        )
    }

    const stationsPrinter = () => {
        return (
            stations.map((elma) =>
                <Marker longitude={elma.AddressInfo.Longitude} latitude={elma.AddressInfo.Latitude} anchor="bottom" >
                    {toggle && <div className={styles.card}>
                        <ul>
                            <li>{<b>{elma.AddressInfo.Title}</b>}</li>
                            <li>Phone Number: {elma.AddressInfo.ContactTelephone1}</li>
                            <li>Location: {elma.AddressInfo.Town}, {elma.AddressInfo.AddressLine1}, {elma.AddressInfo.StateOrProvince}, {elma.AddressInfo.Postcode} </li>
                            <li>Payment: {elma.SubmissionStatus.Title}</li>
                            <li>Description: <a href={elma.OperatorInfo.WebsiteURL}>{elma.UsageType.Title}</a> </li>
                            <li>PlugType: {elma.Connections[0].ConnectionType.FormalName}</li>
                        </ul>
                    </div>}
                    <IoMdPin onClick={() => setToggle(!toggle)} className={styles.marker} size={35} />
                </Marker>

            )
        )


    }
    return (
        <div className={styles.main}>
            <Map
                {...viewState}
                onMove={evt => {
                    setViewState(evt.viewState)
                }}
                mapboxAccessToken='pk.eyJ1IjoieWVtaXJ2dXJhbCIsImEiOiJjbGNiMnhuems2YW55M3drZXZ6enR4MGU3In0.wLCpRBRzq3zCS7c6-ruBfw'
                style={{ width: '100%', height: '100vh' }}
                mapStyle="mapbox://styles/mapbox/streets-v8"
            >
                {stationsPrinter()}
                {currentPoint()}
            </Map>
            <div className={styles.sidebarStyle}>
                <div>
                    Longitude: {viewState.longitude.toFixed(5)} | Latitude: {viewState.latitude.toFixed(5)} | Zoom: {viewState.zoom.toFixed(2)}
                </div>
            </div>
        </div>
    )
}

export default ScreenMap
