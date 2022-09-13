import React from 'react'
import Navbar from '../component/Navbar/Navbar.component'

const DeafultHOC = (Component) =>
    ({ ...props }) => {
        return (
            <div>
                <Navbar/>
                <Component {...props}/>
                <div>Footer</div>
            </div>
        )
    }

export default DeafultHOC