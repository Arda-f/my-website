const client = {
    express: require("express"),
    socket: require("socket.io"),
    PORT: require("./config.json").port
}

client.app = client.express()
client.server = client.app.listen(client.PORT)
client.io = client.socket(client.server)

console.log(client)