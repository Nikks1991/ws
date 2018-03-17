const WebSocket = require('ws');

const { drop } = require('./picknDrop');

let count = 0;

const wss =  new WebSocket.Server({
    port: 8080
    // perMessageDeflate: {
    //     zlibDeflateOptions: {   // See zlib options
    //         chunkSize: 1024,
    //         memLevel: 7,
    //         level: 3
    //     },
    //     zlibInflateOptions: {
    //         chunkSize: 10 * 1024
    //     },
    //     // Other options settable
    //     clientNoContextTakeover: true,      // Defaults to negotiated value
    //     serverNoContextTakeover: true,      // Defaults to negotiated value
    //     clientMaxWindowsBits: 10,           // Defulats to negotiated value
    //     serverMaxWindowsBits: 10,           // Defaults to negotiated value
    //     // Below options are specified as defaults values
    //     concurrencyLimit: 10,               // Limits zlib concurrency for performance
    //     thresholdL: 1024,                   // Size (in bytes) below which messages
    //                                         // should not be compressed
    //                                     }
}, () => console.log('Server running...'));

wss.on('error', function(err) {
    console.log('Server exeution failed', err);
})

wss.on('connection', function connections(ws) {

    console.log('Client connected...');

    ws.on('message', function incomming(data) {
        console.log('Client:', data);
        drop(data).then(() => ws.send('File write successful!'));
    });

    ws.on('error', function(err) {
        console.log('Error from client', err);
    });

})
