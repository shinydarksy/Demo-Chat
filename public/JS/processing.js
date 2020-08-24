
$('document').ready(() => {
    var socket = io('http://localhost:3000')
    var user = $('.firstItem')
    console.log(user)
    socket.on('send-userName', (data) => {
        data.forEach(element => {
            user.append('<li class="list-group-item bg-primary title-list ">Danh sách người dùng</li>')
        });
    })
})