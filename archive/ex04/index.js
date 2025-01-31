//조건문
//비교 연산자, 논리 연산자 (단축 평가), boolean
let age = 50;
if (age >= 20) {
  console.log("일하러 가야지!");
} else {
  console.log("놀아야지!");
}
//let money = 10000;
// let money = 6000;
let money = 10000;
if (money >= 10000) {
  console.log("고급 자장면을 먹어야지!");
} else if (money > 5000) {
  console.log("자장면을 먹어야지!");
} else {
  console.log("못먹겠네 ㅠㅠ");
}

const randNum = Math.floor(Math.random() * 6); //0은 포함하고 , 1은 제외 하고 있다.
// break가 없으면 해당하는 것 아래로 다 나옴
switch (key) {
  case 0:
    console.log("1 입니다.");
    break;

  default:
    break;
}

let w = 0;
while (w < 10) {
  console.log("w", w);
  // w = w + 1;
  // w += 1; //복합대입 연산자
  w++; // w--; 증감 연산자
}
//이거 끝내려면 터미널 자체를 끝내야한다.

let w2 = 2;
while (true) {
  if (w2 > 100) {
    break;
  }
  w2 **= 2;
  console.log(w2);
}

while (true) {
  if (Math.random() > 0.5) {
    console.log("HEAD!");
    break;
  } else {
    console.log("TAILㅠㅠ");
  }
}

for (let index = 0; index < 10; index++) {
  if (index % 2 == 0) {
    continue; //스킵한다. 지금한걸 스탑하고 반복은 continue. (stop)은 하고 하던 건 멈춰
  }
  console.log("index", index);
  // break; (이 반복문 자체를 탈출해)
}

for (;;) {
  break;
}
