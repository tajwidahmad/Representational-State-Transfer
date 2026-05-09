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
        username:"bob",
        content:"hey there bob is here.."
    },
    {
        username:"stephen",
        content:"hey there today is my first job day"
    },
    {
        username:"rajesh",
        content:"am resigning from my job"
    }
]

app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
});

app.listen(port,()=>{
    console.log(`app is listenning to port ${port}`)
})

