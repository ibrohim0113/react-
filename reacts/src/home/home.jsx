import React from 'react'

const Home = ({ name, children,age }) => {
    return (
        <div>
            <h1>{name}</h1>
            {children}
            <p>{age}</p>
        </div>
    )
}

export default Home
