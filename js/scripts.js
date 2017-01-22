$('body').on('click', '.slider h3', function(){
    $(this).next('p').slideToggle(200);
})