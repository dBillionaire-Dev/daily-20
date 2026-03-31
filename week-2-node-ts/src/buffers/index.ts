/**
 * WHAT ARE BUFFERS?
 * Buffers are a way to handle binary data in Node.js.
 * They are used to store raw data, such as images, audio files, or any other type of binary data.
 * Buffers are instances of the Buffer class, which is a global class in Node.js.
 *
 * HOW TO CREATE A BUFFER?
 * You can create a buffer using the Buffer.from() method, which takes a string or an array of bytes as an argument.
 * For example:
 * * const buffer = Buffer.from('Hello, World!');
 * You can also create a buffer of a specific size using the Buffer.alloc() method, which takes the size of the buffer as an argument.
 * For example:
 * * const buffer = Buffer.alloc(10);
 *
 * HOW TO WRITE TO A BUFFER?
 * You can write data to a buffer using the write() method, which takes a string or an array of bytes as an argument.
 * For example:
 * * const buffer = Buffer.alloc(10);
 * * buffer.write('Hello');
 *
 * HOW TO READ FROM A BUFFER?
 * You can read data from a buffer using the toString() method, which converts the buffer to a string.
 * For example:
 * * const buffer = Buffer.from('Hello, World!');
 * * console.log(buffer.toString()); // Output: Hello, World!
 *
 * HOW TO CONCATENATE BUFFERS?
 * You can concatenate multiple buffers using the Buffer.concat() method, which takes an array of buffers as an argument.
 * For example:
 * * const buffer1 = Buffer.from('Hello, ');
 * * const buffer2 = Buffer.from('World!');
 * * const buffer3 = Buffer.concat([buffer1, buffer2]);
 * * console.log(buffer3.toString()); // Output: Hello, World!
 *
 * HOW TO SLICE A BUFFER?
 * You can slice a buffer using the slice() method, which takes the start and end indices as arguments.
 * For example:
 * * const buffer = Buffer.from('Hello, World!');
 * * const slicedBuffer = buffer.slice(0, 5);
 * * console.log(slicedBuffer.toString()); // Output: Hello
 *
 * HOW TO CONVERT A BUFFER TO AN ARRAY OF BYTES?
 * You can convert a buffer to an array of bytes using the Array.from() method.
 * For example:
 * * const buffer = Buffer.from('Hello, World!');
 * * const byteArray = Array.from(buffer);
 * * console.log(byteArray); // Output: [72, 101, 108, 108, 111, 44, 32, 87, 111, 114, 108, 100, 33]
 */

const buff: Buffer = Buffer.from('Hello, World! ');
console.log("Buff: ", buff); //OUTPUT: Buff: <Buffer 48 65 6c 6c 6f 2c 20 57 6f 72 6c 64 21 20>
console.log("Buff to String: ", buff.toString()); //OUTPUT: Hello, World!
console.log("\n");

const buffer: Buffer = Buffer.alloc(17);
console.log("Buffer: ", buffer); //OUTPUT: Buffer: <Buffer 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00>
buffer.write('I am a programmer');
console.log("Buffer written:", buffer); //OUTPUT: Buffer written: Buffer written: <Buffer 49 20 61 6d 20 61 20 70 72 6f 67 72 61 6d 6d 65 72>
console.log(buffer.toString()); //OUTPUT: I am a programmer

const bufferConcat1: Buffer = Buffer.concat([buff, buffer]);
console.log("Buffer Concatenated to string: ", bufferConcat1.toString()); //OUTPUT: Buffer Concatenated to string:  Hello, World! I am a programmer
console.log("Buffer Concatenated: ", bufferConcat1) //OUTPUT: Buffer Concatenated:  <Buffer 48 65 6c 6c 6f 2c 20 57 6f 72 6c 64 21 20 49 20 61 6d 20 61 20 70 72 6f 67 72 61 6d 6d 65 72>

/**
 * BUFFER METHODS:
 * * Buffer.from() - Creates a new buffer from a string or an array of bytes.
 * * Buffer.alloc() - Creates a new buffer of a specific size.
 * * Buffer.write() - Writes data to a buffer.
 * * Buffer.toString() - Converts a buffer to a string.
 * * Buffer.concat() - Concatenates multiple buffers into one buffer.
 * * Buffer.slice() - Slices a buffer into a new buffer.
 * * Array.from() - Converts a buffer to an array of bytes.
 * * Buffer.compare() - Compares two buffers and returns a number indicating whether the first buffer comes before, after, or is the same as the second buffer.
 * * Buffer.copy() - Copies data from one buffer to another buffer.
 * * Buffer.fill() - Fills a buffer with a specified value.
 * * Buffer.isBuffer() - Checks if an object is a buffer.
 * * Buffer.byteLength() - Returns the number of bytes in a buffer.
 * * Buffer.allocUnsafe() - Creates a new buffer of a specific size without initializing it, which can be faster but may contain old data.
 * * Buffer.allocUnsafeSlow() - Creates a new buffer of a specific size without initializing it, which can be slower but is safer than Buffer.allocUnsafe().
 * * Buffer.isEncoding() - Checks if a string is a valid encoding.
 * * Buffer.isBuffer() - Checks if an object is a buffer.
 */