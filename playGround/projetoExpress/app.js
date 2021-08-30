const express = require("express");

const app = express();


app.get("/",(req,res)=>res.send("Olá mundo"));
app.get("/contatos",(req,res)=>res.send({nome:"Edgar", idade:31}));



//criando um servidor
app.listen(3000,()=>{
    console.log("servidor rodando");
})