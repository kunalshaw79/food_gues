fec=()=>{
    fetch('https://foodish-api.herokuapp.com/api/').then(res => res.json()).then(data =>cnge(data));
};
fec();
 window.score =0;
var i=0;
var scorebox =document.getElementById('scr');
console.log(score);
cnge=(data)=>{
    document.getElementById('image').src=data.image;
};
document.getElementById('btn').addEventListener('click',check =()=>{

    food= document.getElementById('image').src.split('/')[4]
   txt_in = document.getElementById('txt_in').value;
   if(food===txt_in)
    {
        window.score++;
        scorebox.innerText=window.score;
        document.getElementById('popup').style.display="inherit";
        myFun();
        document.getElementById('ans').innerHTML=`correct answer`
        document.getElementById('txt_in').value="";
        fec();
    }else{
        fec();
        myFunincor();
        document.getElementById('ans').innerHTML=`incorrect answer & corrext answer is ${food}`
        document.getElementById('txt_in').value="";
    }
});
function myFun() {
    var x = document.getElementById("popup");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", "");
    document.getElementById('ans').innerHTML=``;
}, 2000);
  }
function myFunincor() {
    var x = document.getElementById("popup");
    x.className = "incor";
    setTimeout(function(){ x.className = x.className.replace("incor", "");
    document.getElementById('ans').innerHTML=``;
}, 2000);
  }
  hola=()=>{
    var high_score = 0;
      console.log('hoal')
      if (localStorage.getItem("high") == undefined) {
        high_score = window.score;
        localStorage.setItem("high", JSON.stringify(high_score));
      } else if(localStorage.getItem("high") != undefined || localStorage.getItem("high") != null) {
        if (window.score < high_score) {
          console.log("jai shree ram");
        } else if (window.score > high_score) {
          high_score = window.score;
          localStorage.setItem("high", JSON.stringify(high_score));
        }
        document.getElementById("highscore").innerText = JSON.parse(localStorage.getItem("high"));
        // console.log(new_high_score);
  }
    //******************************************************************* */
    }
    hola();