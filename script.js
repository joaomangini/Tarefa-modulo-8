let products = [
    {id: 1, name: 'PYTHON 1.0', price: 10.99, image: 'img/product1.jpg'},
    {id: 2, name: 'PYTHON 2.0', price: 20.99, image: 'img/product1.jpg'},
    {id: 3, name: 'PYTHON 3.0', price: 30.99, image: 'img/product1.jpg'},
    {id: 4, name: 'PYTHON 4.0', price: 40.99, image: 'img/product1.jpg'},
    {id: 5, name: 'PYTHON 5.0', price: 50.99, image: 'img/product1.jpg'},
    {id: 6, name: 'PYTHON 6.0', price: 60.99, image: 'img/product1.jpg'},
    {id: 7, name: 'PYTHON 7.0', price: 70.99, image: 'img/product1.jpg'},
    {id: 8, name: 'PYTHON 8.0', price: 80.99, image: 'img/product1.jpg'},
    {id: 9, name: 'PYTHON 9.0', price: 90.99, image: 'img/product1.jpg'},
];

let cart = [];

function renderProducts() {
    let productGrid = document.querySelector('.product-grid');
    productGrid.innerHTML = '';
    products.forEach(product => {
        let productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>R$ ${product.price.toFixed(2)}</p>
            <button>Adicionar ao Carrinho</button>
        `;
        productDiv.querySelector('button').addEventListener('click', () => addToCart(product.id));
        productGrid.appendChild(productDiv);
    });
}

function addToCart(productId) {
    let product = products.find(p => p.id === productId);
    cart.push(product);
    renderCart();
}

function renderCart() {
    let cartTable = document.querySelector('.cart table tbody');
    cartTable.innerHTML = '';
    cart.forEach(product => {
        let cartRow = document.createElement('tr');
        cartRow.innerHTML = `
            <td>${product.name}</td>
            <td>1</td>
            <td>R$ ${product.price.toFixed(2)}</td>
            <td>R$ ${product.price.toFixed(2)}</td>
        `;
        cartTable.appendChild(cartRow);
    });
    updateTotal();
}

function updateTotal() {
    let total = cart.reduce((acc, product) => acc + product.price, 0);
    document.getElementById('total').textContent = `R$ ${total.toFixed(2)}`;
}

document.getElementById('checkout').addEventListener('click', () => {
    if (cart.length === 0) {
        alert('Seu carrinho está vazio!');
    } else {
        alert('Pedido realizado com sucesso!');
        cart = [];
        renderCart();
    }
});

renderProducts();
