import React from 'react'
import ChildComp from './ChildComp'

function ParentComp() {
    const objData= {
        name:'Abhi',
        Age:34
    }
  return (
    <div>
        <h2>In parent comp</h2>
        <ChildComp value= {objData}></ChildComp>
    </div>
  )
}

export default ParentComp