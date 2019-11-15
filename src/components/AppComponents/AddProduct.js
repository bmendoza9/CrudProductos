import React, { Component } from "react";
import { connect } from 'react-redux';
import Swal from 'sweetalert2';
import { createProduct } from '../store/actions/productsActions';

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      brand: '',
      description: '',
      price: '',
      imgUrl: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createProduct(this.state);
  }

  render() {
    return (
      <div className="col-md-8 mx-auto ">
        <h1 className="text-center">Agregar Nuevo Producto</h1>

        <form className="mt-5" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Nombre Producto</label>
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Nombre Prodcuto"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Marca Producto</label>
            <input
              type="text"
              className="form-control"
              name="brand"
              placeholder="Marca de Prodcuto"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Descripcion Producto</label>
            <input
              type="text"
              className="form-control"
              name="description"
              placeholder="Descripcion Prodcuto"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Precio Producto</label>
            <input
              type="number"
              className="form-control"
              name="price"
              placeholder="Precio Prodcuto"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>URL de imagen del Producto</label>
            <input
              type="text"
              className="form-control"
              name="imgUrl"
              placeholder="URL de imagen de producto"
              onChange={this.handleChange}
            />
          </div>

          <input
            type="submit"
            className="font-weight-bold text-uppercase mt-5 btn btn-primary btn-block py-3"
            value="Add Product"
          />
        </form>
      </div>
    );
  }

};
const mapDispatchToProps = (dispatch) => {
  return {
    createProduct: (product) => dispatch(createProduct(product))
  }
}

export default connect(null, mapDispatchToProps)(AddProduct)
