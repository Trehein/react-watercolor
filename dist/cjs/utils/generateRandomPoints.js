"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRandomPoints = void 0;
const randomGauss_1 = require("./randomGauss");
const randomIntFromInterval_1 = require("./randomIntFromInterval");
// generate random points roughly between each existing point
const generateRandomPoints = (currentPoints, maxRandomNumber, numberOfRecurssionsRemaining) => {
    let x1, y1, midx, midy, nx, ny;
    let x2, y2;
    let generatedPoints = [];
    if (numberOfRecurssionsRemaining > 0) {
        currentPoints.forEach((currentPoint, i) => {
            x1 = currentPoint.x;
            y1 = currentPoint.y;
            if (i + 1 < currentPoints.length) {
                x2 = currentPoints[i + 1].x;
                y2 = currentPoints[i + 1].y;
            }
            else {
                x2 = currentPoints[0].x;
                y2 = currentPoints[0].y;
            }
            generatedPoints.push({ x: x1, y: y1 });
            midx = (x1 + x2) * .5;
            midy = (y1 + y2) * .5;
            nx = midx + ((0, randomGauss_1.randomGauss)() * maxRandomNumber) * ((0, randomIntFromInterval_1.randomIntFromInterval)(1, 2) % 2 === 0 ? 1 : -1);
            ny = midy + ((0, randomGauss_1.randomGauss)() * maxRandomNumber) * ((0, randomIntFromInterval_1.randomIntFromInterval)(1, 2) % 2 === 0 ? 1 : -1);
            generatedPoints.push({ x: nx, y: ny });
        });
        generatedPoints = (0, exports.generateRandomPoints)(generatedPoints, maxRandomNumber, numberOfRecurssionsRemaining - 1);
    }
    return generatedPoints.length > 0 ? generatedPoints : currentPoints;
};
exports.generateRandomPoints = generateRandomPoints;
