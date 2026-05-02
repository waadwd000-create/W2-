// script.js for Scented Candles E-commerce Store

// Sample data for products
const products = [
    {
        id: 1,
        name: 'Lavender Candle',
        price: 12.99,
        image: 'images/lavender_candle.jpg',
        category: 'relaxation'
    },
    {
        id: 2,
        name: 'Vanilla Candle',
        price: 10.99,
        image: 'images/vanilla_candle.jpg',
        category: 'comfort'
    },
    {
        id: 3,
        name: 'Citrus Candle',
        price: 14.99,
        image: 'images/citrus_candle.jpg',
        category: 'refreshing'
    }
];

// Shopping cart
let cart = [];

// Functions
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        saveCart();
        console.log(product.name + ' added to cart.');
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    console.log('Product removed from cart.');
}

function checkout() {
    if(cart.length > 0) {
        console.log('Checkout successful. Thank you for your purchase!');
        cart = [];
        saveCart();
    } else {
        console.log('Your cart is empty. Please add items to the cart.');
    }
}

function saveCart() {
    localStorage.setItem('shoppingCart', JSON.stringify(cart));
}

function loadCart() {
    const storedCart = localStorage.getItem('shoppingCart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
    }
}

function filterProductsByCategory(category) {
    return products.filter(product => product.category === category);
}

// Load cart when page loads
loadCart();
