import Product from './Product';
import React, { Fragment, Component } from 'react'
import { firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';

class Products extends Component {
    render() {
        const { products } = this.props;
        //console.log(this.props);
        return (
            <Fragment>
                <h1 className='text center'>Productos</h1>
                 <ul className='list-group mt-5'>
                    {products.map(producto => (
                        <Product key={producto.id} producto={producto}/>
                    ))}
                </ul>
            </Fragment>
        )
    }

}

const mapStateToProps = (state) => {
    //console.log(state);
    if(state.firestore.ordered.products)
    {
        return{
            products: state.firestore.ordered.products
        }
    }
    else
    {
        return{
            products: state.product.products
        }
    }
}

export default compose(
    firestoreConnect([
        { collection: 'products' }
    ]),
    connect(mapStateToProps)
)(Products)