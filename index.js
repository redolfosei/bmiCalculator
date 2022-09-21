const express = require('express');
const bodyParser = require('body-parser');
const app = express(); 
app.use(bodyParser.urlencoded({extended:true}));

app.post("/",function(req,res){
    var var_weight = parseFloat(req.body.weight);
    var var_height = parseFloat(req.body.height); 
    var bmic = var_weight/var_height**2;

    //res.send("Your's BMI is " + bmic); 

    if(bmic < 18.5){
        res.send("Your BMI is " + bmic + ", so you are underweight.");
    }
    else if (bmic >= 18.5 && bmic <= 24.9){
        res.send("Your BMI is " + bmic + ", so you have a normal weight.");
    }
    else if (bmic > 24.9) {
        res.send("Your BMI is " + bmic + ", so you are overweight.");
    }
});

app.get("/", function(req,res){
    res.sendFile(__dirname + "/index.html");
});

app.listen(3000,()=> {
    console.log('port started on port 3000');
});