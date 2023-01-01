import * as React from 'react';
import Map, { Marker } from 'react-map-gl';
import styles from './styles.module.css'
import { useEffect, useState } from 'react';
import { IoMdPin } from 'react-icons/io';
import { useLocation } from '../../context/LocationContext';
import { useStation } from '../../context/StationContext';


function ScreenMap() {
    const { location, setLocation, coordinates, setCoordinates, autoLocate, setAutoLocate, viewState, setViewState } = useLocation();
    const { stations, setStations } = useStation();

    const stationsPrinter = () => {
        return (
            stations.map((el) =>
            <Marker longitude={el.AddressInfo.Longitude} latitude={el.AddressInfo.Latitude} anchor="bottom" >
                <IoMdPin size={35} />
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
            </Map>

        </div>
    )
}

export default ScreenMap
