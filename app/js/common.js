$(function() {

	$("#my-menu").mmenu({
		extensions: [
			 "theme-dark",
			 "position-right",
			 "pagedim-black",
			 "shadow-page",
			 "shadow-panels",
			 "border-full",
			 "fx-listitems-slide"
		],
		navbar:
			{
				 position: "top",
				 title: '<img src="../img/main-design/logotype-small.png" alt="q">'
			},
		offCanvas: {
			pageSelector: "#my-wrapper",
			position: "right"
	 },

		classNames: {
			 fixedElements: {
					fixed: "Fixed",
					sticky: "stick"
			 }
		}

 });
	var api = $('#my-menu').data('mmenu');
	api.bind('open:start', function() {
		$('.hamburger').addClass('is-active');
	}).bind('close:finish', function() {
		$('.hamburger').removeClass('is-active');
	})
});

$(function(){
    $(window).scroll(function() {
        if($(this).scrollTop() >= 32) {
            $('.up-menu').addClass('stickytop');
            $('.logotype').addClass('small-logo');
            $('.hamburg').addClass('sticky-hamburg');
            $('.heading').addClass('heading-small');
            $('.mm-menu').addClass('mmenu-small');
        }
        else{
            $('.up-menu').removeClass('stickytop');
						$('.logotype').removeClass('small-logo');
						$('.hamburg').removeClass('sticky-hamburg');
						$('.heading').removeClass('heading-small');
						$('.mm-menu').removeClass('mmenu-small');
        }
    });
});

$("img, a").on("dragstart", function(event) { event.preventDefault(); });

$(function () { // Когда страница загрузится
	$('.menu-a a').each(function () { // получаем все нужные нам ссылки
	var location = window.location.href; // получаем адрес страницы
	var link = this.href; // получаем адрес ссылки
	if(location == link) { // при совпадении адреса ссылки и адреса окна
	$(this).parent().addClass('active'); //добавляем класс
	}
	});
	});

