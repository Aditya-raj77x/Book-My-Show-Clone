import React from 'react'
import Navbar from '../component/Navbar/Navbar.component'
import Footer from '../component/Footer'

const DeafultHOC = (Component) =>
    ({ ...props }) => {
        return (
            <div>
                <Navbar />
                <Component {...props} />
                <Footer />
            </div>
        )
    }

export default DeafultHOC