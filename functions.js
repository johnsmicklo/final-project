$artboard = $('#artboard');
$context = $artboard[0].getContext('2d');
$xpos = 0;
$ypos = 0;
$prevx = 0;
$prevy = 0;
$x = 'black';
$w = $artboard.width();
$h = $artboard.height();


function init() {
	$artboard.mousemove(function(e) {
		findPos(e);
	});
	$artboard.mousemove(function(e) {
		
	});
}
function findPos(e) {
	e = (e || event);
	$context.beginPath();
	$context.fillStyle = 'black';
	$context.fillRect($currentx, $currenty, 2, 2);
	$context.closePath();
	draw();
}
function draw() {
    $context.beginPath();
    $context.moveTo(prevx, prevx);
    $context.lineTo(currentx, currenty);
    $context.strokeStyle = 'black';
    $context.lineWidth = 2;
    $context.stroke();
    $context.closePath();
}
$(document).ready(function() {
	init();
});
