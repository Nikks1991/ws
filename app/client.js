const WebSocket = require('ws');

const { pick }  = require('./picknDrop');

let count = 0

const wsc = new WebSocket('ws://localhost:8080');

wsc.on('open', (err) => {


    pick('package-lock.json').then(( fileContents ) => {
        const msg = {
            type: 'drop',
            payload: {
                fileName: 'package-lock.json',
                fileContents
            }
        }

        wsc.send(JSON.stringify(msg));
    })
    .catch((err) => {
        console.log('Err:', err)
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
