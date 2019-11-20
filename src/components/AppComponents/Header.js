import { Link } from 'react-router-dom';
import React from 'react'

export default function Header() {
    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
            <div className='containter'>
                <Link to='/productos' className='navbar-brand'>
                    React CRUD
                </Link>

                <ul className='navbar-nav mr-auto'>
                    <li className='nav-item'>
                        <Link to='/productos' className='nav-link'>
                            Productos
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/productos-nuevo' className='nav-link'>
                            Producto Nuevo
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}


