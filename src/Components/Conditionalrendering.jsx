import React, { useState } from 'react'
import Logoutbtn from './Logoutbtn'
import Loginbtn from './Loginbtn'

function Conditionalrendering() {
    const [isLoggedIn] = useState(false)
    // if-else condition
//   if(isLoggedIn){
//     return(
//         <Logoutbtn />
//     )
//   }
//   else{
//     return(
//         <Loginbtn />
//     )
//   }


// ternary condition:-

// ternary condition:- 
// return(
//     <div>
//         {isLoggedIn?<Logoutbtn />:<Loginbtn/>}
//     </div>
// )

// Logical AND(&&):-
if(!isLoggedIn){
    return(
        <Loginbtn />
    )
}

return(
    <div>
        {isLoggedIn && <Logoutbtn />}
    </div>
)
}

export default Conditionalrendering