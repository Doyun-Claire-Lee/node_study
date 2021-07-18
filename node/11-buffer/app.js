// Buffer: fixed-size of memory chunk, 고정된 사이즈의 메모리 덩어리(?)
// - Array of integers, byte of data

const buf = Buffer.from('Hi');

console.log(buf);               // <Buffer 48 69>
console.log(buf.length);        // 2
console.log(buf[0]);            // 72   Ascii code
console.log(buf[1]);            // 105
console.log(buf.toString());    // Hi

// create
const buf2 = Buffer.alloc(2);       // 2사이즈의 사용하지 않는 메모리 공간을 찾아 초기화 시켜줌
const buf3 = Buffer.allocUnsafe(2); // 2사이즈의 사용하지 않는 메모리 공간을 찾아 주지만 초기화시켜주지 않음
console.log(buf2);
console.log(buf3);

buf2[0] = 72;
buf2[1] = 105;
console.log(buf2.toString());

buf2.copy(buf3);
console.log(buf3.toString());

// concat
const newBuf = Buffer.concat([buf, buf2, buf3]);
console.log(newBuf);
console.log(newBuf.toString());