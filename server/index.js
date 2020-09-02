const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const postRoutes = require('./routes/api/postRoutes');

// use port assigned to hosting environment or 5000 if testing
const port = process.env.PORT || 3000;



// connect to mongodb
const dbURI = 'mongodb+srv://shabeeb:Tw04One>TwiceTheFun@personal.hbvbj.azure.mongodb.net/vue-fullstk?retryWrites=true&w=majority'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => {
        app.listen(port, () => {
            console.log(`Server started on port ${port}`);
        });
    });

// Middleware for all requestes
app.use(express.urlencoded({ extended: true })); // parses form data
app.use(express.json()); // parses json data
app.use(cors());

// API Routes
app.use('/api/posts', postRoutes);

// Handle production routes and front end routes
if (process.env.NODE_ENV === 'production') {
    // Static (built) folder
    app.use(express.static(__dirname + '/public/'));

    // Handling singe page application (the kind of app vue makes)
    app.get(/.*/, (req, res) => {
        res.sendFile(__dirname + '/public/index.html')
    });
}


module.exports = app;
