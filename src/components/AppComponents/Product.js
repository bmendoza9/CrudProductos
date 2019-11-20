import React from "react";
import { Link } from "react-router-dom";
//import Swal from "sweetalert2";
import { deleteProduct, getAProduct } from '../store/actions/productsActions';
import { connect } from 'react-redux'
import { firestoreConnect } from "react-redux-firebase";
import { compose } from 'redux'


function Product(props) {

  const { getAProduct, deleteProduct } = props;
  //console.log(props);
  const handleDelete = (id) => {
    deleteProduct(id);
    //console.log(id);
}
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <p>
        {props.producto.name}
        <span className="font-weight-bold"> {props.producto.price} </span>
      </p>
      <div>
        <Link to={`/productos/editar/${props.producto.id}`}>
          <button type="button" className="btn btn-success mr-2">
            Editar
          </button>
        </Link>

        <button
          type="button"
          className="btn btn-danger"
          onClick={ () => handleDelete(props.producto.id) }
        >
          Eliminar
        </button>
      </div>
    </li>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteProduct: (id) => { dispatch(deleteProduct(id)) },
    getAProduct: (id) => {dispatch(getAProduct(id))}
  }
}

export default compose(
  connect(null, mapDispatchToProps),
  firestoreConnect([
    { collection: 'products' }
  ])
)(Product)