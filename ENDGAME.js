//localStorage.setItem('name','OLEG')

// if (localStorage.getItem('value')) {
// 	$("h1").text(localStorage.getItem('value'))
// }
// else{
// 	$("h1").text("localStorage отсутствует")
// }
// $("#go").click(function(event) {
// var value = $("#input").val()
// localStorage.setItem('value',value)
// });

$(".all div").click(function(event) {
$("body").removeClass()
var color = $(this).attr('class')
localStorage.setItem('color',color)
$("body").addClass(color)
});
if (localStorage.getItem('color')) {
	$("body").addClass(localStorage.getItem('color'))
}
else{
	$("body").addClass('color')
}