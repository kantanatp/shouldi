const products = [
    {
        id: 1,
        name: 'KANE Shirt',
        price: 'US$ 179.00',
        imageUrl: 'https://arenajerseys.com/wp-content/uploads/2022/06/download-27.jpg',
        like: false,
        type: 'top',
        imageID: '80e3592e14bc363029a86cbf670a2671_lr5v7Xsktf3X'
    },
    {
        id: 2,
        name: 'MAX MARA Knit Top',
        price: 'US$ 209.00',
        imageUrl: 'https://cms.brnstc.de/product_images/680x930_retina/cpro/media/images/product/23/9/100155570519700_0_1695037675486.jpg',
        like: false,
        type: 'top',
        imageID: '80e3592e14bc363029a86cbf670a2671_fu3RaxHn10RS'
    },
];

let currentModel = '7940181334d126ce09e5b7bcab453d70';
let currentTop = '80e3592e14bc363029a86cbf670a2671_fogiy7gSzNkh';
let currentBottom = '80e3592e14bc363029a86cbf670a2671_9YIMtCFIPzgN';

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
            currentTop = '80e3592e14bc363029a86cbf670a2671_fogiy7gSzNkh';
        } else {
            currentTop = garmentId;
        }
    } else if (type === 'bottom') {
        if (currentBottom === garmentId) {
            currentBottom = '80e3592e14bc363029a86cbf670a2671_9YIMtCFIPzgN';
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
    } catch (error) {
        console.error('Error trying on garment:', error);
    }
}


function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <img src="${product.imageUrl}" alt="${product.name}" class="product-image">
        <h3 class="product-name">${product.name}</h3>
        <p class="product-price">${product.price}</p>
        <i class="far fa-heart"></i>
    `;

    card.addEventListener('click', () => {
        updateGarmentSelection(product.type, product.imageID);
    });
    
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
    const app = document.getElementById('app');
    
    // Create and append the left and right side elements immediately
    const leftSide = document.createElement('div');
    leftSide.className = 'w-1/2';
    leftSide.innerHTML = `
        <img src="your-default-model-image-link-here" alt="Model" class="model-image w-full h-auto">
        <button class="change-model-btn">Change model</button>
    `;

    const rightSide = document.createElement('div');
    rightSide.className = 'w-1/2 bg-white p-8';
    rightSide.appendChild(renderProducts(products));

    app.appendChild(leftSide);
    app.appendChild(rightSide);

    // Then call initializeModelImage
    await initializeModelImage().catch((error) => {
        console.error('Initialization failed:', error);
    });
});