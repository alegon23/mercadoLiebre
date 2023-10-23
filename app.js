const express = require('express');
const app = express();
const path = require('path');

const PORT = 3001;

//path?
app.use('/static', express.static(__dirname + '/public'));

app.listen(PORT, () => console.log("El servidor está escuchando en el puerto " + PORT));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/home.html');
})