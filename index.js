const express = require("express");
const server = express();
const db = require("./data/dbconfig.js");

server.use(express.json());

//#region cohorts 
server.post("/api/cohorts", (req,res) => {
    db("cohorts").insert(req.body)
        .then(result => res.status(200).json(result))
        .catch(() => res.status(500).json({message: "There was an error in posting your cohort"}))
})

server.get("/api/cohorts/", (req,res) => {
    db("cohorts")
    .then(result => res.status(200).json(result))
    .catch(() => res.status(500).json({message: "There was an error in retrieving your cohorts"}))
})

server.get("/api/cohorts/:id", (req,res) => {
    db("cohorts")
    .where({id: req.params.id})
    .then(result => res.status(200).json(result))
    .catch(() => res.status(500).json({message: `No such cohort with id ${req.params.id} exists`}));
})

server.get("/api/cohorts/:id/students", (req,res) => {
    db("students")
    .where({cohort_id: req.params.id})
    .then(result => res.status(200).json(result))
    .catch(() => res.status(500).json({message: `No such cohort with id ${req.params.id} exists`}));
})

server.put("/api/cohorts/:id", (req,res) => {
    db("cohorts")
    .where({id: req.params.id})
    .update(req.body)
    .then(result => res.status(200).json(result))
    .catch(() => res.status(500).json({message: `There was an error in updating your cohort with ${req.params.id}`}));
})

server.delete("/api/cohorts/:id", (req,res) => {
    db("cohorts")
    .where({id: req.params.id})
    .del()
    .then(result => res.status(200).json(result))
    .catch(() => res.status(500).json({message: `There was an error in deleting your cohort with ${req.params.id}`}));
})

//#endregion

//#region students

server.post("/api/students", (req,res) => {
    db("students").insert(req.body)
        .then(result => res.status(200).json(result))
        .catch(() => res.status(500).json({message: "There was an error in posting your student"}))
})

server.get("/api/students/", (req,res) => {
    db("students")
    .then(result => res.status(200).json(result))
    .catch(() => res.status(500).json({message: "There was an error in retrieving your students"}))
})

server.get("/api/students/:id", (req,res) => {
    db("students")
    .where({id: req.params.id})
    .then(result => res.status(200).json(result))
    .catch(() => res.status(500).json({message: `No such student with id ${req.params.id} exists`}));
})

server.put("/api/students/:id", (req,res) => {
    db("students")
    .where({id: req.params.id})
    .update(req.body)
    .then(result => res.status(200).json(result))
    .catch(() => res.status(500).json({message: `There was an error in updating your student with ${req.params.id}`}));
})

server.delete("/api/students/:id", (req,res) => {
    db("students")
    .where({id: req.params.id})
    .del()
    .then(result => res.status(200).json(result))
    .catch(() => res.status(500).json({message: `There was an error in deleting your student with ${req.params.id}`}));
})




//#endregion  

const port = 5000;

server.listen(port, () =>
  console.log('Server running on http://localhost:5000')
);