const timeout = setTimeout(() => {  //비동기인듯?
  console.log('1초 후 실행됩니다.');
},
1000
);

const interval = setInterval(() => {
  console.log('1초마다 실행됩니다.');
}, 1000);

const immediate = setImmediate(()=>{

  console.log('setImmediate() 함수 호출 뒤에 오는 모든 코드를 먼저 실행하고 바로 다음에 실행합니다.')
});

console.log("setImmediate 보다 먼저 실행");

setTimeout(()=>{
  clearInterval(interval);  //변수명이 interval인 setInterval함수를 종료합니다.
},3000);