const net = require('net');

const options = {
    host: 'localhost',
    port: 9040
};

const connection = net.createConnection(options);

connection.setEncoding('utf8');

connection.on('data', (message) => {
    process.stdout.write('\x07');
    console.log('🐻: ', message);
});

process.stdin.setEncoding('utf8');

process.stdin.on('data', (input) => {
    const message = input.trim();
    connection.write(message);
});