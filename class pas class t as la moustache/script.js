// je rajoute la class plein aux figures ayant la class élement, class plein dans le CSS //

function toutremplir () {
	$('.elements').addClass('plein');
}
// idem mais a l envers //
function toutvider () {
	$('.elements').removeClass('plein');
}
// lorsque je clik sur une figure de class rond je rajoute ou j enleve la class plein //
$('.rond').click(function() {
	$(this).toggleClass('plein');
});

// l orsque je clik sur le carré de la colone 1 je rajoute ou j enléve la class plein de tous les elements frere de la liste //
$('.carre.col1').click(function() {
	
	$(this).siblings().toggleClass('plein');
	$('.col1').toggleClass('plein');
});

$('.carre.col2').click(function() {
	
	$(this).siblings().toggleClass('plein');
	$('.col2').toggleClass('plein');
});
// quand je clique sur losange on rajoute ou on enléve la class plein a tt les elements de la liste et a tt les elements de la colone 3 //
$('.losange').click(function() {
	$(this).toggleClass('plein');
	$(this).siblings().toggleClass('plein');
	if($('.carre').hasClass('plein')){
	$('.col3').addClass('plein');
	} 
});

$('.carre.col4').click(function() {
	
	$(this).siblings().toggleClass('plein');
	$('.col4').toggleClass('plein');
});

$('.carre.col5').click(function() {
	
	$(this).siblings().toggleClass('plein');
	$('.col5').toggleClass('plein');
});