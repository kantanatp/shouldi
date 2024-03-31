const products = [
    {
        id: 'top1',
        name: 'Green Recycled Cotton Tee',
        description: 'A comfortable and stylish tee made from 100% recycled cotton',
        price: 'US$ 29.99',
        image_path: 'static/images/top1.jpeg',
        sustainable: true,
        type: 'top',
    },
    {
        id: 'top2',
        name: 'Purple Organic Linen Tee',
        description: 'Purple tee made from 100% organic linen',
        price: 'US$ 19.99',
        image_path: 'static/images/top2.jpeg',
        sustainable: true,
        type: 'top',
    },
    {
        id: 'top3',
        name: 'Purple Organic Wool Sweater',
        description: 'Stylish and comfy purple sweater made from pure organic wool',
        price: 'US$ 49.99',
        image_path: 'static/images/top3.jpeg',
        sustainable: true,
        type: 'top',
    },
    {
        id: 'top4',
        name: 'Orange Wool Sweater',
        description: 'Orange Wool Sweater',
        price: 'US$ 45.99',
        image_path: 'static/images/top4.jpeg',
        sustainable: false,
        type: 'top',
    },
    {
        id: 'top5',
        name: 'Brown Recycled Cotton Tee',
        description: '100% Organic Cotton',
        price: 'US$ 24.99',
        image_path: 'static/images/top5.jpeg',
        sustainable: true,
        type: 'top',
    },
    {
        id: 'top6',
        name: 'Plain White Cotton Tee',
        description: '100% Organic Cotton',
        price: 'US$ 19.99',
        image_path: 'static/images/top6.jpeg',
        sustainable: false,
        type: 'top',
    },
    {
        id: 'top7',
        name: 'Plain Green Organic Cotton Tee',
        description: '100% Organic Cotton',
        price: 'US$ 24.99',
        image_path: 'static/images/top7.jpeg',
        sustainable: true,
        type: 'top',
    },
    {
        id: 'top8',
        name: 'Plain Grey Organic Cotton Tee',
        description: 'Plain Grey Organic Cotton Tee',
        price: 'US$ 24.99',
        image_path: 'static/images/top8.jpeg',
        sustainable: true,
        type: 'top',
    },
    {
        id: 'top9',
        name: 'Pink Organic Cotton Tee',
        description: '100% Organic Cotton',
        price: 'US$ 22.99',
        image_path: 'static/images/top9.jpeg',
        sustainable: true,
        type: 'top',
    },
    {
        id: 'bottom1',
        name: 'Relaxed Washed Recycled Denim Jeans',
        description: 'Sustainably sourced organic and recycled denim',
        price: 'US$ 99.99',
        image_path: 'static/images/bottom1.jpeg',
        sustainable: true,
        type: 'bottom',
    },
    {
        id: 'bottom2',
        name: 'Black Organic Cotton Shorts',
        description: '100% Organic Cotton',
        price: 'US$ 39.99',
        image_path: 'static/images/bottom2.jpeg',
        sustainable: true,
        type: 'bottom',
    },
    {
        id: 'bottom3',
        name: 'Black Organic Cotton Shorts',
        description: '100% Organic Cotton',
        price: 'US$ 39.99',
        image_path: 'static/images/bottom3.jpeg',
        sustainable: true,
        type: 'bottom',
    },
];

document.addEventListener('DOMContentLoaded', function () {
    const productId = localStorage.getItem('selectedProductId');
    const product = products.find(p => p.id === productId);
    if (product) {
        document.getElementById('productImage').src = product.image_path;
        document.getElementById('productName').textContent = product.name;
        document.getElementById('productPrice').textContent = product.price;
        
        // Assuming product.description is a string with all details
        document.getElementById('productDetails').innerHTML = `
            <h3 class="text-xl font-semibold mb-2">Details</h3>
            <p>Color: ${product.color || 'Multiple'}</p>
            <p>Material: ${product.material || 'Cotton'}</p>
            <ul>
                ${product.description.split('.').map(line => line ? `<li>${line.trim()}</li>` : '').join('')}
            </ul>
        `;
    } else {
        // Handle the case where the product is not found
        console.error('Product not found');
    }
});
