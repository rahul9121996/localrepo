import React, { lazy, Suspense, useState } from 'react'
import LazyLoadingChild from './LazyLoadingChild'
// import LazyLoadingChild from './LazyLoadingChild'
const User=lazy(()=>import('./LazyLoadingChild'));


function LazyLoadingComponent() {
    const[load,setLoad]=useState(false)
  return (
    <div>
        <h1>Lazy Loading</h1>
        
        <button onClick={()=>setLoad(true)}>Load user</button>
        {/* {load? <LazyLoadingChild />: null} */}
        {load? <Suspense fallback={<h2>loading...</h2>}><User/></Suspense>:null }
        
    </div>
  )
}

export default LazyLoadingComponent