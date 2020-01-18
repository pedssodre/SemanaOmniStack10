const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');

const routes = require('./routes');
const { setupWebSockets } = require('./websocket');

const app = express();
const server = http.Server(app);

setupWebSockets(server); 

mongoose.connect('mongodb+srv://pedro:omnistack10@cluster0-k3etr.mongodb.net/week10?retryWrites=true&w=majority', { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
});

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);