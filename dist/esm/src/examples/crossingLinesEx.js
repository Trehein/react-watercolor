const svgHeight = 500;
const svgWidth = 500;
const stuffThatIsTheSameForEach = {
    initPolygonPoints: 2,
    initPolygonRadius: svgHeight * .5,
    opacity: .035,
    numberOfOverlays: 3,
    numberOfInitialShapeLayers: 12,
    maxRandomNumberForInitDeform: 20,
    maxNumberOfRecurrsionsForInitDeform: 3,
    maxRandomNumberForOverlayDeform: 3,
    maxNumberOfRecurrsionsForOverlayDeform: 3,
};
const horizontalLine = Object.assign({ originX: svgWidth * .5, originY: svgHeight * .25, colors: ['blue'] }, stuffThatIsTheSameForEach);
const verticalLine = Object.assign({ originX: svgWidth * .25, originY: svgHeight * .5, colors: ['red'], initRotationAngle: 90 }, stuffThatIsTheSameForEach);
const diagonalLine = Object.assign({ originX: svgWidth * .5, originY: svgHeight * .5, colors: ['gold'], initRotationAngle: 45 }, stuffThatIsTheSameForEach);
export const crossingLinesEx = {
    svgHeight: svgHeight,
    svgWidth: svgWidth,
    watercolorShapes: [
        horizontalLine,
        verticalLine,
        diagonalLine
    ]
};
