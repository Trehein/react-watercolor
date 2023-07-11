"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.staggerRadius = void 0;
const staggerRadius = (index, maxRadius, numberOfInitialShapeLayers) => {
    return maxRadius * (1 - (1 / numberOfInitialShapeLayers) * index);
};
exports.staggerRadius = staggerRadius;
