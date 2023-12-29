/* const addToDb = (id) => {
    const quantity = localStorage.getItem(id);
    if (quantity) {
        const newQuantity = parseInt(quantity) + 1;
        localStorage.setItem(id, newQuantity);
    } else {
        localStorage.setItem(id, 1)
    }
}

export { addToDb }; */


const addToDb = (id) => {
    let shopingCart;
    //get the shoping cart from local storage
    const storedCart = localStorage.getItem('shoping-cart');
    if (storedCart) {
        shopingCart = JSON.parse(storedCart);
    } else {
        shopingCart = {};
    }
    //add quantity
    const quantity = shopingCart[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        shopingCart[id] = newQuantity;
    } else {
        shopingCart[id] = 1;
    }
    localStorage.setItem('shoping-cart', JSON.stringify(shopingCart));
};

const removeCartItem = id => {
    const storedCart = localStorage.getItem('shoping-cart');
    if (storedCart) {
        const shopingCart = JSON.parse(storedCart);
        if (id in shopingCart) {
            delete shopingCart[id];
            localStorage.setItem('shoping-cart', JSON.stringify(shopingCart));
        }
    }
};

const removeShopingCart = () => {
    localStorage.removeItem('shoping-cart');
};

export { addToDb, removeCartItem, removeShopingCart };

















