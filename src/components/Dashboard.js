import React from 'react';
import { Link } from 'react-router-dom'
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';
const Navbar = () => {
    const cartProducts = useSelector(state => state.cart)
    return (
        <nav className="nav-wrapper">
            <div className="container">
                <Link className="brand-logo">Redux Shopping Cart</Link>

                <ul className="right">
                    <li><Link to="/">Products</Link></li>

                    <li><Link to="/cart">cart<Badge bg="success" style={{borderRadius:"50%" ,color:"white"}}>{cartProducts.length}</Badge></Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;