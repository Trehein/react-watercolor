"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.baseEx = void 0;
const utils_1 = require("../utils");
const svgHeight = 800;
const svgWidth = 800;
const numberOfInitialShapeLayers = 20;
const base = {
    initPolygonPoints: 12,
    initPolygonRadius: (index) => (0, utils_1.staggerRadius)(index, svgHeight * .35, numberOfInitialShapeLayers),
    originX: svgWidth * .5,
    originY: svgHeight * .5,
    colors: ['rgb(0, 105, 92)'],
    opacity: .015,
    numberOfOverlays: 6,
    numberOfInitialShapeLayers: numberOfInitialShapeLayers,
    maxRandomNumberForInitDeform: 50,
    maxNumberOfRecurrsionsForInitDeform: 5,
    maxRandomNumberForOverlayDeform: 5,
    maxNumberOfRecurrsionsForOverlayDeform: 3,
};
exports.baseEx = {
    svgHeight: svgHeight,
    svgWidth: svgWidth,
    watercolorShapes: [
        base
    ]
};
