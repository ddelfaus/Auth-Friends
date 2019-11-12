import React, {useState} from "react"


const FriendForm = () => {

    const [newFriend, setNewFriend] = useState({

        id: "",
        name: "",
        age: "",
        email: ""
    }) 

    const handleChanges = e => {
        setNewFriend({
            ...newFriend,
            [event.target.name]: event.target.value
        })
    }


return (

    <div>

        i



    </div>


)

}