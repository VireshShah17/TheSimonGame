$('h1').click(function(){
    $('h1').css('color', 'red');
});
$('button').click(function(){
    $('h1').css('color', 'red');
});
$('body').keypress(function(event){
    $('h1').text(event.key);
})