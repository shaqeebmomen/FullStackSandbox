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

// Middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

// Router
app.use('/api/posts', postRoutes);