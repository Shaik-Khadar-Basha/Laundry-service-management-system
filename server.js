// server.js - Khadar Laundry Services Main Application Server
const express = require('express');
const path = require('path');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment configuration
dotenv.config();

// Import API routes
const customerRoutes = require('./routes/customers');
const serviceRoutes = require('./routes/services');
const orderRoutes = require('./routes/orders');
const paymentRoutes = require('./routes/payments');
const dashboardRoutes = require('./routes/dashboard');

// Initialize Express App
const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static frontend assets from 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Mount API Routes
app.use('/api/customers', customerRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/dashboard', dashboardRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({
        status: 'online',
        app: 'Khadar Laundry Services API',
        timestamp: new Date().toISOString()
    });
});

// 404 handler for unknown API routes
app.use('/api/*', (req, res) => {
    res.status(404).json({
        success: false,
        error: `API Route not found: ${req.method} ${req.originalUrl}`
    });
});

// Central error handling middleware
app.use((err, req, res, next) => {
    console.error('Unhandled Server Error:', err);
    res.status(500).json({
        success: false,
        error: 'Internal server error occurred: ' + (err.message || err)
    });
});

// Start Server
app.listen(PORT, () => {
    console.log('====================================================');
    console.log('🧺 KHADAR LAUNDRY SERVICES - MANAGEMENT SYSTEM');
    console.log('====================================================');
    console.log(`🚀 Server is running smoothly at: http://localhost:${PORT}`);
    console.log(`🌐 Home Page:         http://localhost:${PORT}/index.html`);
    console.log(`📊 Admin Dashboard:   http://localhost:${PORT}/dashboard.html`);
    console.log(`👔 Services List:     http://localhost:${PORT}/services.html`);
    console.log(`👥 Customers Portal:  http://localhost:${PORT}/customers.html`);
    console.log(`📦 Orders Portal:     http://localhost:${PORT}/orders.html`);
    console.log(`💳 Payments Portal:   http://localhost:${PORT}/payments.html`);
    console.log('====================================================');
});
