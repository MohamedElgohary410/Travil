import React from 'react'
import Sharedlayout from './Sharedlayout'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'

function Mainlayout() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Sharedlayout />} >
                    <Route index element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Mainlayout