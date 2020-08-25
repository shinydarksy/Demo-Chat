$('document').ready(() => {
    var socket = io('http://localhost:3000')
    var user = $('.firstItem')
    socket.on('send-userName', (data) => {
        data.forEach(element => {
            user.append('<li class="list-group-item bg-primary title-list ">' + element + '</li>')
        });
    })
    var updateUser
    $('#inputEmail').change(() => {
        updateUser = $('#inputEmail').val()
        console.log('123')
    })
    
    socket.emit('user-send-updateUser', updateUser)
    socket.on('server-send-updateUser', (data) => {
        console.log(data)
    })
    $('#submit').click(() => {

    })
})