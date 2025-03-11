$ = (id) => document.querySelector(id)

window.onload = () => {
    $('#header__burger_button').addEventListener('click', function(){
        if($("#burger-hidden")){
            $("#burger-hidden").id = 'burger-show'
            $("main").style.display = 'none'
            $(".footer").style.display = 'none'
        } else {
            $("#burger-show").id = 'burger-hidden'
            $("main").style.display = 'block'
            $(".footer").style.display = "block"
        }
    })
}