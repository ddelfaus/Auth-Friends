import React, {useState, useEffect} from 'react';
import axios from 'axios'
import { axiosWithAuth } from '../Utils/axiosWithAuth';

import Friend from './Friend'

const Friends = (props) => {
    const [newFriend, setNewFriend] = useState({

        id: "",
        name: "",
        age: "",
        email: ""
    }) 

    const[friends,setFriends] = useState ([])
    
   

    useEffect(() => {
        axiosWithAuth()
        .get(`/friends`)
        .then(res => {
            console.log("friends" ,res.data)
            setFriends(res.data)
        })
        .catch(err => console.log(err.response));
    }, [])
       
    const handleChanges = event =>{
        setNewFriend({
            ...newFriend,
            [event.target.name]: event.target.value
        })
    
       }
       const handleAddFriend = e => {
           e.preventDefault();
           axiosWithAuth()
           .post("/friends", newFriend)
           .then(res => {
               console.log(res,"post request")
               setFriends(res.data)
           })
           .catch(err => console.log(err.response));
       }
    return (
        <div>
           {friends.map(item => (
            <Friend key ={item.id} friend ={item} />
           ))}

            <form onSubmit ={handleAddFriend}>
                <input 
                    type ="text"
                    name="name"
                    value ={newFriend.name}
                    onChange ={handleChanges}
                    placeholder= "name"
                
                />
                <input 
                    type ="number"
                    name= "age"
                    value = {newFriend.age}
                    onChange= {handleChanges}
                    placeholder= "age"
                
                />
                    <input 
                    type ="text"
                    name= "email"
                    value = {newFriend.email}
                    onChange= {handleChanges}
                    placeholder= "emai"
                
                />

            <button >submit</button>

            </form>
        </div>
    )

}


export default Friends