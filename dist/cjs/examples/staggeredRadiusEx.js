"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.staggeredRadiusEx = void 0;
const utils_1 = require("../utils");
const svgHeight = 1000;
const svgWidth = 1000;
const numberOfInitialShapeLayers = 12;
const staggeredRadius = {
    initPolygonPoints: 3,
    initPolygonRadius: (index) => (0, utils_1.staggerRadius)(index, svgHeight, numberOfInitialShapeLayers),
    originX: svgWidth * .5,
    originY: svgHeight * .5,
    colors: ['blue'],
    opacity: .035,
    numberOfOverlays: 3,
    numberOfInitialShapeLayers: 12,
    maxRandomNumberForInitDeform: 20,
    maxNumberOfRecurrsionsForInitDeform: 3,
    maxRandomNumberForOverlayDeform: 3,
    maxNumberOfRecurrsionsForOverlayDeform: 3,
};
exports.staggeredRadiusEx = {
    svgHeight: svgHeight,
    svgWidth: svgWidth,
    watercolorShapes: [
        staggeredRadius
    ]
};
