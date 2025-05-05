import React from 'react'
import Functionalpropschild from './Functionalpropschild'

const userFunction=(name)=>{
    alert(name)

}



function Functionalprops() {
  return (
    <div>
        <Functionalpropschild userfunction={userFunction}/>

    </div>
  )
}

export default Functionalprops