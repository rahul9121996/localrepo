import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router'

function ApiData1() { 
    const [userData, setUserData] = useState([])
    const [loading, setLoading] = useState(false)

    const Navigate=useNavigate()

    const url = "http://localhost:3000/users";

    useEffect(() => {
        setLoading(true)
        getUserData1()
    }, [])

    async function getUserData1() {
        let response = await fetch(url)
        response = await response.json()
        setUserData(response)
        setLoading(false)
    }

    const deleteUser=async (id)=>{
        let response= await fetch(url+"/"+id,{
            method:'delete'
        })
        response=await response.json();
        if(response){
            alert("record deleted")
            getUserData1()
        }
        

    }
    // function for edit details in api

    const editUser=(id)=>{
        Navigate("/edit/"+id)
    }
    
    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">API DATA</h1>

            {
                !loading ? (
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                            <thead className="bg-blue-500 text-white">
                                <tr>
                                    <th className="py-3 px-6 text-left">Name</th>
                                    <th className="py-3 px-6 text-left">Age</th>
                                    <th className="py-3 px-6 text-left">Email</th>
                                    <th className="py-3 px-6 text-left">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    userData && userData.map((user, index) => {
                                        // console.log(user);
                                        
                                        return(
                                        <tr key={index} className="border-b hover:bg-gray-100">
                                            <td className="py-3 px-6">{user.name}</td>
                                            <td className="py-3 px-6">{user.age}</td>
                                            <td className="py-3 px-6">{user.email}</td>
                                            <td className="py-3 px-6"><button onClick={()=>deleteUser(user.id)}>Delete</button>
                                            <button onClick={()=>editUser(user.id)}>Edit</button>
                                            </td>
                                            
                                        </tr>
                                       
                                        )   
                                    })
                                    
                                }
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <h1 className="text-center text-xl font-medium text-gray-600">Data Loading...</h1>
                )
            }
        </div>
    )
}

export default ApiData1
