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
var userName = []
app.get('/login', (req, res) => {
    res.render('main', { errs: 0,page:'login'})
})
app.post('/login', (req, res) => {
    if (userName.indexOf(req.body.txtName)>=0) {
        res.render('main', { errs: req.body.txtName,page:'login' })
        return
    } else {
        userName.push(req.body.txtName)
        res.redirect('/message')
    }
})
app.get('/message', (req, res) => {
    res.render('main',{page:'message'})
})
io.on('connection', (socket) => {
    socket.emit('send-userName',userName)
    socket.on('user-send-updateUser',(data)=>{
        socket.emit('server-send-updateUser',data)
    })
})
