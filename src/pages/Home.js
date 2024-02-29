import React from 'react'
import { Outlet, Link } from "react-router-dom";

function Home() {
    return (
    <>
        <h1>Home</h1>
        <Link to="/profile">Profile</Link>
        <Outlet />
      </>
    )
}

export default Home
