
/* Горизонатльная прокрутка */

if($(".wrapper").css("display") !== "block") {
    $(document).ready(function() {
        $('html, body, *').mousewheel(function(e, delta) {
        	let width = document.documentElement.clientWidth;
            // multiplying by 40 is the sensitivity, 
            // increase to scroll faster.
            console.log(document.documentElement.clientHeight);
            this.scrollLeft -= (delta * width/4);
            e.preventDefault();
        });
    });
}

 $(".header__video").click(function() {
       
    $(this).attr("controls", "");
})