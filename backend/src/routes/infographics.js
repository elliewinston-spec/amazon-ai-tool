const express = require('express');
const router = express.Router();
const NanoBananaService = require('../services/nanoBananaService');

const nanoBanana = new NanoBananaService(process.env.NANO_BANANA_API_KEY);

// Function to generate infographic from product data
async function generateInfographic(productData) {
    try {
        // Create a prompt for Nano Banana based on product data
        const prompt = `Create an Amazon product infographic for: ${productData.title}. 
        Price: $${productData.price}. 
        Description: ${productData.description}. 
        Key features: ${productData.features?.join(', ') || 'N/A'}`;
        
        // Call Nano Banana Pro API
        const result = await nanoBanana.generateImage(prompt);
        
        return {
            id: Math.random().toString(36).substr(2, 9),
            title: productData.title,
            price: productData.price,
            imageUrl: result.imageUrl || null,
            status: 'generated',
            createdAt: new Date(),
            prompt: prompt
        };
    } catch (error) {
        console.error('Error generating infographic:', error);
        throw error;
    }
}

// POST /api/infographics/generate - Generate new infographic
router.post('/generate', async (req, res) => {
    try {
        const productData = req.body;
        
        // Validate required fields
        if (!productData.title || !productData.price || !productData.description) {
            return res.status(400).json({ 
                error: 'Missing required fields: title, price, description' 
            });
        }
        
        const infographic = await generateInfographic(productData);
        res.status(201).json(infographic);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// GET /api/infographics/:id - Get infographic by ID
router.get('/:id', (req, res) => {
    const { id } = req.params;
    // TODO: Fetch from database
    res.status(200).json({ message: `Infographic ${id} retrieved` });
});

// GET /api/infographics - Get all infographics
router.get('/', (req, res) => {
    // TODO: Fetch all from database
    res.status(200).json({ infographics: [] });
});

module.exports = router;