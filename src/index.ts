import { board, canvas } from './constants/board';
import { draw, setup } from './app';


function doDraw() {
    // board.fillStyle = "gray";
    board.clearRect(0, 0, canvas.width, canvas.height);
    draw();
    board.strokeStyle = 'dark blue';
    board.strokeRect(0, 0, canvas.width, canvas.height);
    setTimeout(doDraw, 10);
}
if (setup) {
    setup();
}
doDraw();