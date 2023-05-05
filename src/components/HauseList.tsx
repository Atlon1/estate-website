import React, {useContext} from 'react';

import {HouseContext} from "./HauseContext";
import Haouse from "./Haouse";
import {Link} from "react-router-dom"
import {ImSpinner2} from "react-icons/im"


const HauseList = () => {
    // @ts-ignore
    const {houses , loading } = useContext(HouseContext)

    if (loading){
        return (
            <ImSpinner2 className='mx-auto animate-spin text-violet-700 text-4xl mt-[200px]'/>
        )
    }
    if( houses.length < 1 ){
        return <div className='text-center text-3xl text-gray-400 mt-48'>Sorry, nothing found</div>
    }

    return (
        <section className='mb-20'>
            <div className='container mx-auto'>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14'>
                    {houses.map((house : any, index: number)=> {
                        return (
                            <Link to={`/estate-website/property/${house.id}`} key={index}>
                                <Haouse house={house}/>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </section>
    );
};

export default HauseList;