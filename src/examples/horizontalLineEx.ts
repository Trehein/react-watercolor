import { GenerateWaterDropDataParams } from "../types";

const svgHeight: number = 1000
const svgWidth: number = 1000

export const horizontalLineEx: GenerateWaterDropDataParams = {
    initPolygonPoints: 2,
    initPolygonRadius: svgWidth * .5,
    originX: svgWidth * .5,
    originY: svgHeight * .5,
    colors: ['green'],
    opacity: 0.35,
    numberOfOverlays: 1,
    numberOfInitialShapeLayers: 1,
    maxRandomNumberForInitDeform: 20,
    maxNumberOfRecurrsionsForInitDeform: 1,
    maxRandomNumberForOverlayDeform: 1,
    maxNumberOfRecurrsionsForOverlayDeform: 1,
    svgHeight: svgHeight,
    svgWidth: svgWidth,
    initRotationAngle: 0
}