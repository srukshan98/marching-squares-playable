import { Position } from './position';

export class Player {
    position = new Position(Math.random() * 100, Math.random() * 100);;
    velocity = new Position(0,0);

    initialiseMovement() {
        document.addEventListener('keydown', (event) => {
            if (event.keyCode === 37) {
                this.velocity.x = -.5;
            }
            if (event.keyCode === 38) {
                this.velocity.y = -.5;
            }
            if (event.keyCode === 39) {
                this.velocity.x = .5;
            }
            if (event.keyCode === 40) {
                this.velocity.y = .5;
            }
        });
        document.addEventListener('keyup', (event) => {
            if (event.keyCode === 37) {
                this.velocity.x = 0;
            }
            if (event.keyCode === 38) {
                this.velocity.y = 0;
            }
            if (event.keyCode === 39) {
                this.velocity.x = 0;
            }
            if (event.keyCode === 40) {
                this.velocity.y = 0;
            }
        });
    }

    move() {
        this.position.x+=this.velocity.x;
        this.position.y+=this.velocity.y;
    }
}