"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.everythingEx = void 0;
const utils_1 = require("../utils");
const svgHeight = 1000;
const svgWidth = 1000;
const numberOfInitialShapeLayers = 12;
const purple = {
    initPolygonPoints: 12,
    initPolygonRadius: (index) => (0, utils_1.staggerRadius)(index, svgHeight * .25, numberOfInitialShapeLayers),
    originX: svgWidth * .35,
    originY: svgHeight * .35,
    colors: ['rebeccapurple'],
    opacity: .1,
    numberOfOverlays: 6,
    numberOfInitialShapeLayers: 3,
    maxRandomNumberForInitDeform: 100,
    maxNumberOfRecurrsionsForInitDeform: 3,
    maxRandomNumberForOverlayDeform: 25,
    maxNumberOfRecurrsionsForOverlayDeform: 3,
};
const aqua = {
    initPolygonPoints: 12,
    initPolygonRadius: (index) => (0, utils_1.staggerRadius)(index, svgHeight * .2, numberOfInitialShapeLayers),
    originX: svgWidth * .65,
    originY: svgHeight * .65,
    colors: ['aqua'],
    opacity: .1,
    numberOfOverlays: 6,
    numberOfInitialShapeLayers: 2,
    maxRandomNumberForInitDeform: 100,
    maxNumberOfRecurrsionsForInitDeform: 6,
    maxRandomNumberForOverlayDeform: 15,
    maxNumberOfRecurrsionsForOverlayDeform: 3,
};
exports.everythingEx = {
    svgHeight: svgHeight,
    svgWidth: svgWidth,
    watercolorShapes: [
        purple,
        aqua
    ],
    backgroundColor: 'salmon'
};
