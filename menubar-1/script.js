
// JAVASCRIPT

// const bar = document.querySelector("#bar");
// const navLinks = document.querySelector(".navbar");

// bar.addEventListener('click', () => {
//     navLinks.classList.toggle("open");
// })


// JQUERY


$(document).ready(function(){
    $('#bar').click(function(){
        $('ul').toggleClass('open')
    })
})