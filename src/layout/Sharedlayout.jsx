import React from 'react'
import Header from '../component/Sharedcomponent/Header'
import Footer from '../component/Sharedcomponent/Footer'
import { Outlet } from 'react-router-dom'

function Sharedlayout() {
    return (
        <>
            <Header />
            <div style={{ marginTop: '64px' }}>
                <Outlet />
            </div>
            <Footer />
        </>
    )
}

export default Sharedlayout