let rightSide;

const products = [
    {
        id: 1,
        name: 'Green Recycled Cotton Tee',
        price: 'US$ 29.99',
        imageUrl: 'static/images/top1.jpeg',
        like: false,
        type: 'top',
        imageID: 'cff448bdc1460c09fb3ad45db69be64c_FfOwBsRhae56',
        sustainable: true,
        gender: 'Unisex'
    },
    {
        id: 2,
        name: 'Purple Organic Linen Tee',
        price: 'US$ 19.99',
        imageUrl: 'static/images/top2.jpeg',
        like: false,
        type: 'top',
        imageID: 'cff448bdc1460c09fb3ad45db69be64c_YfkM51ZFfOwB',
        sustainable: true,
        gender: 'Unisex'
    },
    {
        id: 3,
        name: 'Purple Organic Wool Sweater',
        price: 'US$ 49.99',
        imageUrl: 'static/images/top3.jpeg',
        like: false,
        type: 'top',
        imageID: 'cff448bdc1460c09fb3ad45db69be64c_24bIKwmGisUs',
        sustainable: true,
        gender: 'Unisex'
    },
    {
        id: 4,
        name: 'Orange Wool Sweater',
        price: 'US$ 45.99',
        imageUrl: 'static/images/top4.jpeg',
        like: false,
        type: 'top',
        imageID: 'cff448bdc1460c09fb3ad45db69be64c_JWhSgqEz52g6',
        sustainable: false,
        gender: 'Unisex'
    },
    {
        id: 5,
        name: 'Brown Recycled Cotton Tee',
        price: 'US$ 24.99',
        imageUrl: 'static/images/top5.jpeg',
        like: false,
        type: 'top',
        imageID: 'cff448bdc1460c09fb3ad45db69be64c_fOwBsRhae56Y',
        sustainable: true,
        gender: 'Unisex'
    },
    {
        id: 6,
        name: 'Plain White Cotton Tee',
        price: 'US$ 19.99',
        imageUrl: 'static/images/top6.jpeg',
        like: false,
        type: 'top',
        imageID: 'cff448bdc1460c09fb3ad45db69be64c_fkM51ZFfOwBs',
        sustainable: false,
        gender: 'Unisex'
    },
    {
        id: 7,
        name: 'Plain Green Organic Cotton Tee',
        price: 'US$ 24.99',
        imageUrl: 'static/images/top7.jpeg',
        like: false,
        type: 'top',
        imageID: 'cff448bdc1460c09fb3ad45db69be64c_wBsRhae56YuH',
        sustainable: true,
        gender: 'Unisex'
    },
    {
        id: 8,
        name: 'Plain Grey Organic Cotton Tee',
        price: 'US$ 24.99',
        imageUrl: 'static/images/top8.jpeg',
        like: false,
        type: 'top',
        imageID: 'cff448bdc1460c09fb3ad45db69be64c_pBdfdYfkM51Z',
        sustainable: true,
        gender: 'Unisex'
    },
    {
        id: 9,
        name: 'Pink Organic Cotton Tee',
        price: 'US$ 22.99',
        imageUrl: 'static/images/top9.jpeg',
        like: false,
        type: 'top',
        imageID: 'cff448bdc1460c09fb3ad45db69be64c_IPzgNZpBdfdY',
        sustainable: true,
        gender: 'Female'
    },
    {
        id: 10,
        name: 'Relaxed Washed Recycled Denim Jeans',
        price: 'US$ 99.99',
        imageUrl: 'static/images/bottom1.jpeg',
        like: false,
        type: 'bottom',
        imageID: 'cff448bdc1460c09fb3ad45db69be64c_9YIMtCFIPzgN',
        sustainable: true,
        gender: 'Female'
    },
    {
        id: 11,
        name: 'Black Organic Cotton Shorts',
        price: 'US$ 39.99',
        imageUrl: 'static/images/bottom2.jpeg',
        like: false,
        type: 'bottom',
        imageID: 'cff448bdc1460c09fb3ad45db69be64c_1dlwP4ziqysD',
        sustainable: true,
        gender: 'Unisex'
    },
    {
        id: 12,
        name: 'Grey Cotton Sweatpants',
        price: 'US$ 29.99',
        imageUrl: 'static/images/bottom3.jpeg',
        like: false,
        type: 'bottom',
        imageID: 'cff448bdc1460c09fb3ad45db69be64c_gnMTJWhSgqEz',
        sustainable: false,
        gender: 'Unisex'
    }
];

let currentModel = '7940181334d126ce09e5b7bcab453d70';
let currentTop = 'cff448bdc1460c09fb3ad45db69be64c_tCFIPzgNZpBd';
let currentBottom = 'cff448bdc1460c09fb3ad45db69be64c_bVeuOT5C66lr';

async function updateModelImage(newImageUrl) {
    console.log("Update requested");
    const modelImage = document.querySelector('.model-image.w-full.h-auto');
    if (modelImage) {
        modelImage.src = newImageUrl;
    } else {
        console.error('Model image element not found.');
    }
}

async function updateGarmentSelection(type, garmentId) {
    if (type === 'top') {
        if (currentTop === garmentId) {
            currentTop = 'cff448bdc1460c09fb3ad45db69be64c_tCFIPzgNZpBd';
        } else {
            currentTop = garmentId;
        }
    } else if (type === 'bottom') {
        if (currentBottom === garmentId) {
            currentBottom = 'cff448bdc1460c09fb3ad45db69be64c_bVeuOT5C66lr'; // Reset to default or empty
        } else {
            currentBottom = garmentId;
        }
    }

    try {
        const response = await fetch('http://localhost:3000/request-try-on', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                modelId: currentModel,
                topGarmentId: currentTop,
                bottomGarmentId: currentBottom
            })
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        updateModelImage(data.imageUrl);

        // Re-render the products to update the visual indication for selected items
        const productContainer = rightSide.querySelector('.grid');
        productContainer.innerHTML = '';  // Clear existing content
        productContainer.appendChild(renderProducts(products));
    } catch (error) {
        console.error('Error trying on garment:', error);
    }
}


function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';

    if (product.imageID === currentTop || product.imageID === currentBottom) {
        card.classList.add('selected');  // Add 'selected' class to indicate the current selection
    }

    card.innerHTML = `
        <img src="${product.imageUrl}" alt="${product.name}" class="product-image">
        <h3 class="product-name">${product.name}</h3>
        <p class="product-price">${product.price}</p>
        <i class="far fa-heart"></i>
    `;

    if (product.sustainable) {
        const banner = document.createElement('div');
        banner.className = 'sustainable-banner';
        banner.textContent = 'Sustainable';
        card.appendChild(banner);
    }

    card.addEventListener('click', () => {
        console.log('Garment clicked');
        updateGarmentSelection(product.type, product.imageID);
    });
    
    return card;
}




function renderProducts(products) {
    let container = rightSide.querySelector('.grid');
    if (!container) {
        container = document.createElement('div');
        container.className = 'grid';
        rightSide.appendChild(container); // Ensure the grid container is appended to rightSide
    } else {
        container.innerHTML = ''; // Clear existing content if container already exists
    }

    products.forEach(product => {
        const card = createProductCard(product);
        container.appendChild(card);
    });

    return container;
}

async function initializeModelImage() {
    return new Promise(async (resolve, reject) => {
        try {
            console.log('Initializing model image...'); // Debug log
            // Make an HTTP POST request to the Node.js server
            const response = await fetch('http://localhost:3000/request-try-on', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    modelId: currentModel,
                    topGarmentId: currentTop,
                    bottomGarmentId: currentBottom
                })
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            updateModelImage(data.imageUrl).then(() => resolve()); // Resolve the promise after the image update completes
        } catch (error) {
            console.error('Error initializing model image:', error);
            reject(error); // Reject the promise on error
        }
    });
}

document.addEventListener('DOMContentLoaded', async () => {
    // Access existing left and right side elements
    const leftSide = document.getElementById('leftSide');
    rightSide = document.getElementById('rightSide'); // Make sure this is correctly selecting the element

    // Check if rightSide is found
    if (!rightSide) {
        console.error('Right side element not found');
        return; // Stop execution if rightSide is not found
    }

    // Assuming you want to insert the image into the left side
    const modelImage = document.createElement('img');
    modelImage.src = "https://media.revery.ai/generated_model_image/7940181334d126ce09e5b7bcab453d70;cff448bdc1460c09fb3ad45db69be64c_tCFIPzgNZpBd-cff448bdc1460c09fb3ad45db69be64c_bVeuOT5C66lr;17118894365599554.png";
    modelImage.alt = "Model";
    modelImage.className = "model-image w-full h-auto";
    leftSide.appendChild(modelImage);

    // Append the product grid to rightSide
    rightSide.appendChild(renderProducts(products));

    // Initialize the model image
    await initializeModelImage().catch((error) => {
        console.error('Initialization failed:', error);
    });

    const sustainabilityBtn = rightSide.querySelector('.filter-btn[data-filter="sustainability"]');
    const maleBtn = rightSide.querySelector('.filter-btn[data-filter="male"]');
    const femaleBtn = rightSide.querySelector('.filter-btn[data-filter="female"]');
    const resetBtn = rightSide.querySelector('.filter-btn[data-filter="reset"]');

    const buttons = [sustainabilityBtn, maleBtn, femaleBtn, resetBtn];
    
    buttons.forEach(btn => {
        btn.addEventListener('click', function() {
            buttons.forEach(b => b.classList.remove('active'));  // Remove active class from all buttons
            this.classList.add('active');  // Add active class to the clicked button

            // Call filterItems with the appropriate filter
            const filter = this.getAttribute('data-filter');
            filterItems(filter);
        });
    });

    sustainabilityBtn.addEventListener('click', () => filterItems('sustainability'));
    maleBtn.addEventListener('click', () => filterItems('male'));
    femaleBtn.addEventListener('click', () => filterItems('female'));
    resetBtn.addEventListener('click', () => filterItems('reset'));
});

function filterItems(filter) {
    let filteredProducts;

    switch(filter) {
        case 'sustainability':
            filteredProducts = products.filter(product => product.sustainable);
            break;
        case 'male':
        case 'female':
            filteredProducts = products.filter(product => product.gender === filter || product.gender === 'Unisex');
            break;
        case 'reset':
            // For reset, use all products and remove 'active' class from buttons
            filteredProducts = products;
            const buttons = document.querySelectorAll('.filter-btn');
            buttons.forEach(btn => btn.classList.remove('active'));
            break;
        default:
            console.error('Unknown filter:', filter);
            return;
    }

    updateProductDisplay(filteredProducts);
}

function resetFilters() {
    updateProductDisplay(products);
}

function updateProductDisplay(filteredProducts) {
    if (!rightSide) {
        console.error('Right side element not found');
        return;
    }

    const productContainer = rightSide.querySelector('.grid');
    if (!productContainer) {
        console.error('Product container not found');
        return;
    }

    productContainer.innerHTML = '';  // Clear existing content

    filteredProducts.forEach(product => {
        const card = createProductCard(product);
        productContainer.appendChild(card);
    });
}