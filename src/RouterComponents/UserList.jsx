import React from 'react'
import { Link } from 'react-router'

function UserList() {
    const userList=[
        {id:1, name:"rahul"},
        {id:2,name:"peter"},
        {id:3,name:"sam"},
        {id:4,name:"ani"},
        {id:5,name:"abhishek"},
        {id:6,name:"raj"},
    ]
  return (
    <div>
        <h1>User List page</h1>
        {
            userList.map((item)=>(
                <div>
                    <h4><Link to={"/users/"+item.id}>{item.name}</Link></h4>
                    
                </div>

            ))

            
                
                
            
        }
        <hr />

{
    // used for optionsl dynamic segment
            userList.map((item)=>(
                <div>
                    <h4><Link to={"/users/"+item.id+"/"+item.name}>{item.name}</Link></h4>
                    
                </div>

            ))

            
                
                
            
        }


    </div>
  )
}

export default UserList