const express=  require("express");
const app = express();
const port = 4000;
const path = require("path");
app.use(express.urlencoded({encoded : true}));
// important instruction....->
// to start the server from the parent dir itself we need to establish the connection/path betweeen the parent dir and the child dir....
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
const posts=[
    {
        id:"1a",
        username:"bob",
        content:"hey there bob is here.."
    },
    {
        id:"2b",
        username:"stephen",
        content:"hey there today is my first job day"
    },
    {
        id:"3c",
        username:"rajesh",
        content:"am resigning from my job"
    }
]

app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
});
app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
});
app.get("/posts/:id",(req,res)=>{
    let {id} = req.params;
    let post= posts.find((p)=> id === p.id);
    // console.log(post);
    // res.send("request working properly...");
    res.render("show.ejs",{post});
});
app.post("/posts",(req,res)=>{
    const{username,content}=req.body;
    posts.push({username , content});
    res.redirect("/posts");
})

app.listen(port,()=>{
    console.log(`app is listenning to port ${port}`)
})


