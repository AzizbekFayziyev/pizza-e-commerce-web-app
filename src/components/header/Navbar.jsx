import React, { useEffect, useRef } from 'react';
import logo from "../../assets/logo.png";
import { FaShoppingCart } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/actions/action';
import data from '../../data/data';
import { menuLinks } from './Links';
import { Link } from 'react-router-dom';
import { FiPhoneCall } from 'react-icons/fi';

export default function Navbar() {
    // Clear search result on click links
    const dispatch = useDispatch();

    const clearResult = () => {
        dispatch(fetchProducts(data));
    }

    // Navbar active
    const menuRef = useRef(null);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 580) {
                menuRef.current.classList.add("active");
            } else {
                menuRef.current.classList.remove("active");
            }
        })
    }, []);
    // cart length
    const cart = useSelector(state => state.cart.cartData);

    return (
        // NAVBAR COMPONENT
        <>
            <nav className='navbar bg-gradient'>
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand d-flex align-items-center">
                        <img className='navbar-logo' src={logo} alt="pizza logo" />
                    </Link>

                    <div className="nav">
                        <a href='tel:1174'><div className='nav-call'><i><FiPhoneCall /></i> <span>1174</span></div> 45 daqiqada tekin yetkazib beramiz yoki pitsa bepul</a>
                    </div>

                    <Link to="/cart" className='shopping-cart'><i className='navbar-cart'><FaShoppingCart /> <sup>{cart.length}</sup></i></Link>
                </div>
            </nav>

            <ul id='menu-scrollpy' ref={menuRef} className='menu d-flex align-items-center bg-gradient nav-pills'>
                <img className='navbar-logo' src={logo} alt="pizza logo" />
                <div className="nav justify-content-center">
                    {menuLinks.map(({ name, link, icon }, id) => (
                        <li
                            key={id}
                            onClick={clearResult}
                            className="nav-item">

                            <a
                                href={link}
                                className="nav-link">
                                <span>{name.toUpperCase()}</span>
                                <i> {icon}</i>
                            </a>


                        </li>
                    ))}
                </div>
                <Link to="/cart" className='shopping-cart'><i className='navbar-cart'><FaShoppingCart /> <sup>{cart.length}</sup></i></Link>
            </ul>
        </>
    )
}
