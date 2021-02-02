var total = 0;

function one(){
    var batsman = 1;

    document.getElementById('bat').innerHTML=batsman;

    var bowler = Math.floor(Math.random()*7);

    document.getElementById('bow').innerHTML= bowler;

    if(batsman==bowler)
    {
        alert("out!!!!!!");
        document.getElementById('score').innerHTML= 0;
        document.getElementById('main').innerHTML ="Previous Score "+ total;


        total = 0;

    }else {
       countit();
    }

    


function countit()
{
    total = total + batsman;
    document.getElementById('score').innerHTML = total;
    console.log(countit);
    document.getElementById('shot').innerHTML ="You Scored 1 run";
}
}


function two(){
    var batsman = 2;

    document.getElementById('bat').innerHTML=batsman;

    var bowler = Math.floor(Math.random()*7);

    document.getElementById('bow').innerHTML= bowler;

    if(batsman==bowler)
    {
        alert("out!!!!!!");
        document.getElementById('score').innerHTML= 0;
        document.getElementById('main').innerHTML ="Previous Score "+ total;
        total = 0;
    }else {
       countit();
    }

    


function countit()
{
    total = total + batsman;
    document.getElementById('score').innerHTML = total;
    document.getElementById('shot').innerHTML ="Fabulous, You Scored 2 runs,Keep Scoring ";
    console.log(countit);
}
}



function three(){
    var batsman = 3;

    document.getElementById('bat').innerHTML=batsman;

    var bowler = Math.floor(Math.random()*7);

    document.getElementById('bow').innerHTML= bowler;

    if(batsman==bowler)
    {
        alert("out!!!!!!");
        document.getElementById('score').innerHTML= 0;
        document.getElementById('main').innerHTML ="Previous Score "+ total;
        total = 0;
    }else {
       countit();
    }

    


function countit()
{
    total = total + batsman;
    document.getElementById('score').innerHTML = total;
    console.log(countit);
    document.getElementById('shot').innerHTML ="You Scored 3 runs";
}
}


function four(){
    var batsman = 4;

    document.getElementById('bat').innerHTML=batsman;

    var bowler = Math.floor(Math.random()*7);

    document.getElementById('bow').innerHTML= bowler;

    if(batsman==bowler)
    {
        alert("out!!!!!!");
        document.getElementById('score').innerHTML= 0;
        document.getElementById('main').innerHTML ="Previous Score "+ total;
        total = 0;
    }else {
       countit();
    }

    


function countit()
{
    total = total + batsman;
    document.getElementById('score').innerHTML = total;
    console.log(countit);
    document.getElementById('shot').innerHTML ="What a Stroke!! 4 runs";
}
}
   

function five(){
    var batsman = 5;

    document.getElementById('bat').innerHTML=batsman;

    var bowler = Math.floor(Math.random()*7);

    document.getElementById('bow').innerHTML= bowler;

    if(batsman==bowler)
    {
        alert("out!!!!!!");
        document.getElementById('score').innerHTML= 0;
        document.getElementById('main').innerHTML ="Previous Score "+ total;
        total = 0;
    }else {
       countit();
    }

    


function countit()
{
    total = total + batsman;
    document.getElementById('score').innerHTML = total;
    console.log(countit);
    document.getElementById('shot').innerHTML ="fiverrrr !! 5 runs";
}
}
function six(){
    var batsman = 6;

    document.getElementById('bat').innerHTML=batsman;

    var bowler = Math.floor(Math.random()*7);

    document.getElementById('bow').innerHTML= bowler;

    if(batsman==bowler)
    {
        alert("out!!!!!!");
        document.getElementById('score').innerHTML= 0;
        document.getElementById('main').innerHTML ="Previous Score "+ total;
        total = 0;
    }else {
       countit();
    }

    


function countit()
{
    total = total + batsman;
    document.getElementById('score').innerHTML = total;
    document.getElementById('shot').innerHTML ="Six!!! What a stroke";
    console.log(countit);
}
if (total >= 50) {
    document.getElementById('main').innerHTML ="Wohooo! CONGRATS YOU SCORED A FIFTY";
}else if(total >= 100){
    document.getElementById('main').innerHTML ="Wohooo! CONGRATS YOU SCORED A HUNDRED";
}

}