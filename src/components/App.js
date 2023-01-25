import React, { useEffect, useState } from 'react'

export default function App() {
    const [dog, setDog] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect( () => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            setDog(data)
            setLoading(true)
        })  
    },[])

    if(!loading) return <p>Loading...</p>
     
  return (

    <div>
        {/* <h1>Random Dog Image</h1> */}
        <img src={dog.message} alt="A Random Dog" />
    </div>
  )
}

