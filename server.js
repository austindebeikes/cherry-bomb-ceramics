const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes'); // Import your product routes
const Product = require('./models/Product'); // Import your Product model

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB connected');

        // Sample product data
        const sampleProducts = [
            {
                title: "Ceramic Mug",
                price: 15.99,
                description: "A beautiful hand-crafted ceramic mug.",
                imageUrl: "https://example.com/mug.jpg"
            },
            {
                title: "Decorative Plate",
                price: 25.99,
                description: "A stunning plate for display.",
                imageUrl: "https://example.com/plate.jpg"
            },
            // Add more products as needed
        ];

        // Uncomment to add sample products (run once)
        // Product.insertMany(sampleProducts)
        //     .then(() => console.log('Sample products added'))
        //     .catch(err => console.log(err));
    })
    .catch((err) => console.log(err));

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to Cherry Bomb Ceramics API!');
});

app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
