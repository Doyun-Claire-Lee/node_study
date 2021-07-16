const process = require('process');

console.log(process.execPath);
console.log(process.version);
console.log(process.pid);           // process id
console.log(process.ppid);          // process parent id
console.log(process.platform);
console.log(process.env);           // environment
console.log(process.uptime());
console.log(process.cwd());         // current working directory
console.log(process.cpuUsage());


// 비동기적 실행
setTimeout(() => {
    console.log('setTimeOut');
}, 0);
process.nextTick(() => {    // 현재 실행되고있는 프로세스가 종료되면 Task queue에서 콜백 함수를 호출함
    console.log('nextTick');          // Task queue에 다른 콜백함수가 있어도 무시하고 가장 우선적으로 실행됨.
});

//동기적 실행(해당 코드가 모두 실행되고 나서야 위의 함수가 실행됨.
for (let i=0; i<100; i++) {
    console.log(i);
}

/*
1
...
99
nextTick
setTimeOut
 */