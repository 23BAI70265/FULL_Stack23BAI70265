import React from "react";

const UserProfile = ({user}) => {
    console.log(user) ;
    return(
        <p className = 'name'>{user}</p> 
     )
}

export default UserProfile ;