import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function Product({ producto}) {

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <p>
        {producto.name}
        <span className="font-weight-bold"> {producto.price} </span>
      </p>
      <div>
        <Link to={`/productos/editar/${producto.id}`}>
          <button type="button" className="btn btn-success mr-2">
            Editar
          </button>
        </Link>

        <button
          type="button"
          className="btn btn-danger"
        >
          Eliminar
        </button>
      </div>
    </li>
  );
}
