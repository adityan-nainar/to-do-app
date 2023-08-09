import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"))

app.use(bodyParser.urlencoded({ extended: true }));

let taskListPersonal = [];
let taskListWork = [];

app.get("/", (req, res)=>{
    res.render("index.ejs");
})

app.get("/work", (req, res)=>{
    res.render("work.ejs");
})

app.post("/submit", (req, res)=>{
    taskListPersonal.push(req.body["taskName"])
    res.render("index.ejs", {taskP : taskListPersonal})
    console.log(taskListPersonal);
})

app.post("/work/submit", (req, res)=>{
    taskListWork.push(req.body["taskName"])
    res.render("work.ejs", {taskW : taskListWork})
    console.log(taskListWork);
})

app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`);
})

