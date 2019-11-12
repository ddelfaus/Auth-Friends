import React, {useState, useEffect} from 'react';
import axios from 'axios'
import { axiosWithAuth } from '../Utils/axiosWithAuth';


const Friends = (props) => {
    const[friends,setFriends] = useState ([])
    


    useEffect(() => {
        axiosWithAuth()
        .get(`http://localhost:5000//api/friends`)
        .then(res => {
            console.log("friends" ,res.data)
            setFriends(res => {
            
            })
        })
    }, )

    return (
        <div>

        </div>
    )

}


export default Friends