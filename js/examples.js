
$('.second.circle').circleProgress({
    value: 0.8,
    lineCap: 'round',
    fill: { gradient: ['#ffea00', '#00ffcc'] },
    emptyFill:'#d7d7d7',
    thickness:14,
    startAngle:0
}).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(parseInt(80 * progress) + '<i>%</i>');
});
