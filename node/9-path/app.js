const path = require('path');

// POSIX(Unix: Mac, Linux): Users/temp/myFile.html
// Windows: c:\\temp\\myFile.html


// global 객체의 요소들
console.log(__dirname);
console.log(__filename);

console.log(path.sep);      // separator: 구분자
console.log(path.delimiter) // 환경변수 구분자

// basename
console.log(path.basename(__filename));                 // app.js
console.log(path.basename(__filename, '.js'));     // app

// dirname
console.log(path.dirname(__filename));                  // /Users/doyun/IdeaProjects/node/node_study/node/9-path

// extension(확장자)
console.log(path.extname(__filename));                  // .js

// parse: Object
const parsed = path.parse(__filename);
console.log(parsed);
/*
{
  root: '/',
  dir: '/Users/doyun/IdeaProjects/node/node_study/node/9-path',
  base: 'app.js',
  ext: '.js',
  name: 'app'
}
 */
const str = path.format(parsed);
console.log(str);

// isAbsolute
console.log('isAbsolute?', path.isAbsolute(__dirname));
console.log('isAbsolute?', path.isAbsolute('../'));

// normalize: 비정상적인 경로를 고쳐줌
console.log(path.normalize('./folder/////////sub'));    // folder/sub

// join
console.log(__dirname + path.sep + 'image');
console.log(path.join(__dirname, 'image'));