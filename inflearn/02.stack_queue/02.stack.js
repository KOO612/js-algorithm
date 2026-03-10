/**
 * 성문은 '<' 기호로 열고 '>' 기호로 닫습니다.
 * 열려야만 닫을 수 있으며, 열린 성문은 반드시 모두 닫혀야 안전합니다.
 * 성문을 여닫는 명령어로 구성된 문자열 gate 가 주어질 때,
 * 이 명령이 성문을 안전하게 관리한 것인지
 * 판별하는 함수를 작성하세요.
 */

function solution(gate) {
  const stack = [];

  for (let gates of gate) {
    if (gates === "<") {
      stack.push(gates);
      // } else {
      //   if (gates === ">" && stack[stack.length - 1] === "<") {
      //     stack.pop();
      //   } else {
      //     stack.push(gates);
      //   }
      // }
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

// 스택에 값을 넣고 만약 < 가 있으면 해당 값을 지우고 넣는 값도 뺴고
// 없으면 > 추가 마지막 배열의 값이 < 나 > 가 있다면 false
