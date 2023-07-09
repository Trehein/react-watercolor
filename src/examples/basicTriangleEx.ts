import { GenerateWaterDropDataParams } from "../types";

const svgHeight: number = 1000
const svgWidth: number = 1000

export const basicTriangleEx: GenerateWaterDropDataParams = {
    initPolygonPoints: 3,
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
    svgHeight: svgHeight,
    svgWidth: svgWidth,
}