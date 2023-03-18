(function(){
 var screen=document.querySelector(".screen");
 var buttons=document.querySelectorAll(".btn");
 var equal=document.querySelector(".btn-greya");
 var clear = document.querySelector(".btn-greyb");
 

buttons.forEach(function(button){
    button.addEventListener('click', function(e){
        let value = e.target.dataset.num;
        screen.value += value;
    })
});

equal.addEventListener("click", function(e){
    if(screen.value === ""){
        screen.value=""
    }else{
        var answer = eval(screen.value);
        screen.value = answer;
    }
})

clear.addEventListener("click", function(e){
    screen.value = "";
})
})();


