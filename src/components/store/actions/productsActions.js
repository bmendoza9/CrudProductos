export const fetchProducts = () => async dispatch =>{
    //Makes call to API
    const response = 
    //Dispatch type FETCH to reducer, sending the data recieved as a payload
    dispatch({ type: 'FETCH_PRODUCTS', payload: response.data});
};