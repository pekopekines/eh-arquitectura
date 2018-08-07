$( ".worker" ).click(function() {
    if (  $( this ).css( "transform" ) == 'none' ){
        $(this).css("transform","rotate(360deg)");
    } else {
        $(this).css("transform","" );
    }
});