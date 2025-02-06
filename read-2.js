'use strict';

{

  function callback(entries,obs){
    entries.forEach(entry =>{
      if(!entry.isIntersecting){
        return;
      }
      else{
        entry.target.classList.add("appear");
      obs.unobserve(entry.target);
      }

      // entry.view.classList.add("appear");
      // obs.unobserve(entry.view);
      // entry.head.classList.add("appear");
      // obs.unobserve(entry.head);
    });
  }

  const options={
    threshold:0.1,    //20%超えた場合
  };

  const observer = new IntersectionObserver(callback,options);   //場所取得
  const targets = document.querySelectorAll(".k");  //監視する3つ物取得

  targets.forEach(target => {  //1つ1つバラバラにして
    observer.observe(target); //observe()でobserverに入ればtargetを監視対象内に
  });

  // トップボタン
  {
    function scrollCallback(entries) {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          header.classList.add("scrolled");
          toTop.classList.add("scrolled");
        } else {
          header.classList.remove("scrolled");
          toTop.classList.remove("scrolled");
        }
      });
    }

    const toTop =document.getElementById("to_top");
    const header = document.querySelector("header");

    toTop.addEventListener("click",e=>{
      e.preventDefault();    
      window.scrollTo({
        top:0,
        behavior:"smooth",
      });
    })

    const scrollObserver = new IntersectionObserver(scrollCallback);
    scrollObserver.observe(document.getElementById("target-3"));
  }
// ↑トップボタンここまで


}