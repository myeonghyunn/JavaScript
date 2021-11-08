# 2021.11.07(SUN) JavaScript-함수(3/5)
## 입력

```javascript
function get_member1() {
  return 'Hello';
}
alert(get_memeber1());    //Hello

function get_member1() {
  return 'Hello';
  return 'World';
  return 'MyeongHyun';
  return 'Park';
}
alert(get_memeber1());    //Hello
```
두 예시 중 밑의 예시와 같이 return 값이 여러개여도 첫번째 return 값인 'Hello'를 제외하고는
어떤 값도 출력되지 않았다. 이처럼 return은 결과를 반환함과 동시에 함수를 중지시키는 역할을 한다.

>### Reference

<https://www.youtube.com/watch?v=lYrWnEqRHBY&list=PLuHgQVnccGMA4uSig3hCjl7wTDeyIeZVU&index=30>
<https://opentutorials.org/module/532/4729>
