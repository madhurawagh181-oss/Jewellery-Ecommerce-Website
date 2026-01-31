require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/Product');

const products = [
    {
        name: 'Diamond Necklace',
        price: 45000,
        priceStr: '₹45,000',
        description: 'This premium diamond necklace is crafted with precision to elevate your elegance.',
        details: {
            Material: 'Gold',
            Stones: 'Diamonds',
            Weight: '12g',
            Purity: '22k'
        }
    },
    {
        name: 'Gold Pendant Set',
        price: 32500,
        priceStr: '₹32,500',
        description: 'A classic gold pendant set that adds a touch of royalty to any outfit.',
        details: {
            Material: 'Gold',
            Stones: 'None',
            Weight: '8g',
            Purity: '24k'
        }
    },
    {
        name: 'Pearl Earrings',
        price: 18000,
        priceStr: '₹18,000',
        description: 'Elegant pearl earrings suitable for both casual and formal wear.',
        details: {
            Material: 'Silver',
            Stones: 'Pearls',
            Weight: '5g',
            Purity: '92.5'
        }
    },
    {
        name: 'Silver Bracelet',
        price: 6500,
        priceStr: '₹6,500',
        description: 'A stylish silver bracelet with intricate patterns.',
        details: {
            Material: 'Silver',
            Stones: 'Zircon',
            Weight: '15g',
            Purity: '92.5'
        }
    },
];

const seedDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to MongoDB for seeding');

        // Clear existing products to avoid duplicates
        await Product.deleteMany({});
        console.log('Cleared existing products');

        await Product.insertMany(products);
        console.log('Database populated successfully');

        process.exit(0);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

seedDB();
