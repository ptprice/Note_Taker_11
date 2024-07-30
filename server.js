const express = require('express');
const app = express();
const PORT = 3001;
const htmlRoutes = require('./routes');
const apiRoutes = require('./apiRoutes');
// Set up body parsing, static, and route middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/', htmlRoutes);
app.use('/api', apiRoutes);
app.listen(PORT, () => {console.log(`Server listening on http://localhost:${PORT}`);});