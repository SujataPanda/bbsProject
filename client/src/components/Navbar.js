import React from 'react'
import {Link} from "react-router-dom"

function Navbar() {
    return (
        <div>
            <nav>
                <div className="nav-wrapper" style={{background:"#6200ee"}}>
                    {/* <a href="f#" className="brand-logo">songs</a> */}
                    <ul id="nav-mobile" className="right">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/add">Add</Link></li>
                        <li><Link to="/views">Views</Link></li>
                        <li><Link to="/transfer">Transfer</Link></li>
                        <li><Link to="/transactions">Transactions</Link></li>

                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
