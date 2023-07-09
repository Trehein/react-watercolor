"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.staggerRadius = void 0;
const staggerRadius = (index, svgHeight, numberOfInitialShapeLayers) => {
    return (svgHeight * .5) * (1 - (1 / numberOfInitialShapeLayers) * index);
};
exports.staggerRadius = staggerRadius;
