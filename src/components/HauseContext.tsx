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

    useEffect(() => {
        const allCountries = houses.map((house) => {
            return house.country
        })

        // @ts-ignore
        const uniqueCountries =['Location (any)', ...new Set(allCountries)] as any

        setCountries(uniqueCountries)
    },[])

    useEffect(() => {
        const allProperties = houses.map((house) => {
            return house.type
        })

        // @ts-ignore
        const uniqueProperties =['Location (any)', ...new Set(allProperties)] as any

        setProperties(uniqueProperties)
    },[])

    const handleClick = () => {
        console.log("clicked")
    }

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
            loading,
            handleClick
        }}>
            {children}
        </HouseContext.Provider>
    );
};

export default HouseContextProvider;