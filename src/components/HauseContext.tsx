import React, {useState, useEffect, createContext} from 'react';
import {housesData} from "../data";
import {HouseContextType} from "../@types/context";


export const HouseContext = createContext<HouseContextType | null>(null) as any

const HouseContextProvider = ({children}: any) => {
    const [houses, setHouses] = useState(housesData)
    const [country, setCountry] = useState('Location (any)')
    const [countries, setCountries] = useState([])
    const [property, setProperty] = useState('Property type (any)')
    const [properties, setProperties] = useState([])
    const [price, setPrice] = useState('Price range (any)')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const allCountries = houses.map((house) => {
            return house.country
        })

        // @ts-ignore
        const uniqueCountries = ['Location (any)', ...new Set(allCountries)] as any

        setCountries(uniqueCountries)
    }, [])

    useEffect(() => {
        const allProperties = houses.map((house) => {
            return house.type
        })

        // @ts-ignore
        const uniqueProperties = ['Location (any)', ...new Set(allProperties)] as any

        setProperties(uniqueProperties)
    }, [])

    const handleClick = () => {

        setLoading(true)

        const isDefault = (str: any) => {
            return str.split(' ').includes('(any)')
        }
        const minPrice = parseInt(price.split(' ')[0])
        const maxPrice = parseInt(price.split(' ')[2])

        const newHouses = housesData.filter((house: any) => {
            const housePrcie = parseInt(house.price)

            if (house.country === country &&
                house.type === property &&
                housePrcie >= minPrice &&
                housePrcie <= maxPrice) {
                return house
            }
            if (isDefault(country) && isDefault(property) && isDefault(price)){
                return house
            }
            if (!isDefault(country) && isDefault(property) && isDefault(price)){
                return house.country === country
            }
            if (!isDefault(property) && isDefault(country) && isDefault(price)){
                return house.type === property
            }
            if (!isDefault(price) && isDefault(country) && isDefault(property)){
                if (housePrcie >= minPrice && housePrcie <= maxPrice){
                    return house
                }
            }
            if (!isDefault(country) && !isDefault(property) && isDefault(price)){
                return house.country === country && house.type === property
            }
            if (!isDefault(country) && isDefault(property) && !isDefault(price)){
                if (housePrcie >= minPrice && housePrcie <= maxPrice){
                    return house.country === country
                }
            }
            if(isDefault(country) && !isDefault(property) && !isDefault(price)){
                if (housePrcie >= minPrice && housePrcie <= maxPrice){
                    return house.type === property
                }
            }
        })
        setTimeout (()=>{
            return newHouses.length < 1 ? setHouses([]) : setHouses(newHouses),
            setLoading(false)
        }, 1000)
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
            handleClick,
        }}>
            {children}
        </HouseContext.Provider>
    );
};

export default HouseContextProvider;