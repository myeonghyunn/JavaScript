# 2021.10.31(SUN) JavaScript-조건문(3/5)
## 조건문의 응용

```javascript
a = prompt("type your name : "); 
if (a==="Myeonghyun") {
alert("Hello, Myeonghyun!");
}
```
위와 같이 prompt 명령어로 이름을 입력받고 if를 이용해 입력값이 내가 원하는 값과 일치하면 
alert로 그에 상응하는 값을 출력시킬 수 있다.

위 조건문을 조금 더 응용해 간단한 웹사이트 로그인 창을 만들어 보았다.

```javascript
id = prompt("input your id :");
if (id==="myeonghyun") {
alert("Welcome, myeonghyun!")
} else {
alert("invalid id!")
}
```

>### Reference

<https://www.youtube.com/watch?v=eVQctnRC0vA&list=PLuHgQVnccGMA4uSig3hCjl7wTDeyIeZVU&index=19>
<https://opentutorials.org/module/532/4724>


# JavaScript-조건문(4/5)
## 논리연산자

```javascript
if (true && true) {
    alert(1);
}   ///1

if (false && true) {
    alert(1);
}   
```
위와 같은 논리연산자를 또한 활용해 간단한 웹사이트 로그인 창을 구성할 수 있다.

```javascript
var id = prompt("input your id : ");
      var pass = prompt("input your password :");
      if (id === "myeonghyun" && pass == 1111){
        alert("you're now logged in!");
      } else {
        alert("login failed!");
      }
```

```javascript
if (true || true) {
    alert(1);
}   //1

if (false || true) {
    alert(1);   //1
    }
    
if (!true && !true) {
alert(1);
}

if (!false || !true) {
alert(1);
}   //1
```

다음과 같은 논리연산자와 이전의 논리연산자를 혼합해서 다음과 같이 구성할 수 있다.

```javascript
var id = prompt("input your id :");
      var pass = prompt("input your password : ");
      if ((id == "myeonghyun" || id == "park") && (pass == 1111)) {
        alert("you're now safely logged in!");
      } else {
        alert("login failed!");
      }
```



>### Reference

<https://www.youtube.com/watch?v=ZO5YPoIIKYU&list=PLuHgQVnccGMA4uSig3hCjl7wTDeyIeZVU&index=20>
<https://opentutorials.org/module/532/4724>
