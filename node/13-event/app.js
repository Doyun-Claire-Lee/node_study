const EventEmitter = require('events');
const emitter = new EventEmitter();

// 이벤트 등록
const callback1 = (args) => console.log('First callback - ', args);
emitter.on('ellie', callback1);
emitter.on('ellie', (args) => {
    console.log('Second callback - ', args);
});

// 이벤트 발생시키기, 삭제하기
emitter.emit('ellie', { message: 1 });
emitter.emit('ellie', { message: 2 });
emitter.removeListener('ellie', callback1);
emitter.emit('ellie', { message: 3 });

// 이벤트 형식으로 동작하는 함수들은 결국 EventEmitter를 상속하고 있음. ex) ReadStream