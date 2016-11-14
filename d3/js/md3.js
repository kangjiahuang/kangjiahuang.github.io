var svgctrl = d3.select('svg');




var c1 = svgctrl.append('circle');
c1.attr('cx', 325).attr('cy', 150).attr('r', 150).attr('stroke', 'black').attr('stroke-width', 3).attr('fill', '#FFFFFF');

var c4 = svgctrl.append('circle');
c4.attr('cx', 250).attr('cy', 100).attr('r', 20).attr('stroke', 'black').attr('stroke-width', 3).attr('fill', '#FFFFFFF');
var c5 = svgctrl.append('circle');
c5.attr('cx', 400).attr('cy', 100).attr('r', 20).attr('stroke', 'black').attr('stroke-width', 3).attr('fill', '#FFFFFFF');

var c3 = svgctrl.append('circle');
c3.attr('cx', 250).attr('cy', 100).attr('r', 50).attr('stroke', 'black').attr('stroke-width', 3).attr('fill', '#FFFFFF').attr('id', 'kk');
var c2 = svgctrl.append('circle');
c2.attr('cx', 400).attr('cy', 100).attr('r', 50).attr('stroke', 'black').attr('stroke-width', 3).attr('fill', '#FFFFFF').attr('id', 'kk');
var p1 = svgctrl.append('polygon');
p1.attr('points', '250,200 400,200 325,230 ').attr('stroke', 'red').attr('stroke-width', 3).attr('fill', '#FFFFFF');



var $d = $('#kk');
$d.bind('click', function () {

    $('circle').eq(3).attr('cx', 150);
    $('circle').eq(4).attr('cx', 500);
    var i = (Math.floor(Math.random()*256)).toString(16);
    var j = (Math.floor(Math.random()*256)).toString(16);
    var k = (Math.floor(Math.random()*256)).toString(16);
    $('polygon').attr('fill', "#"+i+j+k);

})



$('button').bind('click', function () {
    
    $('circle').eq(3).attr('cx', 250);
    $('circle').eq(4).attr('cx', 400);
    $("#x").animate({ right: '-=100px'});
    $("#x").animate({ bottom: '-=50px' });
}
)

