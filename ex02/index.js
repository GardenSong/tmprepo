let integer = 4; //
console.log(integer);
let float = 3.141592; //
console.log(float);

let string = "hello"; //문자열 (빈 문자열)
let emptyString = ""; //빈 문자열 (들어있는 문자가 없음)
//length, size....
console.log(`안녕하세요 ${integer}`); // 템플릿 리터럴 문법 (변수를 ${} 안에 넣어 바로 표현)
//백티로 묶고 텍스트를 묶은 다음에 $ 표시 중괄호를 해야한다. //쌍따옴표 안에는 작은 따움표가 들어갈 수 있는데 어디에서는 작은 따옴표로 스크립트의 호환을 위해 작은 따옴표를 써야 한다.
//변수가 들어가는 지점은 빽티를 쓰고 큰 따옴표로 하기 보다는 빽틱을 쓴다.

//boolean, bool, -> 불, jeorge bool,
let isCold = true; //1
let isHard = false; //0, 아예 없거나, 애초에 존재하지도 않았던 것들, 빈 것들

//undefined : defined 되지 않은 것, 정의되지 않았다?
let memory;
console.log("메모리 :", memory);

//null
let areYouReady = null;
console.log("areYouReady", areYouReady);

//object -> 참조타입
let person = {
  name: "Sji",
  job: "tutor",
  hunger: 100,
};
console.log(person);
console.log("console.log()", console.log());
console.log(person.job);
console.log(person["job"]);
console.log(person.school); //undefined
console.log(person["shcool"]); //undfined

// array
let array = [1, 2, 3];
console.log(array);
console.log("array.push('4');", array.push("4"));
console.log(array);
console.log("array.pop();", array.pop());
console.log(array);
