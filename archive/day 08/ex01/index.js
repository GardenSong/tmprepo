const me = {
  name: "김개발",
  job: "영화감독",
  age: 37,
  height: 172.5,
  married: false,
  hobby: ["코딩", "야구", "카드게임"],
  1: "영화",
  movie: {
    name: "AI 감독관",
    year: 2025,
  },
  hello: function () {
    console.log("안녕하세요!");
  },
  sayMyName: function () {
    console.log(`내 이름은 ${this.name}!`);
  },
};

console.log(me.name);
console.log(me["name"]);
// console.log(me.1); // 이런 거 주의...
console.log(me[1]); //이거 gpt한테 꼭 물어보기
// 자바스크립트에서의 변수명 혹은 함수명 규칙 + 케이스 (카멜케이스...)
me.hello();
me.sayMyName();

//프로시져 -> 일반적으로 뭐가 없어? => return 이 없음/
//함수
//여기서 aprams는 파라미터의 요약자
function add(a, b) {
  // return a + b;
  return;
  console.log("뒤가 없음");
  // 이 함수의 리턴 값은 정의 되지 않았다.
}
console.log(add(1, 2)); //3을 돌려준다.return  가 있으니까
