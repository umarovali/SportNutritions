import React from 'react'
import { routes } from '../../../../config/routes'
import { Routes, Route } from "react-router-dom"
export default function RoutePage() {
    const routesConfig = routes();
    return (
        <>
            <Routes>
                {routesConfig.map(route => (
                    <Route key={route.id} path={route.path} element={route.element} />
                ))}
            </Routes>
        </>
    )
}
