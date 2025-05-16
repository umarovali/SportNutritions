import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Profile from './components/Profile'
import SocialSet from './Pages/SocialSet/SocialSet'
import AboutApp from './Pages/AboutApp/AboutApp'
import HelpDesk from './Pages/HelpDesk/HelpDesk'
import AddresShop from './Pages/AddresShop/AddresShop'

export default function index() {
    return (
        <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/social-set" element={<SocialSet />} />
            <Route path="/about-app" element={<AboutApp />} />
            <Route path="/help-desk" element={<HelpDesk />} />
            <Route path="/address-shop" element={<AddresShop />} />
        </Routes>
    )
}
