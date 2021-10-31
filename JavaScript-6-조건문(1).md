# 2021.10.30(SAT) JavaScript-조건문(1/5)
## 조건문이란
주어진 조건에 따라서 애플리케이션을 다륵 동작하도록 하는 것이다.

```javascript
if(true){
    alert(1);
    alert(2);
    alert(3);
    alert(4);
}
alert(5);   
```

```javascript
if(false){
    alert(1);
    alert(2);
    alert(3);
    alert(4);
}
alert(5);
```

>### Reference

<https://www.youtube.com/watch?v=iLLYfP06Dy4&list=PLuHgQVnccGMA4uSig3hCjl7wTDeyIeZVU&index=17>
<https://opentutorials.org/module/532/4724>


# JavaScript-조건문(2/5)
## else, else if

```javascript
if (false) {
    alert("false-1");
} else if (false) {
    alert("false-2");
} else if (true) {
    alert("true-1");
} else {
    alert("false-3");
}



```javascript
if (true) {
    alert("true-1");
} else if (false) {
    alert("false-1");
} else if (true) {
    alert("false-2");
} else {
    alert("false-3");
}
```

if, else, else if 문을 적절히 사용하여 'true-1' 값만 출력될 수 있도록 해보았다.



>### Reference

<https://www.youtube.com/watch?v=eVQctnRC0vA&list=PLuHgQVnccGMA4uSig3hCjl7wTDeyIeZVU&index=19>
<https://opentutorials.org/module/532/4724>
