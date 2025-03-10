$ = (id) => document.querySelector(id)

window.onload = () => {
    $('#header__burger_button').addEventListener('click', function(){
        $('main').style.cssText = "display: none"
    })
}