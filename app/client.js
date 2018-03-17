const WebSocket = require('ws');

const { pick }  = require('./picknDrop');

let count = 0

const wsc = new WebSocket('ws://localhost:8080');

console.log('Connecting...', wsc.url)

wsc.on('open', (err) => {
    console.log('Connected to server', wsc.url);

    pick().then(( fileContents ) => {
        console.log('File read complete');
        wsc.send(fileContents);
    });

});

wsc.on('message', function incomming(data) {
    console.log('Server:', data);
});

wsc.on('error', function(err) {
    console.log('Server connection terminated', err);
});

wsc.on('close', function(err) {
    console.log('Client closed', err);
});
