import React, { createContext, useContext, useState } from "react";

const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
    const [location, setLocation] = useState('');
    const [coordinates, setCoordinates] = useState({ lon: 31.589813, lat: 40.731647 });
    const [autoLocate, setAutoLocate] = useState(false);
    
    const [viewState, setViewState] = useState({
        longitude: 31.589813,
        latitude:  40.731647,
        zoom: 11.5
    })

    const values = {
        location,
        setLocation,
        coordinates,
        setCoordinates,
        autoLocate,
        setAutoLocate,
        viewState,
        setViewState
    };
    
    return <LocationContext.Provider value={values}>{children}</LocationContext.Provider>;
}


export const useLocation = () => useContext(LocationContext);