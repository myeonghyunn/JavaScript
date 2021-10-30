#  2021.10.20(SAT) JavaScript-비교(1/4)
## 연산자

>### Reference

<https://www.youtube.com/watch?v=Vzrl1lsQ1Ok&list=PLuHgQVnccGMA4uSig3hCjl7wTDeyIeZVU&index=13>
<https://opentutorials.org/module/532/4722>

# JavaScript-비교(2/4)
## ==과 ===

```javascript
alert(2==7);   //false
alert(1==1);   //true
alert("two" == "six");    //false
```

```javascript
alert(1=='1');    //true
alert(1==='1');   //false
```
===는 서로 같은 수를 표현하고 있다고해도 데이터 형식까지 같은 경우에만 같다고 표현한다.
== 연산자대신 === 연산자를 자주 사용하는 연습이 필요하다.

>### Reference

<https://www.youtube.com/watch?v=jl_NfQv9Zr8&list=PLuHgQVnccGMA4uSig3hCjl7wTDeyIeZVU&index=14>
<https://opentutorials.org/module/532/4722>


# JavaScript-비교(3/4)
## ===를 사용하자!

```javascript
alert(null == undefined);   //true
alert(null === undefined);    //false
alert(true == 1);   //true
alert(true === 1);    //false
alert(true === '1');    //true
alert(0 === -0);    //true
alert(NaN === NaN);   //false
```


>### Reference

<https://dorey.github.io/JavaScript-Equality-Table/>
<https://www.youtube.com/watch?v=rN0045zf-y4&list=PLuHgQVnccGMA4uSig3hCjl7wTDeyIeZVU&index=15>
<https://opentutorials.org/module/532/4722>


# JavaScript-비교(4/4)
## 부정과 부등호

```javascript
alert(1!=2);    //true
alert(2!=2);    //false
alert(20>30);   //false
alert(20>20);   //false
alert(10>=20);    //false
alert(10>=10);    /true
```


>### Reference

<https://www.youtube.com/watch?v=eVrqPPq8bZg&list=PLuHgQVnccGMA4uSig3hCjl7wTDeyIeZVU&index=16>
<https://www.youtube.com/watch?v=eVrqPPq8bZg&list=PLuHgQVnccGMA4uSig3hCjl7wTDeyIeZVU&index=16>
