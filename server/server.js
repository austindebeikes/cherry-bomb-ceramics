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

        const sampleProducts = [
            {
                title: "White Ceramic Teapot",
                price: 25.99,
                description: "A beautifully crafted white ceramic teapot perfect for any tea lover.",
                imageUrl: "https://images.pexels.com/photos/3094018/pexels-photo-3094018.jpeg" // Use direct image link
            },
            {
                title: "Teacup with Saucer",
                price: 15.99,
                description: "A charming teacup with a matching saucer, perfect for afternoon tea.",
                imageUrl: "https://images.pexels.com/photos/241886/pexels-photo-241886.jpeg" // Use direct image link
            },
            {
                title: "Clay Vases",
                price: 35.99,
                description: "A set of beautifully handcrafted clay vases for home decor.",
                imageUrl: "https://images.pexels.com/photos/3692053/pexels-photo-3692053.jpeg" // Use direct image link
            },
            {
                title: "Assorted Ceramic Coffee Mugs",
                price: 19.99,
                description: "A collection of assorted ceramic coffee mugs with beautiful designs.",
                imageUrl: "https://images.pexels.com/photos/2417857/pexels-photo-2417857.jpeg" // Use direct image link
            },
            {
                title: "Floral Ceramic Tea Set",
                price: 49.99,
                description: "A full ceramic tea set with floral designs, perfect for entertaining guests.",
                imageUrl: "https://images.pexels.com/photos/2133982/pexels-photo-2133982.jpeg" // Use direct image link
            }
        ];
        


        // Uncomment to add sample products (run once)
        Product.insertMany(sampleProducts)
            .then(() => console.log('Sample products added'))
            .catch(err => console.log(err));
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
