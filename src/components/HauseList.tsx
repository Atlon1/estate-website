import React, {useContext} from 'react';

import {HouseContext} from "./HauseContext";
import Haouse from "./Haouse";
import {Link} from "react-router-dom"
import {ImSpinner2} from "react-icons/im"


const HauseList = () => {
    // @ts-ignore
    const {houses , loading } = useContext(HouseContext)


    return (
        <section className='mb-20'>
            <div className='container mx-auto'>
                <div>
                    {houses.map((house : any, index: number)=> {
                        return (
                            <Link to={`/property/${house.id}`} key={index}>
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