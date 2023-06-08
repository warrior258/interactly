const express = require('express');
const app = express();
const PORT = process.env.PORT || 5001;
const cors = require('cors');

//db
const { pool, pool1 } = require('./db/config');

//routes
const Contact = require('./routes/Contact');


app.use(cors());
app.use(express.json());

//routes
app.use('/api/v1/', Contact);


app.get('/', (req, res) => {
    res.send('Active!');    
});



app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});