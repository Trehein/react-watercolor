"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.numberOfInitialShapesAndOverlaysEx = void 0;
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
    maxRandomNumberForInitDeform: 30,
    maxNumberOfRecurrsionsForInitDeform: 1,
    maxRandomNumberForOverlayDeform: 10,
    maxNumberOfRecurrsionsForOverlayDeform: 1,
    initRotationAngle: 90
};
const shapesArray = new Array(numberOfShapesAndOverlays).fill(undefined).map((item, index) => {
    return Object.assign({ numberOfOverlays: index + 1, numberOfInitialShapeLayers: index + 1, originX: (0, utils_1.calcEvenlySpacedNumbers)(svgWidth, index, numberOfShapesAndOverlays) }, stuffThatIsTheSameForEach);
});
exports.numberOfInitialShapesAndOverlaysEx = {
    svgHeight: svgHeight,
    svgWidth: svgWidth,
    watercolorShapes: shapesArray,
    backgroundColor: 'white'
};
