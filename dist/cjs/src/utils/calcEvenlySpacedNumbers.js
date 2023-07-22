"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcEvenlySpacedNumbers = void 0;
const calcEvenlySpacedNumbers = (fullDimension, index, numberOfPoints) => {
    const distanceBetweenPoints = fullDimension / (numberOfPoints + 1);
    return distanceBetweenPoints + (distanceBetweenPoints * index);
};
exports.calcEvenlySpacedNumbers = calcEvenlySpacedNumbers;
