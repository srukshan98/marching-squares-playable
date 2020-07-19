import { board } from './../constants/board';

export const drawRect = function (position, width, height, color = 'black') {
    if (color) {
        board.fillStyle = color;
    }
    board.fillRect(position.x, position.y, width, height);
}

export const drawDot = function (position, color = 'black') {
    if (color) {
        board.fillStyle = color;
    }
    board.beginPath();
    (board as CanvasRenderingContext2D).arc(position.x, position.y, 1, 0, 2 * Math.PI, true);
    board.fill();
}

export const drawLine = function (position0, position1, color = 'black') {
    if (color) {
        board.fillStyle = color;
        board.strokeStyle = color;
    }
    board.beginPath();
    (board as CanvasRenderingContext2D).beginPath();
    (board as CanvasRenderingContext2D).moveTo(position0.x, position0.y);
    (board as CanvasRenderingContext2D).lineTo(position1.x, position1.y);
    (board as CanvasRenderingContext2D).stroke();
    board.fill();
}