// index.js
const { argv } = require('node:process');
const mode = argv[2];  // First argument: 'encrypt' or 'decrypt'
const src = argv[3];  // Second argument: source directory path
const dst = argv[4];  // Third argument: destination directory path
const {encrypt, decrypt} = require('./crypto');

async function processFiles(mode, src, dst) {
    if (mode === 'encrypt') {
        await encrypt(src, dst);
    } else if (mode === 'decrypt') {
        await decrypt(src, dst);
    } else {
        console.log('Invalid mode. Use "encrypt" or "decrypt".');
    }
}

processFiles(mode, src, dst).then(() => {
    console.log('Processing completed.');
}).catch(error => {
    console.error('An error occurred:', error);
});
