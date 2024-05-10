let stri = ''
let bio = ''
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))

app.get("/", (req, res)=>{
	res.render('index', {
		bio: bio,
	})
})

app.post("/", (req, res)=>{
	//res.send('loading...')
	stri = req.body.options.join(', ')
 //Assigning the value of biography
	if(stri == 'Albert Einstein'){
	 bio = `Albert Einstein was a German-born 
		       theoret`
 }else{
	 bio = 'information not found yet'
 }

	res.redirect('/')
})

app.listen(3000, ()=>{
	console.log('server is running...')
})