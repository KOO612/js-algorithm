/*
두 줄로 나누어 선 사람들이 있습니다.
첫 번째 줄( queue1 )의 사람들이 앞쪽에 서 있고,
두 번째 줄( queue2 )의 사람들이 그 뒤를 잇고 있습니다.
즉, 두 줄을 이어 붙여 하나의 대기열을 만들면, queue1 의 모든 사람이 먼저 서 있고,
그 다음에 queue2 의 사람들이 서 있는 상태가 됩니다.
이 합쳐진 대기열에서 맨 앞 사람부터 차례로 검사하며 다음 규칙을 적용합니다:
현재 맨 앞 사람이 짝수 번호이면, 그 사람을 뽑아 결과에 추가합니다.
홀수 번호이면, 그 사람을 줄 뒤로 보냅니다.
이 과정을 반복하여 총 k 명의 짝수 번호 사람을 뽑을 때까지 계속합니다.
*/
function solution(queue1, queue2, k) {
  const queue = [...queue1, ...queue2];
  const result = [];

  while (result.length < k && queue.length > 0) {
    const person = queue.shift();

    if (person % 2 === 0) {
      result.push(person);
    } else {
      queue.push(person);
    }
  }
  return result;
}
console.log(solution([1, 3, 4], [6, 5, 8], 3));
