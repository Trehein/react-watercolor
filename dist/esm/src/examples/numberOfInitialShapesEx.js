import { calcEvenlySpacedNumbers } from "../utils";
const svgHeight = 500;
const svgWidth = 1000;
const numberOfShapesAndOverlays = 5;
const stuffThatIsTheSameForEach = {
    initPolygonPoints: 2,
    initPolygonRadius: svgHeight * .5,
    originY: svgHeight * .5,
    colors: ['#025464'],
    opacity: .2,
    numberOfOverlays: 1,
    maxRandomNumberForInitDeform: 30,
    maxNumberOfRecurrsionsForInitDeform: 1,
    maxRandomNumberForOverlayDeform: 10,
    maxNumberOfRecurrsionsForOverlayDeform: 1,
    initRotationAngle: 90
};
const shapesArray = new Array(numberOfShapesAndOverlays).fill(undefined).map((item, index) => {
    return Object.assign({ numberOfInitialShapeLayers: index + 1, originX: calcEvenlySpacedNumbers(svgWidth, index, numberOfShapesAndOverlays) }, stuffThatIsTheSameForEach);
});
export const numberOfInitialShapesEx = {
    svgHeight: svgHeight,
    svgWidth: svgWidth,
    watercolorShapes: shapesArray,
    backgroundColor: 'white'
};
