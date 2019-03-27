const express = require("express");
const server = express();
const db = require("./data/dbconfig.js");

server.use(express.json());

server.post("/api/cohorts", (req,res) => {

})

server.get("/api/cohorts/", (req,res) => {
    
})

server.get("/api/cohorts/:id", (req,res) => {
    
})

server.get("/api/cohorts/:id/students", (req,res) => {
    
})

server.put("/api/cohorts/:id", (req,res) => {
    
})

server.delete("/api/cohorts/:id", (req,res) => {
    
})