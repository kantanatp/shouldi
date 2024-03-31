const products = [
    {
        id: 1,
        name: 'KANE Shirt',
        price: 'US$ 179.00',
        imageUrl: 'link-to-kane-shirt-image',
        like: false
    },
    {
        id: 2,
        name: 'MAX MARA Knit Top',
        price: 'US$ 209.00',
        imageUrl: 'link-to-max-mara-knit-top-image',
        like: false
    },
];

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <img src="${product.imageUrl}" alt="${product.name}" class="product-image">
        <h3 class="product-name">${product.name}</h3>
        <p class="product-price">${product.price}</p>
        <i class="far fa-heart"></i>
    `;
    return card;
}

function renderProducts(products) {
    const container = document.createElement('div');
    container.className = 'grid grid-cols-2 gap-4';

    products.forEach(product => {
        const card = createProductCard(product);
        container.appendChild(card);
    });

    return container;
}

document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');
    const leftSide = document.createElement('div');
    leftSide.className = 'w-1/2';
    leftSide.innerHTML = `
        <img src="link-to-model-image" alt="Model" class="w-full h-auto">
        <button class="change-model-btn">Change model</button>
    `;

    const rightSide = document.createElement('div');
    rightSide.className = 'w-1/2 bg-white p-8';
    rightSide.appendChild(renderProducts(products));

    app.appendChild(leftSide);
    app.appendChild(rightSide);
});

