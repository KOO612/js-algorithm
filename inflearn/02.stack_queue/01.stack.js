/*
택배 박스 정리 시스템 (스택)
문제 설명
택배 창고에서는 동일한 종류의 박스가 연속해서 쌓여 있을 때, 중복된 박스들은 하나만 남기고 모두 제거합니다.
이때 박스들은 쌓인 순서대로 남겨집니다.
박스 종류가 숫자로 표현된 배열 boxes 가 주어질 때,
연속된 같은 숫자는 한 개만 남기고 중복 종류를 제거한 결과를 반환하는 함수를 완성하세요.
*/
/*
입출력 예시
boxes result
[2, 2, 5, 5, 5, 1, 1][2, 5, 1]
[7, 7, 8, 8, 0, 0, 0][7, 8, 0]
*/
/*
제한사항
배열 boxes 의 크기: 최대 1,000,000개
배열 원소: 0 이상 9 이하의 정수
*/

function solution(boxes) {
  const stack = [];

  for (let i = 0; i < boxes.length; i++) {
    if (boxes[i] !== stack[stack.length - 1]) {
      stack.push(boxes[i]);
    }
  }
  return stack;

  // for(const box of boxes){
  //   if (stack[stack.length -1] !== box) {
  //     stack.push(box)
  //   }
  // }
}
console.log(solution([2, 2, 5, 5, 5, 1, 1]));
console.log(solution([7, 7, 8, 8, 0, 0, 0]));

/*
for of의 경우 iterator overhead로 대규모 처리에서 for 루프보다 느림
for of 내부적으로 배열의 Symbol.iterator를 호출해 iterator 객채를 생성
매 반복마다 iterator.next()를 호출해 객체를 반환 받음
*/
