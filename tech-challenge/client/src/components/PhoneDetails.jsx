import React from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './Navbar/Navbar';

function PhoneDetails() {
    const { id } = useParams();
    console.log(id)
    const [onePhone, setOnePhone] = useState('')
const getOnePhone = async(setter) => {
    try {
        const onePhone = await fetch(`http://localhost:5005/phones/${id}`)  
        const onePhoneParsed = await onePhone.json()
        console.log(onePhoneParsed)
        setter(onePhoneParsed)
    }
    catch (error) {
        console.log(error)
    }
}
    useEffect(() => {
        getOnePhone(setOnePhone)
    }, [])


  return (
    <div>
        <Navbar />
        {onePhone && (
            <div>
            <h4>{onePhone.manufacturer}</h4>
            <p>{onePhone.description}</p>
            <p>{onePhone.color}</p>
            <p>{onePhone.price}</p>
            <p>{onePhone.screen}</p>
            <p>{onePhone.processor}</p>
            <p>{onePhone.ram}</p>
            <img src={`../../../../assets/${onePhone.imageFileName}`}/>
            </div>
        )

        }
    </div>
  )
}

export default PhoneDetails