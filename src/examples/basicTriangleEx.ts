import { GenerateWaterDropDataParams, WatercolorGeneratorProps } from "../types";

const svgHeight: number = 500
const svgWidth: number = 500

const basicTriangle: GenerateWaterDropDataParams = {
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
}

export const basicTriangleEx: WatercolorGeneratorProps = {
    svgHeight: svgHeight,
    svgWidth: svgWidth,
    watercolorShapes: [
        basicTriangle
    ]
}