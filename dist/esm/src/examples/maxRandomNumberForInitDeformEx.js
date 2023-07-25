import { calcEvenlySpacedNumbers } from "../utils";
const svgHeight = 500;
const svgWidth = 1000;
const numberOfShapesAndOverlays = 5;
const stuffThatIsTheSameForEach = {
    initPolygonPoints: 2,
    initPolygonRadius: svgHeight * .5,
    originY: svgHeight * .5,
    colors: ['#025464'],
    opacity: 1,
    maxNumberOfRecurrsionsForInitDeform: 10,
    maxRandomNumberForOverlayDeform: 1,
    maxNumberOfRecurrsionsForOverlayDeform: 1,
    numberOfOverlays: 1,
    numberOfInitialShapeLayers: 1,
    initRotationAngle: 90
};
const shapesArray = new Array(numberOfShapesAndOverlays).fill(undefined).map((item, index) => {
    return Object.assign({ maxRandomNumberForInitDeform: index * 5, originX: calcEvenlySpacedNumbers(svgWidth, index, numberOfShapesAndOverlays) }, stuffThatIsTheSameForEach);
});
export const maxRandomNumberForInitDeformEx = {
    svgHeight: svgHeight,
    svgWidth: svgWidth,
    watercolorShapes: shapesArray,
    backgroundColor: 'white'
};
