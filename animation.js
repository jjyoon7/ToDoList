const tl = new TimelineMax();

function animate() {
    tl.addLabel('start')
    .from('.toDoBody', 1, { autoAlpha: 0, y:50, ease: Back.easeout }, 'start')
    .from('.toDoLeftDiv', 0.8, {autoAlpha: 0, x:40, ease:Back.easeOut}, 'start+=0.7')
    .from('.doneDiv', 0.8, {autoAlpha: 0, x:-40, ease:Back.easeOut}, 'start+=0.7')
}


function init() {
    animate();
}

init();