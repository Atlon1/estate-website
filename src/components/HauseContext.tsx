import React, {useState, useEffect, createContext} from 'react';
import {housesData} from "../data";
import {HouseContextType} from "../@types/context";


export const HouseContext = createContext<HouseContextType | null> (null) as any

const HouseContextProvider = ({children} : any) => {
    const [houses, setHouses] = useState(housesData)
    const [country, setCountry] = useState('Location (any)')
    const [countries, setCountries] = useState([])
    const [property, setProperty] = useState('Property type (any)')
    const [properties, setProperties] = useState([])
    const [price, setPrice] = useState('Price range (any)')
    const [loading, setLoadinf] = useState(false)


    return (
        <HouseContext.Provider value={{
            country,
            setCountry,
            countries,
            property,
            setProperty,
            properties,
            price,
            setPrice,
            houses,
            loading
        }}>
            {children}
        </HouseContext.Provider>
    );
};

export default HouseContextProvider;