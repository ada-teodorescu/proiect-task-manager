const express = require('express');
const db = require('./config/db')
const cors = require('cors')

const app = express();
const  PORT = 3002;
app.use(cors());
app.use(express.json())

app.get("/", (req,res)=>{
      res.send("Hello!!!");
});

app.get("/user/getWithEmail/:email", (req,res)=>{
    const email = req.params.email;
    console.log(email)
    db.query("SELECT * FROM plf_user WHERE email = ?", email, (err, result) => {
        if(err){
            console.log(err);
            return;
        }
        res.send(result[0]);
    });
});

app.post("/user/create", (req, res) => {
    const email = req.body.email;
    const pass = req.body.pass;
    if(email != ''){
        db.query("INSERT INTO plf_user (email, pass) VALUES(?,?)", [email, pass], (err, result) => {
            if(err){
                console.log(err);
                return;
            }
            res.send({"status":"succes"});
        });
    }
});

app.get("/task/get", (req,res)=>{
    db.query("SELECT plf_task.title, plf_task.stats, plf_task.priority, plf_task.est, plf_task.deadline, plf_user.email FROM plf_task " +
    "INNER JOIN plf_user ON plf_user.id = plf_task.id_owner", (err, result) => {
        if(err){
            console.log(err);
            return;
        }
        res.send(result);
    })
});

app.post("/task/create", (req, res) => {
    const title = req.body.title;
    const stats = req.body.stats;
    const priority = req.body.priority;
    const est = req.body.est;
    const deadline = req.body.deadline;
    const id_owner = req.body.id_owner;
    if(title != ''){
        db.query("INSERT INTO plf_task (title, stats, priority, est, deadline, id_owner) VALUES(?,?,?,?,?,?)",
        [title, stats, priority, est, deadline, id_owner], (err, result) => {
            if(err){
                console.log(err);
                return;
            }
            res.send({"status":"succes"});
        });
    }
});


const server = app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
})

