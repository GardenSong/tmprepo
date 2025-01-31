let add = 1 + 1;
console.log(add);
let divide = 10 / 7;
console.log("divide", divide);
let modulo = 10 % 7;
console.log("modulo", modulo);
let pow = 10 ** 3;
console.log("pow", pow);
console.log("zeroDivine", 1 / 0);
//비교 연산자
console.log("1 == 1.0", 1 == 1.0); // (느슨한) 동등
//js에서는 number 라는 타입으로 정수 실수가 아니다.
console.log("1 != 1.0", 1 != 1.0); // (느슨한) 부등
console.log(`1 == 1.0"`, 1 == "1.0"); //(엄격한 동등) 일치
//요즘 브라우저는 엄격하게 숫자 형식을 봐야해서
console.log(`1==="1.0"`, 1 === "1.0"); //(엄격한 동등) 일치
//너는 그냥 그거다.
console.log(`1==="1.0"`, 1 === "1.0"); //(엄격한부등 ) 불일치
//걍 넌 그게 아니다.
//
console.log("1 > 10", 1 > 10);
console.log("1 < 10", 1 < 10);
console.log("1 >=10", 1 >= 10);
console.log("1 >= 10", 1 <= 10);
console.log(`"a" > "b"`, "a" > "b"); //b한테 부여된 아스키 코드 (문자코드)가 더 커서 b가 더크다 (a가 b보다 크다는 것이다) 대문자. 65, 66. 소문자. 97, 98
//이거는 아스키코드 나 유니코드로 비교가 될 수 있음.

// 논리 연산자
let condition1 = 100 < 1000; //true
let condition2 = "a" < "b"; //true
let condition3 = 100 > 1000; //false
let condition4 = "a" > "b"; //false
// AND (&&) 단축 연산자
console.log("condition1 && condition2", condition1 && condition2); //AND (&&) 단축 연산자 T T
// 0 -> 0 => T
console.log("condition1 && condition3", condition1 && condition3); //AND (&&) 단축 연산자 T F
// 0 -> X => F
console.log("condition3 && condition2", condition3 && condition2); //AND (&&) 단축 연산자 F T
// X -> 안감 => F
console.log("condition4 && condition3", condition4 && condition3); //AND (&&) 단축 연산자 F F
// X -> 안감 => F
//and연산자면 t면 끝까지 확인을 하는 것이다. f라서 뒤를 더 이상 확인하지 않는다.
//
console.log("condition1 || condition2", condition1 || condition2); //AND (&&) 단축 연산자 T T
// 0 -> T
console.log("condition1 || condition3", condition1 || condition3); //AND (&&) 단축 연산자 T F
// 0 -> T
console.log("condition3 || condition2", condition3 || condition2); //AND (&&) 단축 연산자 F T
// X -> 0 => T
console.log("condition4 || condition3", condition4 || condition3); //AND (&&) 단축 연산자 F F
// X -> X => F

console.log("!true", !true);
console.log("!false", !false);
//헉!! true가 말함. 나는 알고보니 false구나

// 삼항연산자
// 조건 ? 참일때 : 거짓일때
//python : true 일 때 if 조건 else 거짓일 때
console.log(100 > 10 ? "100이 10보다 크네" : "100이 10보다 작네");
console.log(100 < 10 ? "100이 10보다 크네" : "100이 10보다 작네");

//타입 변환 연산자
console.log(typeof 42);
console.log(typeof "hello");
console.log(typeof null); //유명한 버그. (null의 타입은 object???)
console.log(typeof undefined);

let arr = [];
console.log(arr instanceof Array);
