const logger = require('./logger.js');
const emitter = new logger.Logger();

// Logger 클래스에서 사용했던 log이벤트 등록
emitter.on('log', args => {
    console.log(args);
});

emitter.log(() => {
    console.log('doing something.........');
});

/*
EventEmitter는 한번 객체를 만들면 그 객체에 내에서 발생되는 이벤트에 한해서 들을 수 있다!
여러가지 Emitter를 만들면 다른 객체 내에서 발생하는 이벤트는 들을 수 없다!
 */