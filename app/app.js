const { picknDrop, pick, drop } = require('./picknDrop');

pick().then(( fileContents ) => {
    console.log('File read successful!');

    drop(fileContents)
        .then(() => console.log('File write successful!'))
        .catch((err) => console.log(err))

});
