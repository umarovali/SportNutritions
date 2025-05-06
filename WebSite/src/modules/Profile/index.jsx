import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Profile from './components/Profile'
import SocialSet from './Pages/SocialSet/SocialSet'

export default function index() {
    return (
        <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/social-set" element={<SocialSet />} />
        </Routes>
    )
}
