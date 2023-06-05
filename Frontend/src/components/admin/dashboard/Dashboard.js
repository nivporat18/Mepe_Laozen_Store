import React from 'react'
import "./Dashboard.css"
import { NavLink, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Dashboard() {
  const auth = useSelector((state)=>state.auth)

  if(!auth.isAdmin) return <p>Access denied.</p>


  return (
    <div className='styleDashboard'>
        <div className='sideNav'>
                <h3>Quick Links</h3>
                <NavLink to="/admin/summary">Summary</NavLink>
                <NavLink to="/admin/products">Products</NavLink>
        </div>
        <div className='content'>
            <Outlet></Outlet>
        </div>
    </div>
  )
}

export default Dashboard


