const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const projectRoutes = require('./routes/projectRoutes');
const contactRoutes = require('./routes/contactRoutes');

const app = express();

let isConnected = false;
const initializeApp = async () => {
    if (!isConnected) {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB Connected Successfully");
        isConnected = true;
    }
};

const dbCheckMiddleware = async (req, res, next) => {
    try {
        await initializeApp();
        next();
    } catch (err) {
        console.error("MongoDB connection error:", err);
        res.status(500).json({ error: "Database connection error", details: err.message });
    }
};

app.use(dbCheckMiddleware);
app.use(express.json());
app.use(cors());

app.use('/api/projects', projectRoutes);
app.use('/api/contact', contactRoutes);

app.get('/', (req, res) => res.send("API is working"));

if (process.env.NODE_ENV !== 'production') {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

module.exports = app;
