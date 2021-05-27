import React from 'react'

function Header() {
    return (
        <div className="container">

<nav className="navbar">
                <div className="logo" >
                    <i className="fa fa-bars"/>
                </div>
                <ul className="navlink">
                    <div className="link">
                    <li>Home</li>
                    <li>Product</li>
                    <li>Cart</li>
                    </div>
                </ul>
           
            <div className="search">
                <i className="fa fa-search" />
                <i className="fa fa-address-book"/>
            </div>
            </nav>

    </div>


            
        
    )
}

export default Header
