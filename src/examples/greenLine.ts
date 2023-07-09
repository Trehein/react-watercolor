import { GenerateWaterDropDataParams } from "../types";

export const greenLine: GenerateWaterDropDataParams = {
    initPolygonPoints: 2,
    initPolygonRadius: 400,
    originX: 200,
    originY: 200,
    colors: ['green'],
    opacity: 0.05,
    numberOfOverlays: 3,
    numberOfInitialShapeLayers: 12,
    maxRandomNumberForInitDeform: 20,
    maxNumberOfRecurrsionsForInitDeform: 3,
    maxRandomNumberForOverlayDeform: 3,
    maxNumberOfRecurrsionsForOverlayDeform: 3,
    svgHeight: 400,
    svgWidth: 400,
    initRotationAngle: 0
}