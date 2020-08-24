const express = require('express')
const bodyParser = require('body-parser');
const { resolveAny } = require('dns');
const app = express()
var http = require('http').createServer(app);
var io = require('socket.io')(http);
const port = 3000
http.listen(port, () => console.log(`Server ${port}`))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.set('view engine', 'ejs')
app.set('views', 'views')
app.use(express.static('public'))
app.get('/', (req, res) => {
    res.redirect('/login')
})
var userName = ['AAA','BBB']
app.get('/login', (req, res) => {
    console.log(userName)
    res.render('main', { errs: 0 })
})
app.post('/login', (req, res) => {
    if (userName.indexOf(req.body.txtName)>=0) {
        res.render('main', { errs: req.body.txtName })
        return
    } else {
        userName.push(req.body.txtName)
        console.log(userName)
        res.redirect('/message')
    }
})
app.get('/message', (req, res) => {
    res.json('message')
})
io.on('connection', (socket) => {
    
})
