import { Maze } from './models/maze';
import { canvas } from './constants/board';
import { Player } from './models/player';
import { drawDot } from './functions/drawables';

var width, height;
let maze: Maze;
const dist = 8;
let player;

export function setup() {
    width = canvas.width;
    height = canvas.width;
    
    maze = new Maze(width, height, dist);

    player = new Player();
    player.initialiseMovement();
}

export function draw() {
    maze.draw();
    drawDot(player.position, 'red');
    player.move();
}