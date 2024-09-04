const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors({
    origin: ["https://sweetberry-web.vercel.app", "https://sweetberry-web-diego-lopezs-projects-6f753930.vercel.app"],
    methods: ["POST", "GET"],
    credentials: true
}));
app.use(express.json());

mongoose.set('strictQuery', false); 

// Database connection
const uri = process.env.URI;
console.log(uri);
mongoose.connect(uri)
    .then(() => console.log('Database connected successfully'))
    .catch(err => console.log('Database connection error:', err));

// Define Schema and Model
const flavorSchema = new mongoose.Schema({
    name: String,
    ratings: [Number],
});

const Flavor = mongoose.model('Flavor', flavorSchema);

// Routes
app.get('/', (req, res) => {
    res.send('Sweetberry API');
});

app.get('/flavors', async (req, res) => {
    try {
        const flavors = await Flavor.find();
        res.json(flavors);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch flavors' });
    }
});

app.post('/rate', async (req, res) => {
    try {
        const { flavorId, rating } = req.body;
        const flavor = await Flavor.findById(flavorId);
        if (!flavor) {
            return res.status(404).json({ error: 'Flavor not found' });
        }
        flavor.ratings.push(rating);
        await flavor.save();
        res.json(flavor);
    } catch (err) {
        res.status(500).json({ error: 'Failed to rate flavor' });
    }
});

// Listen on a port defined by the environment or default to 3001
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app;
