
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors({
    origin:["https://sweetberry-web.vercel.app"],
    methods: ["POST", "GET"],
    credentials: true
}));
app.use(express.json());

require('dotenv').config();

const uri = process.env.URI;
mongoose.connect(uri, {serverSelectionTimeoutMS: 100000 })
    .then(() => console.log('Database connected successfully'))
    .catch(err => console.log('Database connection error:', err));

const flavorSchema = new mongoose.Schema({
    name: String,
    ratings: [Number],
});

const Flavor = mongoose.model('Flavor', flavorSchema);

app.get('/flavors', async (req, res) => {
    const flavors = await Flavor.find();
    res.json(flavors);
});

app.post('/rate', async (req, res) => {
    const { flavorId, rating } = req.body;
    const flavor = await Flavor.findById(flavorId);
    flavor.ratings.push(rating);
    await flavor.save();
    res.json(flavor);
});

app.listen(3001, () => {
    console.log('Server running on port 3001');
});
