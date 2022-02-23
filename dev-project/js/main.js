'use strict';
{
  const btn = document.getElementById('btn');

  btn.addEventListener('click',() => {
    const results = ['大吉','中吉','小吉','末吉'];
  
    const n = Math.random();
    if ( n < 0.1){
      btn.textContent = '大吉';
    } else if ( n < 0.8){
      btn.textContent = '中吉';
    }else {
      btn.textContent = '凶';
    }
  //   const n = Math.floor(Math.random() * results.length);
  // btn.textContent = results[n];
  // switch (n){
  //   case 0 :
  //   btn.textContent = '大吉 ';
  //   break;
  //   case 1 :
  //   btn.textContent = '中吉 ';
  //   break;
  //   case 2 :
  //   btn.textContent = '小吉 ';
  //   break;
  // }

  });
}