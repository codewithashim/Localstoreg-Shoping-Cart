const getInputById = id => {
    const inputFild = document.getElementById(id);
    const inputValue = inputFild.value;
    inputFild.value = '';
    return inputValue
}

const addProduct = () => {
    const product = getInputById('productName')
    const productQuantity = getInputById('productQuantity')
    console.log(product, productQuantity);

    displayProduct(product, productQuantity);
    // save to local storage
    saveItemLocalStoreg(product, productQuantity);
}

// save item to local storage
const getShopinCart = () => {
    let saveCart = localStorage.getItem('cart');
    let cart = {};
    if (saveCart) {
        cart = JSON.parse(saveCart);
    }
    return cart;
}
const saveItemLocalStoreg = (product, productQuantity) => {
    const cart = getShopinCart();
    cart[product] = productQuantity;
    const cartStringyfy = JSON.stringify(cart);

    localStorage.setItem(cart, cartStringyfy)
}

// ================ Display Item =================
const displayProduct = (product, productQuantity) => {
    const productContainer = document.getElementById('productContainer');
    const li = document.createElement('li');
    li.innerText = `${product} : ${productQuantity}`;

    productContainer.appendChild(li)
}

const displayStoredProduct = () => {
    const cart = getShopinCart();
    for (const product in cart) {
        const quantity = cart[product];
        displayProduct(product, quantity)
    }
}

displayStoredProduct()