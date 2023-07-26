"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maxNumberOfRecursionsForInitAndOverlaysEx = void 0;
const utils_1 = require("../utils");
const svgHeight = 500;
const svgWidth = 1000;
const numberOfShapesAndOverlays = 5;
const stuffThatIsTheSameForEach = {
    initPolygonPoints: 2,
    initPolygonRadius: svgHeight * .5,
    originY: svgHeight * .5,
    colors: ['#025464'],
    opacity: .2,
    maxRandomNumberForInitDeform: 40,
    maxNumberOfRecurrsionsForInitDeform: 2,
    maxRandomNumberForOverlayDeform: 10,
    numberOfOverlays: 2,
    numberOfInitialShapeLayers: 2,
    initRotationAngle: 90
};
const shapesArray = new Array(numberOfShapesAndOverlays).fill(undefined).map((item, index) => {
    return Object.assign({ maxNumberOfRecurrsionsForOverlayDeform: index + 1, maxNumberOfRecurrsionsForInitDeform: index, originX: (0, utils_1.calcEvenlySpacedNumbers)(svgWidth, index, numberOfShapesAndOverlays) }, stuffThatIsTheSameForEach);
});
exports.maxNumberOfRecursionsForInitAndOverlaysEx = {
    svgHeight: svgHeight,
    svgWidth: svgWidth,
    watercolorShapes: shapesArray,
    backgroundColor: 'white'
};
