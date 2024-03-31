const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const https = require('https');
const pbkdf2 = require('pbkdf2');

const app = express();
app.use(cors());
app.use(bodyParser.json());
const PORT = 3000;

app.post('/request-try-on', async (req, res) => {
    const { modelId, topGarmentId, bottomGarmentId } = req.body;
    try {
        const imageUrl = await requestTryOn({ modelId, topGarmentId, bottomGarmentId });
        res.json({ imageUrl });
    } catch (error) {
        console.error('Error in requestTryOn:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

// Helper function to make an HTTPS POST request
function httpsPost({hostname, path, headers, body}) {
    return new Promise((resolve, reject) => {
        const options = {
            hostname,
            path,
            method: 'POST',
            headers,
        };

        const req = https.request(options, (res) => {
            let responseBody = '';

            res.on('data', (d) => {
                responseBody += d;
            });

            res.on('end', () => {
                resolve(JSON.parse(responseBody));
            });
        });

        req.on('error', (e) => {
            reject(e);
        });

        req.write(body);
        req.end();
    });
}

// Authentication function
function getAuthenticationHeader(json = false) {
    let time = parseInt(Date.now() / 1000);
    let derivedKey = pbkdf2.pbkdf2Sync('663a916f8e20d5733e86caee497863ea', time.toString(), 128, 32, 'sha256'); // private key
    derivedKey = derivedKey.toString('hex');

    const headers = {
        "public_key": "80e3592e14bc363029a86cbf670a2671", // public key
        "one_time_code": derivedKey,
        "timestamp": time.toString(),
    };

    if (json) {
        headers['Content-Type'] = 'application/json';
        headers['Accept'] = 'application/json';
    }

    return headers;
}

// Function to request a try-on with both top and bottom garments
// Sample Input:
// const sample = await requestTryOn({
//     modelId: "<ID>",
//     topGarmentId: "<ID>",
//     bottomGarmentId: "<ID>"
// });
async function requestTryOn({ modelId, topGarmentId = null, bottomGarmentId = null }) {
    console.log("Top Garment:", topGarmentId);
    console.log("Bottom Garment:", bottomGarmentId);
    const data = JSON.stringify({
        "garments": {
            "tops": topGarmentId,
            "bottoms": bottomGarmentId
        },
        "model_id": modelId,
        "shoes_id": null,
        "background": "white"
    });

    const response = await httpsPost({
        hostname: 'api.revery.ai',
        path: '/console/v2/request_tryon',
        headers: getAuthenticationHeader(true),
        body: data
    });

    if (response.success && response.model_metadata && response.model_metadata.model_file) {
        const imageUrl = `https://media.revery.ai/generated_model_image/${response.model_metadata.model_file}.png`;
        console.log("Generated Image URL:", imageUrl);
        return imageUrl;
    } else {
        console.error("Unexpected response structure:", response);
        throw new Error('Failed to process the try-on request. Check the request structure and parameters.');
    }
}