$ = (id) => document.querySelector(id)

const advantages = document.querySelectorAll('.advantage')
const reviews = document.querySelectorAll('.review');
const workInfo = document.querySelectorAll('.work-info__select')

$('.header__burger-button').addEventListener('click', function(){
    if($(".header-burger_hidden")){

        $(".header-burger_hidden").classList.replace("header-burger_hidden","header-burger_show")
        $(".header__burger-line_big").classList.toggle('header__burger-line_big_pressed')
        document.querySelectorAll(".header__burger-line_small").forEach(el=>{
            el.classList.toggle("header__burger-line_small_pressed")
        })
        $("main").classList.toggle('main_hidden')
        $(".footer").style.display = 'none'
        setTimeout(()=>{
            $('main').style.display="none"
        },25)
    } else {
        $(".header-burger_show").classList.replace("header-burger_show", "header-burger_hidden")
        $("main").classList.remove('main_hidden')
        $(".footer").style.display = "block"
        $(".header__burger-line_big_pressed").classList.remove('header__burger-line_big_pressed')
        document.querySelectorAll(".header__burger-line_small_pressed").forEach(el=>{
            el.classList.remove("header__burger-line_small_pressed")
        })
        setTimeout(()=>{
            $('main').style.display="block"
        },25)
    }
})


const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            switch (entry.target.className) {
                case 'fair-price__container':
                    $('.fair-price__container').querySelector('.image').style.transform = 'rotate(15deg)'
                    break

            }
        } else {
            switch (entry.target.className) {
                case 'fair-price__container':
                    $('.fair-price__container').querySelector('.image').style.transform = 'rotate(0deg)'
                    break

            }
        }
    })
})

reviews.forEach(review => {
    review.addEventListener('click', function () {
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

workInfo.forEach((selector, id) => {
    selector.addEventListener('click', function () {
        switch (id) {
            case 0:
                $(".how-we-work__slide-1").style.transform = 'translateX(0)'
                $(".how-we-work__slide-2").style.transform = 'translateX(-100%)'
                $(".how-we-work__slide-3").style.transform = 'translateX(150%)'
                break
            case 1:
                $(".how-we-work__slide-1").style.transform = 'translateX(-100%)'
                $(".how-we-work__slide-2").style.transform = 'translateX(0)'
                $(".how-we-work__slide-3").style.transform = 'translateX(150%)'
                break
            case 2:
                $(".how-we-work__slide-1").style.transform = 'translateX(-100%)'
                $(".how-we-work__slide-2").style.transform = 'translateX(-100%)'
                $(".how-we-work__slide-3").style.transform = 'translateX(0)'
                break
        }
        workInfo.forEach(elem => {
            elem.className = 'work-info__select'
            elem.disabled = ''
        })
        selector.className = 'work-info__select work-info__select_high-light'
        selector.disabled = 'disabled'
    })
})

advantages[0].querySelector('.advantage__emoji').addEventListener('mouseover', function () {
    advantages[0].querySelector('.advantage__emoji').src = './images/imgs/nerd-gif.gif'
})
advantages[0].querySelector('.advantage__emoji').addEventListener('mouseout', function () {
    advantages[0].querySelector('.advantage__emoji').src = './images/imgs/emoji1.png'
})
advantages[1].querySelector('.advantage__emoji').addEventListener('mouseover', function () {
    advantages[1].querySelector('.advantage__emoji').src = './images/imgs/bueww-gif.gif'
})
advantages[1].querySelector('.advantage__emoji').addEventListener('mouseout', function () {
    advantages[1].querySelector('.advantage__emoji').src = './images/imgs/Emoji.png'
})
advantages[2].querySelector('.advantage__emoji').addEventListener('mouseover', function () {
    advantages[2].querySelector('.advantage__emoji').src = './images/imgs/cool-gif.gif'
})
advantages[2].querySelector('.advantage__emoji').addEventListener('mouseout', function () {
    advantages[2].querySelector('.advantage__emoji').src = './images/imgs/Emoji3.png'
})

document.querySelectorAll('.question').forEach(review => {
    review.addEventListener('click', function () {
        if (review.querySelector('.question__head-closed')) {
            review.querySelector('.question__head-closed').className = 'question__head'
            review.querySelector('.question__button-closed').className = 'question__button'
            review.querySelector('.question__body').style.padding = '1rem 3rem 1.5rem 1.5rem'
            review.querySelector('.question__body').style.height = review.clientHeight + 'px'
        } else {
            review.querySelector('.question__button').className = 'question__button-closed'
            review.querySelector('.question__body').style.padding = '0 3rem 0 1.5rem'
            review.querySelector('.question__body').style.height = '0'
            review.querySelector('.question__head').className = 'question__head-closed'
        }
    })
    review.addEventListener('mouseover', function () {
        if (review.querySelector('.question__head-closed')) {
            review.querySelector('.question__button-closed').style.transform = 'rotate(0)'
        }
    })
    review.addEventListener('mouseout', function () {
        if (review.querySelector('.question__head-closed')) {
            review.querySelector('.question__button-closed').style.transform = 'rotate(-45deg)'
        }
    })
})


$('.reviews__button').addEventListener('click', function () {
    const reviews = document.querySelectorAll('.review')
    reviews.forEach(review => {
        review.style.opacity = '0'
    })

    setTimeout(function () {
        const reviews__inner = $('.reviews__inner')
        reviews__inner.style.display = 'grid'
        reviews__inner.style.gridTemplateColumns = '1fr 1fr'
        reviews__inner.style.gridTemplateRows = '1fr 2fr 2fr 1fr'
        reviews__inner.style.gap = '1.5rem'
        $('.reviews__button').style.display = 'none'

        reviews.forEach(review => {
            review.style.transition = 'opacity 0.5s ease'
            review.style.transform = 'translateX(0)'
            review.style.position = 'static'
            review.style.opacity = '100%'
        })

        $('.reviews__button_pos').style.justifyContent = 'center'
        $('.reviews__button_pos').style.alignItems = 'center'
        $('.reviews__cats-structured').style.opacity = '100'
    }, 500)
})
observer.observe($(".fair-price__container"))