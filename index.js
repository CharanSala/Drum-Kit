for(var i=0;i<7;i++)
{
    document.querySelectorAll("button")[i].addEventListener("click",function()
    { 
       
       var buttoninnerhtml=this.innerHTML; 
       buttonanimation(buttoninnerhtml);
       switch (buttoninnerhtml)
       {
            case "w":
                var audio1=new Audio("./sounds/tom-1.mp3");
                audio1.play();
                break; 
            case "a":
                var audio2=new Audio("./sounds/tom-2.mp3");
                audio2.play();
                break;
            case "s":
                var audio3=new Audio("./sounds/tom-3.mp3");
                audio3.play();
                break;
            case "d":
                var audio4=new Audio("./sounds/tom-4.mp3");
                audio4.play();
                break;
            case "j":
                var audio7=new Audio("./sounds/snare.mp3");
                audio7.play();
                break;
            case "k":
                var audio5=new Audio("./sounds/crash.mp3");
                audio5.play();
                break;
            case "l":
                var audio6=new Audio("./sounds/kick-bass.mp3");
                audio6.play();
                break;
                    
            default :

       } 

        
    });

}
document.addEventListener("keypress", function(event)
{
    buttonanimation(event.key);
    switch (event.key)
    {
            case "w":
                var audio1=new Audio("./sounds/tom-1.mp3");
                audio1.play();
                break; 
            case "a":
                var audio2=new Audio("./sounds/tom-2.mp3");
                audio2.play();
                break;
            case "s":
                var audio3=new Audio("./sounds/tom-3.mp3");
                audio3.play();
                break;
            case "d":
                var audio4=new Audio("./sounds/tom-4.mp3");
                audio4.play();
                break;
            case "j":
                var audio7=new Audio("./sounds/snare.mp3");
                audio7.play();
                break;
            case "k":
                var audio5=new Audio("./sounds/crash.mp3");
                audio5.play();
                break;
            case "l":
                var audio6=new Audio("./sounds/kick-bass.mp3");
                audio6.play();
                break;
                    
            default :

    }
});

function buttonanimation(key)
{
    document.querySelector("."+key).classList.add("animation"); 

    setTimeout(function(){
        document.querySelector("."+key).classList.remove("animation");
    },300);
}
