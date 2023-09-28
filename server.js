const net = require('net');

const server = net.createServer();

const port = 9040;

const connections = [];

server.on('connection', (connection) => {
  console.log('A new client has connected!');

  connections.push(connection);
  console.log('Number of clients:', connections.length);

  connection.write('Welcome to the terminalChat!💬 To exit the chat, use ctrl + c.🚪');

  connection.setEncoding('utf8');

  connection.on('data', (message) => {
    console.log('client: ', message);

    for (const conn of connections) {
      if (conn !== connection) {
        conn.write(message);
      }
    }
  });
});

server.listen(port, () => {
    console.log(`The server is running on port ${port}`);
});