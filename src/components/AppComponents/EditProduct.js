import React, { Component } from "react";
import {connect} from 'react-redux';
//import Swal from "sweetalert2";
import { getAProduct, updateProduct } from '../store/actions/productsActions';

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

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.updateProduct(this.state, this.props.match.params.id);
    this.props.history.push('/productos');
  }
  componentDidMount(){
    let {id} = this.props.match.params
    this.props.getAProduct(id)
   }
   componentDidUpdate(prevProps) {
    if (this.props.getAProductData !== prevProps.getAProductData) {
      const product = this.props.getAProductData.data;
      this.setState(product);

    }
  }

  render() {
    return (
      <div className="col-md-8 mx-auto ">
        <h1 className="text-center">Editar Producto</h1>
        <form className="mt-5" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Nombre Producto</label>
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Nombre Prodcuto"
              value={this.state.name}
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
              value={this.state.brand}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Descripcion Producto</label>
            <input
              type="text"
              className="form-control"
              name="description"
              placeholder="Descripcion del producto"
              value={this.state.description}
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
              value={this.state.price}
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
              value={this.state.imgUrl}
              onChange={this.handleChange}
            />
          </div>

          <input
            type="submit"
            className="font-weight-bold text-uppercase mt-5 btn btn-primary btn-block py-3"
            value="Update Product"
          />
        </form>
      </div>
    );
  }

};
const mapDispatchToProps = (dispatch) => {
  return {
    getAProduct: (id) => {dispatch(getAProduct(id))},
    updateProduct: (updatedProduct, id) => {dispatch(updateProduct(updatedProduct, id))}
  }
}
const mapStateToProps = (state) => {
  return {
    getAProductData: state.getProduct
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddProduct)
