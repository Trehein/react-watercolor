import { GenerateWaterDropDataParams, WatercolorGeneratorProps } from "../types";

const svgHeight: number = 1000
const svgWidth: number = 1000

const horizontalLine: GenerateWaterDropDataParams = {
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
}

const verticalLine: GenerateWaterDropDataParams = {
    initPolygonPoints: 2,
    initPolygonRadius: svgHeight * .5,
    originX: svgWidth * .5,
    originY: svgHeight * .5,
    colors: ['red'],
    opacity: .035,              
    numberOfOverlays: 3,
    numberOfInitialShapeLayers: 12,
    maxRandomNumberForInitDeform: 20,
    maxNumberOfRecurrsionsForInitDeform: 3,
    maxRandomNumberForOverlayDeform: 3,
    maxNumberOfRecurrsionsForOverlayDeform: 3,
    initRotationAngle: 90
}

export const crossingLinesEx: WatercolorGeneratorProps = {
    svgHeight: svgHeight,
    svgWidth: svgWidth,
    watercolorShapes: [
        horizontalLine,
        verticalLine
    ]
}