/*
빈 큐가 있습니다. 다음 명령어들이 주어질 때, 명령어를 수행한 결과를 배열로 리턴하세요.
명령어 종류:
"ENQUEUE x" : 숫자 x를 큐에 넣는다.
"DEQUEUE" : 큐에서 맨 앞의 값을 꺼내고 결과 배열에 추가한다. 만약 큐가 비어있으면 "EMPTY" 를 결과
배열에 추가한다.
 */

function solution1(commands) {
  const queue = [];
  const result = [];
  for (const char of commands) {
    if (char === "DEQUEUE") {
      if (!queue.length) {
        result.push("EMPTY");
      } else {
        result.push(queue.shift());
      }
    } else if (char.split(" ")[0] === "ENQUEUE") {
      queue.push(parseInt(char.split(" ")[1]));
    }
  }

  return result;
}

function solution2(commands) {
  const queue = [];
  const result = [];

  commands.forEach((command) => {
    const [action, value] = command.split(" ");

    if (action === "ENQUEUE") {
      queue.push(Number(value));
    } else if (action === "DEQUEUE") {
      result.push(queue.length ? queue.shift() : "EMPTY");
    }
  });
  return result;
}

console.log(solution1(["ENQUEUE 3", "ENQUEUE 5", "DEQUEUE", "DEQUEUE", "DEQUEUE"]));
console.log(solution2(["ENQUEUE 3", "ENQUEUE 5", "DEQUEUE", "DEQUEUE", "DEQUEUE"]));
