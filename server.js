const express = require('express');
const bodyParser = require('body-parser');

const app = express();
//middleware
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
//db
const dbConfig = require('./config/database_config.js');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
    }).then(() => {
        console.log("Connected to the database...");
});

app.get('/', (req, res) => {
    res.json({"message": "Welcome to a my node API..."});
});

//routes
require('./app/routes/product_routes.js')(app);

app.listen(3000, () => {
    console.log("Server is listening on port 3000...");
});
