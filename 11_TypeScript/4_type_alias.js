//  type alias(별칭) 만드는 법
let animalVar;
let animalVar2 = 'Dog';
let person4 = { name: 'kim', age: 25 };
let person5 = { name: 'Ace' };
let friend = {
    name: 'Alice'
};
// friend.name = 'peter'; // readonly로 읽기 전용 속성임
console.log(friend); // 실제로 JS에서는 값이 바뀌는데 TS에서는 에러를 발생 시켜줌
let position = { x: 10, y: 20 };
// let ad: TypeAB = { x:1 , y: '2'};  // { x: number, y: string}
let ad = { x: 1, y: '2' }; // never 타입은 절대 발생하지 않는 값을 의미
const myInfo = {
    name: 'zzz',
    phone: 4654646,
    email: 'zzdsafas'
};
let typeEF = { name: 'lee', a: false, phone: 123, email: 'aaaaa' };
// Literal Type으로 더 엄격한 타입 지정하기
// 변수에 뭐가 들어올지 더 엄격하게 관리 가능
// 자동 완성 기능이 동작함
// 특정 문자만 들어올 수 있도록 지정
let hisName;
hisName = "Lee"; // 자동 완성 기능 동작 
// hisName = 'hahah'  // 에러 발생
// 함수에서 Literal Type 사용하기
function testFunc(params) {
    return 1;
}
testFunc("hello");
// Quiz
// Q5.
// 1. 가위/바위/보 중 1개를 입력할 수 있고 (예: func('가위');)
// 2. 가위/바위/보 만 담을수 있는 배열을 리턴하는 함수 (return ['가위', '보'];)
function i(params) {
    return ["바위", "가위", "보"];
}
i("가위");
// 함수표현식에만 Type Alias 사용 가능
const myFunc4 = (params) => {
    return 0;
};
const memberInfo = {
    name: 'Lee',
    age: 32,
    plusOne(a) {
        return a + 1;
    },
    changeName: () => { }
};
memberInfo.plusOne(1);
