const productsReducer = (state = {}, action) => {

    switch (action.type) {

        case 'FETCH_PRODUCTS':
            return {
                products: action.payload
            }

        case 'ADD_PRODUCT':
            const newState = { ...state }
            newState.products.push(action.payload)
            console.log('added product!', action.payload)
            return newState


        default:
            return state;

    }
}

export default productsReducer