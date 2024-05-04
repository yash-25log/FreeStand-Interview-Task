const express = require('express');
const app = express();
const PORT = process.env.PORT || 8001;
const mongoose = require('mongoose');
const dotenv = require('dotenv');


dotenv.config();
app.use(express.json());

mongoose    
    .connect(process.env.DB_URL, {})
    .then(() => console.log("Database connected!"))
    .catch((err) => console.log(err));

app.use('/labour', require('./routes/labour'));

app.listen(PORT, () =>{
    console.log(`Server listening on port ${PORT}`);
});
