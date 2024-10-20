import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function github() {
       const data =useLoaderData()
    // const [data, setData]  = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/Rehmat%20Ullah')  
    //     .then(response => response.json())
    //     .then(data =>{
    //         console.log(data);
    //         setData(data)
    //     })
    // }, [] )
  return (
    <div className='text-center m-4 bg-gray-500 text-white text-3xl'  >github followers:  {data?.followers }
    <img className='text-center' src={data?.avator_url} alt="gti pic " width={300} />
    
    
     </div>
  )
}

export default github


export const githubinfoloader = async () =>{
 const  response =  await  fetch('https://api.github.com/users/Rehmat%20Ullah')
 return response.json()
}