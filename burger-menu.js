document.addEventListener('DOMContentLoaded',(e) => {
    document.querySelector('.nav__btn').addEventListener('click', ()=>{
        document.querySelector('.header__nav-mobile').classList.toggle('active');
    })
})