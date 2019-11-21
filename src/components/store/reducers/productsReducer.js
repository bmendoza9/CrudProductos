const initState = {
  products: [
    {
      "id": 1,
      "name": "ASUS VG248QE 24 Full HD 1920x1080 144Hz 1ms HDMI Gaming Monitor",
      "brand": "ASUS",
      "description": "Ultra smooth action with 144 Hertz rapid refresh rate and 1ms (GTG) response time. Display Colors 16.7M. Color Temperature Selection 4 Modes ",
      "price": "259 USD",
      "imgUrl": "https://images-na.ssl-images-amazon.com/images/I/81zs8zJ4MrL._AC_SL1500_.jpg"
    },
    {
      "id": 2,
      "name": "ivanky DisplayPort Cable 6.6ft",
      "brand": "ivanky",
      "description": "【None-flickering Gaming Experience】6.6ft DisplayPort Cable is good for video streaming or gaming. 2K@165Hz refresh rate reduces flicker to give you a really comfortable gaming experience and it also supports DP, DP++, and DisplayPort++. ",
      "price": "10.99 USD",
      "imgUrl": "https://images-na.ssl-images-amazon.com/images/I/81t4U%2B5OJ6L._AC_SL1500_.jpg"
    },
    {
      "id": 3,
      "name": "AMD Ryzen 7 2700X Processor",
      "brand": "AMD",
      "description": "8 Cores/16 Threads UNLOCKED ",
      "price": "194.99 USD",
      "imgUrl": "https://images-na.ssl-images-amazon.com/images/I/61IhCqrcjcL._AC_SL1500_.jpg"
    },
    {
      "id": 4,
      "name": "Samsung 970 EVO 500GB",
      "brand": "Samsung",
      "description": "Read speeds up to 3,500MB/s with a 5 year limited warranty and exceptional endurance up to 1,200 TBW ( May vary by capacity) ",
      "price": "89.99 USD",
      "imgUrl": "https://images-na.ssl-images-amazon.com/images/I/81ABwgAl-gL._AC_SL1500_.jpg"
    },
    {
      "id": 5,
      "name": "MSI MPG X570 Gaming Edge WiFi Motherboard",
      "brand": "MSI",
      "description": "Supports 2nd and 3rd Gen AMD Ryzen / Ryzen with Radeon Vega Graphics Desktop Processors for AM4 socket ",
      "price": "209.99",
      "imgUrl": "https://images-na.ssl-images-amazon.com/images/I/61XnW2YbRoL._AC_SL1024_.jpg"
    },
    {
      "id": 6,
      "name": "Creative 70GH032000000 Sound Blaster Blaze Gaming Headset with Detachable Noise-Cancelling Mic and in-line Remote ",
      "brand": "Creative",
      "description": "Precision tuned 40mm Full Spectrum drivers for powerful, fully immersive gaming audio ",
      "price": "24.95",
      "imgUrl": "https://images-na.ssl-images-amazon.com/images/I/81sUNAkMlZL._AC_SL1500_.jpg"
    },
    {
      "id": 7,
      "name": "AeroCool Cylon RGB Mid Tower with Acrylic Side Window, Black ",
      "brand": "AeroCool",
      "description": "Full Acrylic Side Window RGB ready Mid Tower case. Elegant backslash LED with 13 lighting modes on front panel. 6 RGB flow lighting modes. 7 solid color modes. ",
      "price": "49.99 USD",
      "imgUrl": "https://images-na.ssl-images-amazon.com/images/I/815K5CmF9OL._AC_SL1500_.jpg"
    },
    {
      "id": 8,
      "name": "Cooler Master MasterBox Pro 5 RGB ",
      "brand": "Cooler Master",
      "description": "Flexible mounting:  easily mount and rearrange SSDs across the motherboard tray and on the back with the SSD bracket ",
      "price": "79.99 USD",
      "imgUrl": "https://images-na.ssl-images-amazon.com/images/I/61h%2B4-pksEL._AC_SL1000_.jpg"
    },
    {
      "id": 9,
      "name": "Cooler Master MasterBox Pro 5 RGB ",
      "brand": "Cooler Master",
      "description": "Flexible mounting:  easily mount and rearrange SSDs across the motherboard tray and on the back with the SSD bracket ",
      "price": "79.99 USD",
      "imgUrl": "https://images-na.ssl-images-amazon.com/images/I/61h%2B4-pksEL._AC_SL1000_.jpg"
    },
    {
      "id": 10,
      "name": " Eliminar 10",
      "brand": "Cooler Master",
      "description": "Flexible mounting:  easily mount and rearrange SSDs across the motherboard tray and on the back with the SSD bracket ",
      "price": "79.99 USD",
      "imgUrl": "https://images-na.ssl-images-amazon.com/images/I/61h%2B4-pksEL._AC_SL1000_.jpg"
    }
  ]
}

const productsReducer = (state = initState, action) => {

  switch (action.type) {
    case 'ADD_PRODUCT':
      const newState = { ...state }
      newState.products.push(action.product)
      console.log('added product!', action.product)
      return newState;
    case 'DELETE_PRODUCT':
      return state;
    default:
      return state;

  }
}

export default productsReducer
