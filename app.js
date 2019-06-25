const express require("express");
const app = express();


app.get('*',function(req,res){
	res.send("Hello WOrld");
});

app.listen("3002",function(){
	console.log("Listening");
});