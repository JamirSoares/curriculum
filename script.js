const http = require("http");
const express = require("express");
const app = new express();
var path    = require("path");

app.get('/', function(request, response){
    response.sendFile(path.join(__dirname+'/index.html'));
});

http.createServer(app).listen(3000, () => console.log("Servidor rodando local na porta 3000"));