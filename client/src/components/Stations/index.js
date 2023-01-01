import React, { useEffect } from 'react'
import { useStation } from '../../context/StationContext'

function Stations() {
    const { stations, setStations } = useStation();
    const { stationsInfo, setStationsInfo } = useStation();

    useEffect(() => {
        fetch(`https://api.openchargemap.io/v3/poi/?output=json&countrycode=TR&maxresults=100&key=${process.env.REACT_APP_STATIONS_API_KEY}`)
            .then((res) => res.json())
            .then((data) => {
                setStations(data)
            })
    }, [])

    return (
        <>

        </>
    )
}

export default Stations