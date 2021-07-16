// timer -> 글로벌 객체에 정의되어 있기 때문에 따로 import 하지 않아도 됨
let num = 1;

const interval = setInterval(() => {    // 호출을 안했는데 왜 실행되는지..?
    console.log(num++);
}, 1000);

setTimeout(() => {
    console.log('Time out!');
    clearInterval(interval);
}, 6000);

