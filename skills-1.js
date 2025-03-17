'use strict';

// カルーセル
{
  const next = document.getElementById('next');
  const prev = document.getElementById('prev');
  const pic = document.querySelector('.pic');
  const slides = pic.children;  /*  children = 子要素を全て取得  */
  const dots = [];
  let currentIndex = 0;
  

  function updateButtons() {          /*  updateButtons = ボタンの状態を更新するための関数  */
    prev.classList.remove('hidden');  /*  ifに該当しない時は hidden を外せばいい→ prev と next に classList.remove('hidden')  */
    next.classList.remove('hidden');

    if (currentIndex === 0){
      prev.classList.add('hidden');
    }
    // if (currentIndex === 2)
    if (currentIndex === slides.length - 1) {
      next.classList.add('hidden');   /*  画像の枚数が変わるたびこれを更新するのも面倒→slides.length で表現。今 slides.length は3→2を表現するには slides.length - 1  */
    }
  }

  function moveSlides() {
    const slideWidth = slides[0].getBoundingClientRect().width;  /*  getBoundingClientRect() = 要素に関する情報を取得  */
    pic.style.transform = `translateX(${-1 * slideWidth * currentIndex}px)`;    /*  style.transform = ulをずらす操作  */   /*  -1:スライドをマイナス方向に1つ移動させる動作  */
  };

  function setupDots() {
    for (let i = 0; i < slides.length; i++) {     /*  画像の数だけボタンを作りたいからループを回す  */
      const button = document.createElement('button');
      button.addEventListener('click', () => {    /*  クリックイベント  */
        currentIndex = i;
        updateDots();
        updateButtons();
        moveSlides();
      });
      dots.push(button);
      document.querySelector('.dt').appendChild(button);
    }

    dots[0].classList.add('current');
  }

  function updateDots() {
    dots.forEach(dot => {
      dot.classList.remove('current');    /*  一旦全ての要素に対してcurrentクラスを削除  */
    });
    dots[currentIndex].classList.add('current');    /*  今クリックされたボタンに対してだけ current クラスを付ける  */
    }

  updateButtons();
  setupDots();

  next.addEventListener('click', () => {
    currentIndex++;
    updateButtons();    /*  最初に currentIndex が0の時に prev を消しておきたいので、ページを読み込んだ直後に実行  */
    updateDots();
    moveSlides();
  });

  prev.addEventListener('click', () => {
    currentIndex--;
    updateButtons();    /*  最初に currentIndex が0の時に prev を消しておきたいので、ページを読み込んだ直後に実行  */
    updateDots();
    moveSlides();
  });

  window.addEventListener('resize', () => {
    moveSlides;
  });
}