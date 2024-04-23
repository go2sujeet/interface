// crypto.js
const fs = require('fs').promises;  // Using fs.promises for async operations
const path = require('path');

async function encrypt(src, dest) {
    const srcPath = path.join(src);
    const dstPath = path.join(dest);
    const files = await fs.readdir(srcPath);
    for (const file of files) {
        const filePath = path.join(srcPath, file);
        const fileContent = await readFileFromDir(filePath);
        const encryptedContent = encryptContent(fileContent);
        await writeFileToDir(path.join(dstPath, file), encryptedContent);
        console.log(`File encrypted: ${file}`);
    }
}

// Decrypt files in a directory
async function decrypt(src, dest) {
    const srcPath = path.join(src);
    const dstPath = path.join(dest);
    const files = await fs.readdir(srcPath);
    for (const file of files) {
        const filePath = path.join(srcPath, file);
        const fileContent = await readFileFromDir(filePath);
        const decryptedContent = decryptContent(fileContent);
        await writeFileToDir(path.join(dstPath, file), decryptedContent);
        console.log(`File decrypted: ${file}`);
    }
}

// Read file content
async function readFileFromDir(filePath) {
    const result = await fs.readFile(filePath, 'utf8');
    return result;
}

// Write file content
async function writeFileToDir(filePath, content) {
    await fs.writeFile(filePath, content, 'utf8');
}

// Encrypt content using Caesar Cipher
function encryptContent(content) {
    return transformContent(content, 3);  // Shift right by 3 for encryption
}

// Decrypt content using Caesar Cipher
function decryptContent(content) {
    return transformContent(content, -3);  // Shift left by 3 for decryption
}

// Transform content for Caesar Cipher
function transformContent(content, shift) {
    return Array.from(content).map(char => transformChar(char, shift)).join('');
}

// Transform a single character by shifting
function transformChar(char, shift) {
    const charCode = char.charCodeAt(0);
    if (charCode >= 65 && charCode <= 90) {
        return String.fromCharCode((charCode - 65 + shift + 26) % 26 + 65);
    } else if (charCode >= 97 && charCode <= 122) {
        return String.fromCharCode((charCode - 97 + shift + 26) % 26 + 97);
    } else {
        return char;  // Non-alphabet characters remain unchanged
    }
}

module.exports = {
    encrypt,
    decrypt
};