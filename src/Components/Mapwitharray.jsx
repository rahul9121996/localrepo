import React from 'react'

function Mapwitharray() {
    const userData=[
        {name:"rahul",age:28,email:"rahul95@test.com",id:1},  
        {name:"shyam",age:31,email:"shyam95@test.com",id:2},
        {name:"rohan",age:26,email:"rohan95@test.com",id:3},
        {name:"peter",age:50,email:"peter95@test.com",id:4},
    ]
  return (
    <div>
        <h1>map data by usning map method</h1>
        <table class="table-auto border border-gray-400 border-collapse w-full">
            <thead>
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Age</td>
                    <td>Email</td>
                </tr>
            </thead>

            {userData.map((user,index)=>(
                <tbody>
                <tr key={index}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.age}</td>
                    <td>{user.email}</td>
                </tr>
            </tbody>

            ))}

            

            
        </table>


        <h1>dummy data</h1>
        <table class="table-auto border border-gray-400 border-collapse w-full">
            <thead>
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>age</td>
                    <td>Email</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>rahul</td>
                    <td>28</td>
                    <td>rahul95@test.com</td>  
                </tr>
                <tr>
                    <td>2</td>
                    <td>shyam</td>
                    <td>31</td>
                    <td>shyam95@test.com</td>  
                </tr>
                <tr>
                    <td>3</td>
                    <td>rohan</td>
                    <td>26</td>
                    <td>rohan95@test.com</td>  
                </tr>
                <tr>
                    <td>4</td>
                    <td>peter</td>
                    <td>50</td>
                    <td>peter95@test.com</td>  
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Mapwitharray