import Swal from 'sweetalert2';

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
export const deleteProduct = (id) => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('products').doc(id).delete()
            .then(() => {
                dispatch({ type: 'DELETE_PRODUCT' });
                Swal.fire(
                    'Producto eliminado',
                    'Se ha eliminado el producto!',
                    'success'
                )
            }).catch(err => {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'No se ha podido eliminar el producto...',
                });
            })
    }
}

export const getAProduct = (ProductID) => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore()
        firestore.collection('products').doc(ProductID).get().then((doc) => {
            if (doc.exists) {
                const data = doc.data()
                dispatch({ type: 'GET_A_PRODUCT', data })
            } else {
                console.log('No existe dicho producto')
            }

        })
    }
}

export const updateProduct = (updatedProduct, id) => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore()
        firestore.collection('products').doc(id).update({
            ...updatedProduct
        });
    }
}