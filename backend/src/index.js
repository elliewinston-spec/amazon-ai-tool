require('dotenv').config();

const express = require('express');
const cors = require('cors');
const infographicsRoutes = require('./routes/infographics');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect routes
app.use('/infographics', infographicsRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});