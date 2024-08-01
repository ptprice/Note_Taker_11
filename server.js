const express = require('express');
const routes = require('./routes');
const apiRoutes = require('./apiRoutes');
const app = express();
const PORT = process.env.PORT || 3001;
// Set up body parsing, static, and route middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', routes);
app.listen(PORT, () => { console.log(`Server listening on http://localhost:${PORT}`); });