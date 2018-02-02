$(document).ready(function() {

    $(function(){
        $('#mainLogo').hover(function()
        {
            $(this).attr('src', './images/menuBtn.png');
        }, 
        function() {
            $(this).attr('src', './images/mainLogo.png');
        })
    });



});
