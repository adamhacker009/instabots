$ = (id) => document.querySelector(id)
let answer = document.createElement('div')
answer.className = 'question__body'
answer.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa mi aliquet eu interdum eu pellentesque amet, fermentum hendrerit. Nunc hendrerit nec risus adipiscing lacus, lobortis lectus cursus nunc. Id pellentesque dapibus eu tincidunt dui id tortor, porttitor. Tincidunt nunc praesent euismod in nisl, tellus suspendisse morbi nam. Egestas eget erat malesuada gravida. Et enim integer quam orci, cursus tincidunt mauris, sit.'


window.onload = () => {
    // $('.header__burger_button').firstElementChild.addEventListener('click', function(){
    //     if($("#burger-hidden")){
    //         $("#burger-hidden").id = 'burger-show'
    //         $("main").style.display = 'none'
    //         $(".footer").style.display = 'none'
    //     } else {
    //         $("#burger-show").id = 'burger-hidden'
    //         $("main").style.display = 'block'
    //         $(".footer").style.display = "block"
    //     }
    // })
    const reviews = document.querySelectorAll('.review');
    reviews.forEach(review => {
        review.addEventListener('click', function(){
            const review1 = $('.review1');
            const review2 = $('.review2');
            const review3 = $('.review3');
            const review4 = $('.review4');
            review1.className = 'review review2'
            review2.className = 'review review3'
            review3.className = 'review review4'
            review4.className = 'review review1'
        })
    })
    document.querySelectorAll('.question').forEach(review => {
        review.addEventListener('click', function(){
            if (review.querySelector('.question__head-closed')){
                review.querySelector('.question__head-closed').className = 'question__head'
                review.querySelector('.question__button-closed').className = 'question__button'
                review.querySelector('.question__body').style.padding= '1rem 3rem 1.5rem 1.5rem'
                review.querySelector('.question__body').style.height = review.clientHeight+'px'
            }
            else
            {
                review.querySelector('.question__button').className = 'question__button-closed'
                review.querySelector('.question__body').style.padding= '0 0 0 0'
                review.querySelector('.question__body').style.height = '0'
                review.querySelector('.question__head').className = 'question__head-closed'
            }
        })
    })
}
