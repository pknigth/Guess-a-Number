var guess = Math.floor(Math.random()*100) +1

function calc()
{
    if(document.getElementById("in").value == '')
    {
        document.getElementById("out").innerHTML = "<h2>Please enter a Number</h2>"
        return
    }

    var n = parseInt(document.getElementById("in").value)
    if(n === guess)
        document.getElementById("out").innerHTML = "<h2>Congrats, Thats the correct Number!!!</h2>"
    else if(n > guess)
        document.getElementById("out").innerHTML = "<h2>Guess a Smaller Number</h2>"
    else if(n < guess)
        document.getElementById("out").innerHTML = "<h2>Guess a Greater Number</h2>"
}