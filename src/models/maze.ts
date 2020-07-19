import { Position } from './position';
import { drawDot, drawLine } from '../functions/drawables';


export function getState(e0: number, e1: number, e2: number, e3: number): number {
    return (8 * e3) + (4 * e2) + (2 * e1) + e0;
}

export class Maze {
    positions: number[][];
    width: number;
    height: number;
    divider: number;

    constructor(width: number, height: number, dist: number) {
        this.width = width;
        this.height = height;
        this.divider = dist;
        this.positions = [];

        this.initialise();
    }

    initialise(): void {
        for (let i = 0; i < (this.width / this.divider) + 1; i++) {
            let iarr: number[] = [];
            for (let j = 0; j < (this.height / this.divider) + 1; j++) {
                iarr[j] = Math.random() > .5 ? 1 : 0;
            }
            this.positions.push(iarr);
        }
    }

    draw(): void {
        for (let i = 0; i < (this.width / this.divider); i++) {
            for (let j = 0; j < (this.height / this.divider); j++) {
                const e0 = this.positions[i][j];

                drawDot(this.getPosition(i, j), e0 == 1 ? 'black' : 'white');
            }
        }

        for (let i = 0; i < (this.width / this.divider) - 1; i++) {
            for (let j = 0; j < (this.height / this.divider) - 1; j++) {
                const e0 = this.positions[i][j];
                const e1 = this.positions[i][j + 1];
                const e2 = this.positions[i + 1][j];
                const e3 = this.positions[i + 1][j + 1];

                const state: number = getState(e0, e1, e2, e3);


                this.drawBlock(state, i, j);
            }
        }
    }

    drawBlock(state: number, i: number, j: number) {
        let p0: Position = null;
        let p1: Position = null;
    
        switch (state) {
            case 1:
            case 14:
                p0 = this.getPosition((i + .5), (j + 0));
                p1 = this.getPosition((i + 0), (j + .5));
                drawLine(p0, p1);
                break;
            case 2:
            case 13:
                p0 = this.getPosition((i + 0), (j + .5));
                p1 = this.getPosition((i + .5), (j + 1));
                drawLine(p0, p1);
                break;
            case 3:
            case 12:
                p0 = this.getPosition((i + .5), (j + 0));
                p1 = this.getPosition((i + .5), (j + 1));
                drawLine(p0, p1);
                break;
            case 4:
            case 11:
                p0 = this.getPosition((i + 1), (j + .5));
                p1 = this.getPosition((i + .5), (j + 0));
                drawLine(p0, p1);
                break;
            case 5:
            case 10:
                p0 = this.getPosition((i + 1), (j + .5));
                p1 = this.getPosition((i + 0), (j + .5));
                drawLine(p0, p1);
                break;
            case 6:
                p0 = this.getPosition((i + 0), (j + .5));
                p1 = this.getPosition((i + .5), (j + 1));
                drawLine(p0, p1);
                p0 = this.getPosition((i + 1), (j + .5));
                p1 = this.getPosition((i + .5), (j + 0));
                drawLine(p0, p1);
                break;
            case 7:
            case 8:
                p0 = this.getPosition((i + 1), (j + .5));
                p1 = this.getPosition((i + .5), (j + 1));
                drawLine(p0, p1);
                break;
            case 9:
                p0 = this.getPosition((i + 1), (j + .5));
                p1 = this.getPosition((i + .5), (j + 1));
                drawLine(p0, p1);
                p0 = this.getPosition((i + 0), (j + .5));
                p1 = this.getPosition((i + .5), (j + 0));
                drawLine(p0, p1);
                break;
            default:
                break;
        }
    }

    getPosition(i, j): Position {
        return new Position(i * this.divider, j * this.divider);
    }
}