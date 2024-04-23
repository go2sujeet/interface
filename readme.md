<!-- Objective: Create a Node.js script that encrypts text files within a specified directory using asynchronous programming. This script should encrypt the content of each text file using a basic Caesar Cipher for simplicity, then save the encrypted content to a new file in a different directory. The process should handle multiple files concurrently, support both encryption and decryption modes, and log the completion of each file operation.

Requirements:
Mode Selection: The script should accept a mode argument (encrypt or decrypt) as the first command-line argument to determine the operation mode.
Directory Arguments: Accept two additional command-line arguments for the input directory (containing text files to process) and the output directory (where encrypted or decrypted files will be saved).
Asynchronous Processing: Utilize Node.js's fs.promises module for asynchronous file operations to ensure non-blocking I/O.
Caesar Cipher Transformation: Implement a simple Caesar Cipher for text transformation. For encryption, shift each letter by a fixed number (e.g., 3 positions forward). For decryption, reverse the shift. Non-letter characters remain unchanged.
Concurrency: Process all files found in the input directory concurrently, taking advantage of Node.js's asynchronous capabilities.
Logging: Upon completion of processing a file, log a message indicating the file name and whether it was encrypted or decrypted.

 -->
