let rect = {
    color: 'red',
    width: 100
};
let rect2 = {
    color: 'red',
    width: 100
};
// 인터페이스 사용하여 타입 지정해 보기
let people = { name: 'Alice' };
let teacher = { name: 'peter', age: 30 };
let personA = {
    name: 'Lee',
    age: 22
};
// 결론:
// 무엇이 되었던간에, 프로젝트 전반에서 type을 쓸지 interface를 쓸지 통일 필요
// 객체, 그리고 타입 확장 등을 고려해 보았을 떄 interface를 쓰는 것을 추천
// Quiz
// Q1. interface를 이용해서 타입을 만들어보세요.
let product = {
    brand: 'Samsung',
    serialNumber: 12345,
    model: ['TV', 'phone']
};
let cartList = [
    { product: '냉장고', price: 2000000 },
    { product: '모니터', price: 800000 },
    { product: '마우스', price: 150000 }
];
let item = { product: '청소기', price: 700000, soldout: true };
