import Product from './Product';
import React, { Fragment } from 'react'

export default function Products({productos, guardaRecargar}) {
    return (
        <Fragment>
            <h1 className='text center'> Productos</h1>
            <ul className='list-group mt-5'>
                {productos.map(unproducto => (
                    <Product key={unproducto.id} producto={unproducto} guardaRecargar={guardaRecargar} />
                ))}
            </ul>
        </Fragment>
    );
}
