var randomNumber1=Math.floor((6*Math.random())+1);
document.querySelector(".img1").setAttribute("src","./images/dice"+randomNumber1+".png");

var randomNumber2=Math.floor((6*Math.random())+1);
document.querySelector(".img2").setAttribute("src","./images/dice"+randomNumber2+".png");

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="👑 Player 1 Wins!"
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 Wins! 👑"
}
else{
    document.querySelector("h1").innerHTML="Draw! 🏳️"
}
