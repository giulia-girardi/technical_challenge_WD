import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PhoneDetails from '../components/PhoneDetails';

function PhonesListPage() {
    const [phones, setPhones] = useState('')
    const getPhones = async(setter) => {
        try {
            const phonesList = await fetch('http://localhost:5005/phones/')  
            const phonesListParsed = await phonesList.json()
            console.log(phonesListParsed)
            setter(phonesListParsed)
        }
        catch (error) {
            console.log(error)
        }
    }
    
    useEffect(() => {
        getPhones(setPhones)
    }, [])

  return (
    <div>
        <h1>Phone list:</h1>
        {phones ? phones.map((phone) => {
            return (
                <div>
                    <Link to={`/phones/${phone.id}`}> 
                        {<h4>{phone.name}</h4>}
                    </Link>
                </div>
            )
        }) : "Loading"}
    </div>
  )
}

export default PhonesListPage