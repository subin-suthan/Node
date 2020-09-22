var express=require('express')
var app=express()
var bookList=require('./book.json')
var match=[]
app.get('/showbook',function(req,res){
    res.send(bookList)
})


app.get("/search", function(req, res)
{
    keyword = req.query.srch;
    for (const key in bookList)
    {
        if(keyword == bookList[key].srch)
        {
            match.push(bookList[key]);
        }
    }
    res.send(match);
})



app.get('/login/:username/:city',function(req,res){
    var uname=req.params.username;
    var ucity=req.params.city
    res.send(`welcome ${uname} from ${ucity}`)
})

app.get('/login/:username/:city',function(req,res){
    var params=req.params;
    res.send(params)
})


app.get('/user/:username/:city',function(req,res){
    var params=req.params;
    res.send(params)
})

app.get('/home',function(req,res){
    res.send('welcome to expres')
})

app.get('/register',function(req,res){
    var name=req.query.studname;
    var id=req.query.studid;

    res.send({"stname":name,"studid":id})
})



app.listen('3000',function(){
    console.log('Server listening to port 3000')
})