"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maxRandomNumberForOverlayDeformEx = void 0;
const utils_1 = require("../utils");
const svgHeight = 500;
const svgWidth = 1000;
const numberOfShapesAndOverlays = 5;
const stuffThatIsTheSameForEach = {
    initPolygonPoints: 2,
    initPolygonRadius: svgHeight * .5,
    originY: svgHeight * .5,
    colors: ['#025464'],
    opacity: 1,
    maxRandomNumberForInitDeform: 40,
    maxNumberOfRecurrsionsForInitDeform: 1,
    maxNumberOfRecurrsionsForOverlayDeform: 1,
    numberOfOverlays: 1,
    numberOfInitialShapeLayers: 1,
    initRotationAngle: 90
};
const shapesArray = new Array(numberOfShapesAndOverlays).fill(undefined).map((item, index) => {
    return Object.assign({ maxRandomNumberForOverlayDeform: 25 + (index * 25), originX: (0, utils_1.calcEvenlySpacedNumbers)(svgWidth, index, numberOfShapesAndOverlays) }, stuffThatIsTheSameForEach);
});
exports.maxRandomNumberForOverlayDeformEx = {
    svgHeight: svgHeight,
    svgWidth: svgWidth,
    watercolorShapes: shapesArray,
    backgroundColor: 'white'
};
