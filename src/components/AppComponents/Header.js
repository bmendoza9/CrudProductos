import { Link } from 'react-router-dom';
import React from 'react'

export default function Header() {
    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
            <div className='containter'>
                <Link to='/productos' clsnm='navbar-brand'>
                    React CRUD
                </Link>

                <ul className='navbar-nav mr-auto'>
                    <li className='nav-item'>
                        <Link to='/productos' clsnm='nav-link' activeClassName='active'>
                            Productos
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/productos-nuevo' clsnm='nav-link' activeClassName='active'>
                            Producto Nuevo
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}


