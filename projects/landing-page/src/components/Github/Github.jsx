// import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData()//This is a hook provided by react-router-dom to get the data which is being called through loader attribute in Route component

    //This is also a way in which we can make a call to the github api and get a response.

    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/hiteshchoudhary')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])

    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
            <img src={data.avatar_url} alt="Git picture" width={300} />
        </div>
    )
}

export default Github


//Called in the loader of the Route in main.jsx where route for github is setup
export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/mr-vsr')
    return response.json()//Returning a promise
}