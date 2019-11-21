const getProduct = (state = {}, action) => {
    const { data } = action
  
    switch (action.type) {
      case 'GET_PRODUCT':
        return {
          ...state,
          data
        }
      default:
        return state;
    }
  }
  export default getProduct