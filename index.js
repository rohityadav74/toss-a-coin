var random1=Math.floor(Math.random()*2) + 1;
var randomImg=random1 + ".jpeg";
// document.querySelectorAll("img")[0].setAttribute("src",randomImg);

document.querySelectorAll("img")[0].addEventListener("click",function(){
    document.querySelectorAll("img")[0].classList.add("flip");
    document.querySelectorAll("img")[0].setAttribute("src",randomImg);
    var winnerName="user_input"+random1;
    const results=document.getElementById(winnerName);
    function Display(){
        let text=results.value+"🎉";
        document.getElementById("show").innerHTML=text;
    }
    Display();
});


function refreshPage(){
    window.location.reload();
}