const express = require("express");
const server = express();
const db = require("./data/dbconfig.js");

server.use(express.json());