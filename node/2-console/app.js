console.log('logging.....');
console.clear();

// log level
// browser: 색으로 구분됨
console.log('log');            // 개발시
console.info('info');   // 정보
console.warn('warn');   // 경고
console.error('error');       // 에러, 사용자 에러, 시스템 에러

// assert
console.assert(2 ===3, 'not same'); // 출력X
console.assert(2 === 2, 'same');

// print object
const student = { name: 'ellie', age: 20, company: {name: 'Academy'} };
console.log(student);
console.table(student);
console.dir(student, {showHidden: true, colors: true, depth:2});

// measuring time
console.time('for loop');
for (let i=0; i<10; i++) {
}
console.timeEnd('for loop');    // 동일한 label

// counting
function a() {
    console.count('a function');
}
a();    // a function: 1
a();    // a function: 2
console.countReset('a function');
a();    // a function: 1

// trace
function f1() {
    f2();
}
function f2() {
    f3();
}
function f3() {
    console.log('f3');
    console.trace();
}
f1();

