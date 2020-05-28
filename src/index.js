// esto sirve para configurar express
const express = require('express');
const config = require('./server/config');
//database
require('./database');
//require("./config/mongoose");
//starting server
const app = config(express());


app.listen(app.get("port"), () => {
    console.log("Server on port", app.get("port"));
});