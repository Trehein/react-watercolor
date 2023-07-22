"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateCircleCoords = void 0;
const calcXYCoordsOfCircleWithAngle_1 = require("./calcXYCoordsOfCircleWithAngle");
const generateCircleCoords = (numberOfPoints, radius, origin, initRotationAngle) => {
    const { originX, originY } = origin;
    const emptyArray = new Array(numberOfPoints).fill(undefined);
    const angleInterval = 360 / numberOfPoints;
    return emptyArray.map((u, i) => {
        return (0, calcXYCoordsOfCircleWithAngle_1.calcXYCoordsOfCircleWithAngle)(angleInterval * i, radius, originX, originY, initRotationAngle);
    });
};
exports.generateCircleCoords = generateCircleCoords;
