const fs = require('fs');

// petrolicious.mp4
// jdk.exe
// android.zip

const FILE_READ_PATH = '../pick/';
const FILE_WRITE_PATH = '../drop/';

module.exports = {

    picknDrop(fileName) {
        fs.readFile(FILE_READ_PATH, (err, data) => {
            if (!err) {
                fs.writeFile(FILE_WRITE_PATH, data, (err) => {
                    console.log(err ? err : 'WRITE Successful!');
                })
            }
        });

    },

    pick(fileName) {

        return new Promise((resolve, reject) => {
            fs.readFile(FILE_READ_PATH + fileName, (err, fileContents) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(fileContents);
            })
        });

    },

    drop(fileName, fileContents) {

        return new Promise((resolve, reject) => {
            fs.writeFile(FILE_WRITE_PATH + fileName, fileContents, (err) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve();
            })
        });

    }
}
