import * as React from 'react';
import Map from 'react-map-gl';
import styles from './styles.module.css'
import { useEffect, useState } from 'react';
import { useLocation } from '../../context/LocationContext'


function ScreenMap() {
    const { location, setLocation, coordinates, setCoordinates, autoLocate, setAutoLocate, viewState, setViewState } = useLocation();

    return (
        <div className={styles.main}>
            <Map
                {...viewState}
                onMove={evt =>{ 
                    setViewState(evt.viewState)
                }}
                mapboxAccessToken='pk.eyJ1IjoieWVtaXJ2dXJhbCIsImEiOiJjbGNiMnhuems2YW55M3drZXZ6enR4MGU3In0.wLCpRBRzq3zCS7c6-ruBfw'
                style={{ width: '100%', height: '100vh' }}
                mapStyle="mapbox://styles/mapbox/streets-v8"
            />

        </div>
    )
}

export default ScreenMap
