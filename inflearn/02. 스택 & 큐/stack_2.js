/*
성문은 '<' 기호로 열고 '>' 기호로 닫습니다. 열려야만 닫을 수 있으며, 열린 성문은 반드시 모두 닫혀야 안 
전합니다. 성문을 여닫는 명령어로 구성된 문자열 gate 가 주어질 때, 이 명령이 성문을 안전하게 관리한 것인 
지 판별하는 함수를 작성하세요.
*/

function solution(gate) {
  const stack = [];

  for (let char of gate) {
    if (char == "<") {
      stack.push(char);
    } else {
      if (stack.length === 0) {
        return false;
      }
      stack.pop();
    }
  }

  return stack.length === 0;
}

console.log(solution("<<>>"));
console.log(solution("<<>>"));
console.log(solution(">><<"));
console.log(solution("<<<>"));
console.log();

// function solution(gates) {
//   const stack = [];

//   for (let gate of gates) {
//     if (gate == "<") {
//       stack.push(gate);
//     } else if (stack[stack.length - 1] == "<") {
//       stack.pop();
//     } else if (stack.length === 0) {
//       return false;
//     }
//   }

//   return stack.length === 0;
// }
