const svgHeight = 500;
const svgWidth = 500;
const horizontalLine = {
    initPolygonPoints: 2,
    initPolygonRadius: svgHeight * .5,
    originX: svgWidth * .5,
    originY: svgHeight * .5,
    colors: ['salmon'],
    opacity: 1,
    numberOfOverlays: 1,
    numberOfInitialShapeLayers: 1,
    maxRandomNumberForInitDeform: 20,
    maxNumberOfRecurrsionsForInitDeform: 3,
    maxRandomNumberForOverlayDeform: 15,
    maxNumberOfRecurrsionsForOverlayDeform: 3,
};
export const lineEx = {
    svgHeight: svgHeight,
    svgWidth: svgWidth,
    watercolorShapes: [
        horizontalLine,
    ],
    backgroundColor: 'rebeccapurple'
};
