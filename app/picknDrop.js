const fs = require('fs');

// petrolicious.mp4
// jdk.exe
// android.zip

const FILE_READ_PATH = '../pick/android.zip';
const FILE_WRITE_PATH = '../drop/petrolicious.mp4'

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

    pick() {

        return new Promise((resolve, reject) => {
            fs.readFile(FILE_READ_PATH, (err, fileContents) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(fileContents);
            })
        });

    },

    drop(fileContents) {

        return new Promise((resolve, reject) => {
            fs.writeFile(FILE_WRITE_PATH, fileContents, (err) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve();
            })
        });

    }
}
