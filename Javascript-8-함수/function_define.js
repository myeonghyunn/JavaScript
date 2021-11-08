var get_number = function () {
    i = 0;
    while(i < 10) {
      document.write(i);
      i += 1;
    }
  }
  getnumber();    //0123456789
  
  
  (function () {
    i = 0;
    while(i < 10) {
      document.write(i);
      i += 1;
    }
  })();   //0123456789, 익명함수_일회성함수
  
  