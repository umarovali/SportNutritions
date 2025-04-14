import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Profile from './components/Profile'

export default function index() {
    return (
        <Routes>
            <Route path="/" element={<Profile />} />
        </Routes>
    )
}
