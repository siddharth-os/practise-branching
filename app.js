const express=require('express');
const bodyParser=require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.sendFile(__dirname+'/index.html');
});
app.post("/",(req,res)=>{
    console.log(req.body);
    var w=req.body.weight;
    var h=req.body.height;
    var bmi=w/(h*h);
    res.send("BMI = "+bmi);
});

app.listen(3000,()=>{
    console.log("Server running at port 3000.");
});