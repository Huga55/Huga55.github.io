
$(".header__video").click(function() {
	$(this).attr("controls", "");
	console.log(1);
})


$(document).ready(function() {
    $('html, body, *').mousewheel(function(e, delta) {
    	let width = document.documentElement.clientWidth;
        // multiplying by 40 is the sensitivity, 
        // increase to scroll faster.
        console.log(delta);
        this.scrollLeft -= (delta * width/4);
        e.preventDefault();
    });
});