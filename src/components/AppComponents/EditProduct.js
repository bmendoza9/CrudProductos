import React, { useState, useRef } from "react";
import Swal from "sweetalert2";
import { withRouter } from "react-router-dom";

const EditProduct = ({ product }) => {


  return (
    <div className="col-md-8 mx-auto ">
      <h1 className="text-center">Editar Producto</h1>

      <form className="mt-5">
        <div className="form-group">
          <label>ID Producto</label>
          <input
            type="number"
            className="form-control"
            name="id"
            placeholder="ID Prodcuto"
          />
        </div>
        <div className="form-group">
          <label>Nombre Producto</label>
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="Nombre Prodcuto"
          />
        </div>
        <div className="form-group">
          <label>Marca Producto</label>
          <input
            type="text"
            className="form-control"
            name="brand"
            placeholder="Marca de Prodcuto"
          />
        </div>
        <div className="form-group">
          <label>Descripcion Producto</label>
          <input
            type="text"
            className="form-control"
            name="description"
            placeholder="Descripcion Prodcuto"
          />
        </div>
        <div className="form-group">
          <label>Precio Producto</label>
          <input
            type="number"
            className="form-control"
            name="price"
            placeholder="Precio Prodcuto"
          />
        </div>
        <div className="form-group">
          <label>URL de imagen del Producto</label>
          <input
            type="text"
            className="form-control"
            name="description"
            placeholder="URL de imagen de producto"
          />
        </div>

        <input
          type="submit"
          className="font-weight-bold text-uppercase mt-5 btn btn-primary btn-block py-3"
          value="EditProduct"
        />
      </form>
    </div>
  );
};

export default withRouter(EditProduct);
