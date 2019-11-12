import React from 'react';




const Friend = props => {
console.log (props, "friend prop")

return (
    <div>
       {`${props.friend.name} age: ${props.friend.age} email: ${props.friend.email}`}

    </div>
)

}

export default Friend