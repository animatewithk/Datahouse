const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

app.get("/", (req, res)=>{
	res.render('index')
})
app.post("/", (req, res)=>{
	res.send('hi')
})

app.listen(3000, ()=>{
	console.log('server is running')
})