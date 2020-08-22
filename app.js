

var activePlayer,winner,isplaying,dom;
var c00,c01,c02,c10,c11,c12,c20,c21,c22; 

init();
document.getElementById("btn").addEventListener("click", _ => {
    window.location.reload();
});
function init()
{
c00=c01=c02=c10=c11=c12=c20=c21=c22=undefined;
isplaying = true;
activePlayer = 0 ;
document.getElementById("player-"+0).classList.remove("active");
document.getElementById("player-"+1).classList.remove("active");
document.getElementById("player-0").textContent = "player : 1";
document.getElementById("player-1").textContent = "player : 2";
document.getElementById("player-"+activePlayer).classList.add("active");
document.getElementById("player-0").classList.remove("winner");
document.getElementById("player-1").classList.remove("winner");
document.querySelector("#img-c00").style.display = "none";
document.querySelector("#img-c01").style.display = "none";
document.querySelector("#img-c02").style.display = "none";
document.querySelector("#img-c10").style.display = "none";
document.querySelector("#img-c11").style.display = "none";
document.querySelector("#img-c12").style.display = "none";
document.querySelector("#img-c20").style.display = "none";
document.querySelector("#img-c21").style.display = "none";
document.querySelector("#img-c22").style.display = "none";
}
document.querySelector(".c00").addEventListener('click',function() {
    if(isplaying)
    {
    if(c00 === undefined)
    {
    c00 = activePlayer;
    document.querySelector("#img-c00").src = "img-"+activePlayer+".png";
    checkWinner(activePlayer);
    document.querySelector("#img-c00").style.display = "block";
    }
}
});

document.querySelector(".c01").addEventListener('click',function() {
    if(isplaying)
    {
    if(c01 === undefined)
    {
    c01 = activePlayer;
    document.querySelector("#img-c01").src = "img-"+activePlayer+".png";
    checkWinner(activePlayer);
    document.querySelector("#img-c01").style.display = "block";
    }
    }
});
document.querySelector(".c02").addEventListener('click',function() {
    if(isplaying)
    {
    if(c02 === undefined)
    {
    c02 = activePlayer;
    document.querySelector("#img-c02").src = "img-"+activePlayer+".png";
    checkWinner(activePlayer);
    document.querySelector("#img-c02").style.display = "block";
    }
}
});
document.querySelector(".c10").addEventListener('click',function() {
    if(isplaying)
    {
        if(c10 === undefined)
        {
    c10 = activePlayer;
    document.querySelector("#img-c10").src = "img-"+activePlayer+".png";
    checkWinner(activePlayer);
    document.querySelector("#img-c10").style.display = "block";
    }
}
});
document.querySelector(".c11").addEventListener('click',function() {
    if(isplaying)
    {
        if(c11 === undefined)
        {
    c11 = activePlayer;
    document.querySelector("#img-c11").src = "img-"+activePlayer+".png";
    checkWinner(activePlayer);
    document.querySelector("#img-c11").style.display = "block";
    }
}
});
document.querySelector(".c12").addEventListener('click',function() {
    if(isplaying)
    {
        if(c12 === undefined)
        {
    c12 = activePlayer;
    document.querySelector("#img-c12").src = "img-"+activePlayer+".png";
    checkWinner(activePlayer);
    document.querySelector("#img-c12").style.display = "block";
    }
}
});
document.querySelector(".c20").addEventListener('click',function() {
    if(isplaying)
    {
        if(c20 === undefined)
        {
    c20 = activePlayer;
    document.querySelector("#img-c20").src = "img-"+activePlayer+".png";
    checkWinner(activePlayer);
    document.querySelector("#img-c20").style.display = "block";
    }
}
});
document.querySelector(".c21").addEventListener('click',function() {
    if(isplaying)
    {
        if(c21 === undefined)
        {
    c21 = activePlayer;
    document.querySelector("#img-c21").src = "img-"+activePlayer+".png";
    checkWinner(activePlayer);
    document.querySelector("#img-c21").style.display = "block";
    }
}
});
document.querySelector(".c22").addEventListener('click',function() {
    if(isplaying)
    {
        if(c22 === undefined)
        {
    c22 = activePlayer;
    document.querySelector("#img-c22").src = "img-"+activePlayer+".png";
    checkWinner(activePlayer);
    document.querySelector("#img-c22").style.display = "block";
    }
}
});


function checkWinner(active)
{
    if (c00 === active && c01 === active && c02 === active)
    {
        winner = active;
        isplaying = false;
        document.getElementById("player-"+active).classList.add("winner");
        document.getElementById("player-"+active).textContent = "Winner !";
    }
    else if (c10 === active && c11 === active && c12 === active)
    {
        winner = active;
        isplaying = false;
        document.getElementById("player-"+active).classList.add("winner");
        document.getElementById("player-"+active).textContent = "Winner !";
    }
    else if (c20 === active && c21 === active && c22 === active)
       { winner = active;
        isplaying = false;
        document.getElementById("player-"+active).classList.add("winner");
        document.getElementById("player-"+active).textContent = "Winner !";
        
       }
    else if (c00 === active && c10 === active && c20 === active)
      {
        isplaying = false;
        winner = active;
        document.getElementById("player-"+active).classList.add("winner");
        document.getElementById("player-"+active).textContent = "Winner !";
      }
    else if (c01 === active && c11 === active && c21 === active)
       { 
           winner = active;
           isplaying = false;
           document.getElementById("player-"+active).classList.add("winner");
           document.getElementById("player-"+active).textContent = "Winner !";
       }
    else if (c02 === active && c12 === active && c22 === active)
    {    
        winner = active;
        isplaying = false;
        document.getElementById("player-"+active).classList.add("winner");
        document.getElementById("player-"+active).textContent = "Winner !";    
    }
    else if (c00 === active && c11 === active && c22 === active)
      {  winner = active;
        isplaying = false;
        document.getElementById("player-"+active).classList.add("winner");
        document.getElementById("player-"+active).textContent = "Winner !";      
    }
    else if (c02 === active && c11 === active && c20 === active)
       {
        isplaying = false;
        winner = active;
        document.getElementById("player-"+active).classList.add("winner");
        document.getElementById("player-"+active).textContent = "Winner !";       
    }
    else{
        endGame();
        changePlayer();
        }
}

function changePlayer()
{
    dom=document.getElementById("player-"+activePlayer);
    dom.classList.toggle("active");
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    dom=document.getElementById("player-"+activePlayer);
    dom.classList.toggle("active");
}

function endGame()
{
    if((c00 != undefined) && (c01 != undefined) && (c02 != undefined) && (c10 != undefined) && (c11 != undefined) && (c12 != undefined) && (c20 != undefined) && (c21 != undefined) && (c22 != undefined))
    {
        if(isplaying)
        {
        isplaying = false;
        console.log("byyee2");
        document.getElementById("player-0").style.display = "none";
        document.getElementById("player-1").style.display = "none";
        document.getElementById("gameover").textContent = "Game Tie Play Again !";
        document.getElementById("gameover").style.display = "inline";
        }
    }
}
