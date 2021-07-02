require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');

const routes = require('./routes');

const app = express();
const server = http.Server(app);


//URL do cluster no mongoDB
mongoose.connect(`mongodb+srv://${process.env.USER_MONGODB}:${process.env.PASSWORD_MONGODB}@cluster0.r7qnp.mongodb.net/projetoreciclagem?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Conexão com MongoDB realizada com sucesso!");
}).catch((error) => {
    console.log("Conexão com MongoDB não foi realizada com sucesso!");
    console.log("Erro: " + error)
});

app.use(cors())
app.use(express.json());
app.use(routes);


server.listen(3333);


