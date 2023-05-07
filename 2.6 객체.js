const fruits = ['사과','오렌지','배','딸기'];

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);

//이차원 배열
const arrayOfArray = [[1,2,3],[4,5]];
console.log(arrayOfArray[0]);

const a = 10;
const b = 20;
const variableArray = [a,b,30];
console.log(variableArray[1]);

//배열 내부의 값 -> 요소(element)
//배열의 요소 개수 구하기
const everything =['사과', 1, undefined , true,'배열',null];
console.log(everything.length);
console.log(everything[everything.length -1]);  //배열의 마지막 요소의 값 구하기

//배열에 요소 추가하기
const target = ['b','c','d','e'];
target[4] = 'f'; //배열에 요소 추가, 수정
target[target.length] = 'g'; //배열의 마지막 요소 인덱스가 배열.length -1 이므로 다음 요소를 추가하려면 배열.length에 값을 넣으면 됨
target.unshift('a');    //배열 맨 앞에 추가하는 기능 -> unshift
target.push('h'); //배열 맨 뒤에 추가하는 기능 -> push
target.pop(); //배열 마지막 요소 제거
target.shift(); //배열 맨 앞 요소 제거
target.splice(1,1); //배열의 중간 요소 제거
target.splice(1,1,'추가 아이템'); //배열의 중간 요소 제거 + 제거한 자리에 다른 값 추가

//배열에서 요소 찾기
const result = target.includes('e'); //includes 기능 사용 -> boolean
const result2 = target.includes('k');
const result3 = target.indexOf('g'); //검색하고 싶은 값은 인덱스 번호
const result4 = target.lastIndexOf('g'); //뒤에서 검색

//배열 반복하기
    //while문 사용!
let i=0;
while(i < target.length){
    console.log(target[i]);
    i++;
}
    //for문 사용!
for(let i =0; i<target.length; i++){
    console.log(target[i]);
}


console.log(target);
console.log("result의 값 " + result);
console.log("result2의 값 " + result2);
console.log("result3의 값 " + result3);
console.log("result4의 값 " + result4);



//함수
//function() {} (함수 선언문) 또는 () => {} (함수 표현식)

function afunc() {
    console.log('Hello');
    console.log('Function');
}
const bfunc = function() {};    //상수 또는 변수의 이름이 함수의 이름이 됨
const cfunc = () => {}; //반환값(return value)은 undefined
function dfunc() {
    return 10;
}

afunc(); // 함수를 호출하는 행위


//매개변수와 인수 사용하기
function efunc(parameter, a, b, c, d) { //매개변수
    console.log(a, b, c, d);
    console.log(parameter);
    console.log(arguments); //호출 시 넣었던 인수 목록 확인 but 화살표 함수 사용 x 오직 function으로 선언한 함수에서만
}
efunc('argument', 'Hello','Parameter');  //인수

function add(x,y){
    return x + y;
}
console.log(add(3,5));
console.log(add(8,7));

const multiply = (x,y,z) => {
    return x*y*z;
}
console.log(multiply(1,2,3));

//순수함수
function minus1(x,y){
    const a = 100;
    return (x - y) * a;
}
console.log(minus1(5,3));

//순수함수x
const minus2a = 100;
function minus2(x,y){
    return (x - y) * minus2a;
}
console.log(minus2(5,3));

//객체 리터럴
const zerocho = {
    //name, year, month ..와 같은 정보들 -> 속성 / '조현영',1994,8,12 .. -> 속성 값
    name: '조현영',
    year: 1994,
    month: 8,
    date: 12,
    gender: 'M',
}

//객체 속성에 접근
console.log(zerocho.name);
console.log(zerocho['name']);