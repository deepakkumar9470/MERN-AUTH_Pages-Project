import React from 'react'
import {Outlet,Navigate} from 'react-router-dom'
import { useSelector } from 'react-redux'

const PrivateRoutes = () => {
  const {userInfo} = useSelector((state)=>state.auth)
  return userInfo ? <Outlet/> : <Navigate to="/start" replace/>
}

export default PrivateRoutes