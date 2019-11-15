import Swal from 'sweetalert2';

export const fetchProducts = () => async dispatch => {
    const response =
        dispatch({ type: 'FETCH_PRODUCTS', payload: response.data });
};

export const createProduct = (product) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('products').add({
            ...product
        }).then((res) => {
            dispatch({ type: 'CREATE_PRODUCT', product });
            Swal.fire(
                'Producto agregado',
                'Se han guardado los datos!',
                'success'
            )
        }).catch((err) => {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se ha podido guardar el producto!',
            });
        })

    }
}