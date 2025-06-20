/*
알파벳으로  이루어진  문자열    s 가  주어집니다. 이  문자열에는  특별한  규칙이  있습니다. 같은  알파벳의  대소 
문자가  연속으로  붙어  있으면  충돌하여  사라집니다.
이때, 두  문자가  다음을  만족하면  충돌이  일어납니다:

- 바로  이웃해  있으며,
- 같은  알파벳이지만  대소문자가  서로  다릅니다. (예: 'xX' , 'Kk' , 'mM' )

예를  들어, "aA" 나    "Bb" 처럼  같은  알파벳이지만  대소문자가  다른  두  문자가  나란히  있다면, 이  두  문자는  즉 
시  폭발하여  문자열에서  제거됩니다.
이  현상은  폭발  후에도  남은  문자들  사이에  다시  충돌이  생기면  계속해서  반복됩니다. 모든  충돌이  끝나고  더 
이상  사라질  문자가  없을  때까지  이  과정을  반복하세요.
*/
function solution(s) {
  const stack = [];

  for (const char of s) {
    const top = stack[stack.length - 1];
    if (top && Math.abs(top.charCodeAt() - char.charCodeAt()) === 32) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }

  return stack.join("");
}

function solution2(s) {
  const stack = [];

  for (let char of s) {
    if (stack.length === 0) {
      stack.push(char);
    } else {
      // if (stack[stack.length - 1].toUpperCase() == char || stack[stack.length - 1] == char.toUpperCase()) {
      if (Math.abs(stack[stack.length - 1].charCodeAt() - char.charCodeAt()) === 32) {
        stack.pop();
      } else {
        stack.push(char);
      }
    }
  }

  return stack.join("");
}

console.log(solution("infFflearn"));
console.log(solution("aAbBcC"));
console.log(solution("xYyX"));
console.log(solution("a"));
console.log(solution("Code"));

console.log(solution2("infFflearn"));
console.log(solution2("aAbBcC"));
console.log(solution2("xYyX"));
console.log(solution2("a"));
console.log(solution2("Code"));
