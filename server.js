const express = require('express');
const app = express();

app.use(express.json());

// ✅ FIXED PATH
const studentRoutes = require('./Router/router');
app.use('/api', studentRoutes);

app.listen(3000, () => {
    console.log('🚀 Server running on port 3000');
});
