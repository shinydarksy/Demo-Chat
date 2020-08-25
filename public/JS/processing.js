$('document').ready(() => {
    var socket = io('http://localhost:3000')
    var user = $('.firstItem')
    socket.on('send-userName', (data) => {
        data.forEach(element => {
            user.append('<li class="list-group-item bg-primary title-list ">' + element + '</li>')
        });
    })
    var input = $('#input')
    input.on('change', () => {
        console.log(input.val())
    })
    var button = $('#button')
    button.click(()=>{
        socket.emit('user-send-updateUser',input.val())
    })
    socket.on('server-send-updateUser',(data)=>{
        user.append('<li class="list-group-item bg-primary title-list ">' + data + '</li>')
    })
})