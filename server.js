const express = require('express');
const cors = require('cors');

const ruta = require('./routes/rutasUsuario.js');
const app = express();
require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PUERTO || 3000;
const url_local = process.env.URL_LOCAL || 'http://localhost';

app.use('/api', ruta);

app.listen(port, () => {
    console.log(`Estoy ¡¡ VIVO !! en: ${url_local}:${port}`);
});