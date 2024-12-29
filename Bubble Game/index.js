let str = "";
let score = 0;
let h = 0;
let chance = 4;
let interval;
function makebubble() {
  let str = "";
  for (let i = 1; i <= 184; i++) {
    str += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`;
  }
  document.querySelector("#panel-btm").innerHTML = str;
}
function timer() {
  let timer = 60;
  interval = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timer").textContent = timer;
    }
     else {
      clearInterval(interval);
      change();

    }
  }, 1000);
}
function hit() {
  h = Math.floor(Math.random() * 10);
  document.querySelector("#hit-button").textContent = h;
}
function IncScore() {
  score += 5;
  document.querySelector("#Score").textContent = score;
}
document.querySelector("#panel-btm").addEventListener("click", function (val) {
  let hitval = Number(val.target.textContent);
  if (Number(h) == hitval) {
    IncScore();
    hit();
    makebubble();
  }
   else if(hitval>=0 && hitval<=9) {
    chance--;
    if(chance<=0){
        document.querySelector("#chance").textContent = 0;
        clearInterval(interval);
        change();
    }
    else{
    document.querySelector("#chance").textContent = chance;
    }
  }
});
function change(){
    let alt=`<h1 class="end-game" style="font-size:80px;color:red">Game Over</h1>;
    <br>
    <h1 class="end-game">Score : ${score}</h1>`;
    let styles="display:block; box-sizing:border-box;padding-top:100px;";
    document.querySelector("#panel-btm").innerHTML=alt;
    document.querySelector("#panel-btm").style.cssText=styles;
    document.querySelector("#timer").textContent = 0;
}
makebubble();
hit();
timer();
