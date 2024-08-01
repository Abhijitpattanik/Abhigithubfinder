import React, { useState } from 'react'

function ChildComp({value}) {
    const[userdetails, setuserdetails] = useState('Abhi Pattanaik');
    const updateUserDetails = (e) => {
        setuserdetails( e.target.value)
        console.log(userdetails)
    }
  return (
    <div>
        <h2>In child  comp</h2>
        <p> Name received from parent component: {value.name}</p>
        <p> Age received from parent component: {value.Age}</p>
        <input type='text' onChange={updateUserDetails} value = {userdetails} />
    </div>
  )
}

export default ChildComp