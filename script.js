var time = 15;
var clicks = 0;
var highClicks = 0;
var timer = setInterval(myClock, 1000)
function myClock(){
    document.getElementById("CountDown").innerHTML = --time
}


document.getElementById("Button").onclick = function plusOne()
{
    clicks++;
    document.getElementById("Clicks").innerHTML = clicks;
    console.log(clicks)
    if (clicks > highClicks)
    {
        highClicks++
    }
}

if (clicks > localStorage.getItem("highClicks"))
{
    localStorage.setItem("highClicks", score);
}