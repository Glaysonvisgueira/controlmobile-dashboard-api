require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser')
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

app.use(cors({
    credentials: true,
    sameSite: true,
    origin: ['http://localhost:3000', `http://${process.env.SERVER_ADRESS}`,'http://controlmobile-dashboard.s3-website-sa-east-1.amazonaws.com/','http://controlmobile-dashboard.s3-website-sa-east-1.amazonaws.com/login']}))
    
app.use(cookieParser())
app.use(express.json());
app.use(routes);


server.listen(3333);


