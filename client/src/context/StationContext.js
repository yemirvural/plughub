import React, { createContext, useContext, useState } from "react";

const StationContext = createContext();

export const StationProvider = ({ children }) => {
    const [stations, setStations] = useState([]);

    const values = {
        stations,
        setStations
    };
    
    return <StationContext.Provider value={values}>{children}</StationContext.Provider>;
}


export const useStation = () => useContext(StationContext);