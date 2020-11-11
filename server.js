const express = require('express')
const app = express()
const port = 3000
const path = require('path');//including path function in file
const bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Welcome to Data Representation & Querying ')
})

app.get('/hello/:name', (req, res) => {//get request

  console.log(req.params.name);
  res.send('Hello ' + req.params.name);//sending hello to new url
})

app.get('/api/movies', (req, res) => {
  const mymovies = [  //declaring a constant with movies json


    {
      "Title": "Avengers: Infinity War",
      "Year": "2018",
      "imdbID": "tt4154756",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
    },
    {
      "Title": "Captain America: Civil War",
      "Year": "2016",
      "imdbID": "tt3498820",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
    }

  ]
  
  res.json({movies:mymovies}) //calling our json 

});

app.get('/test', (req, res)=>{
  res.sendFile(__dirname + '/index.html');//link to html file

})

app.get('/name', (req, res)=>{
    res.send('Hello ' + req.query.fname + ' ' + req.query.lname);

})

app.post('/name', (req, res)=>{

    res.send('Hello' + req.body.fname + ' ' + req.body.lname);
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})