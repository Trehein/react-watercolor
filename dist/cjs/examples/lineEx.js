"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lineEx = void 0;
const svgHeight = 1000;
const svgWidth = 1000;
const horizontalLine = {
    initPolygonPoints: 2,
    initPolygonRadius: svgHeight * .5,
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
exports.lineEx = {
    svgHeight: svgHeight,
    svgWidth: svgWidth,
    watercolorShapes: [
        horizontalLine,
    ]
};
