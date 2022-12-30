import * as React from 'react';
import Map from 'react-map-gl';
import styles from './styles.module.css'

function ScreenMap() {
    return (
        <div className={styles.main}>
            <Map
                mapboxAccessToken='pk.eyJ1IjoieWVtaXJ2dXJhbCIsImEiOiJjbGNiMnhuems2YW55M3drZXZ6enR4MGU3In0.wLCpRBRzq3zCS7c6-ruBfw'
                style={{ width: '100%', height: '100vh' }}
                mapStyle="mapbox://styles/mapbox/streets-v8"
                initialViewState={{
                    longitude: 31.589813,
                    latitude: 40.731647,
                    zoom: 11.5
                }}
            />
        </div>
    )
}

export default ScreenMap