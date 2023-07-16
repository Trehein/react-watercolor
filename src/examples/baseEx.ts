import { GenerateWaterDropDataParams, WatercolorGeneratorProps } from "../types";
import { staggerRadius } from "../utils";

const svgHeight: number = 800
const svgWidth: number = 800
const numberOfInitialShapeLayers = 20

const base: GenerateWaterDropDataParams = {
    initPolygonPoints: 12,
    initPolygonRadius: (index:number) => staggerRadius(index, svgHeight * .35, numberOfInitialShapeLayers),
    originX: svgWidth * .5,
    originY: svgHeight * .5,
    colors: ['rgb(0, 105, 92)'],
    opacity: .015,              
    numberOfOverlays: 6,
    numberOfInitialShapeLayers: numberOfInitialShapeLayers,
    maxRandomNumberForInitDeform: 50,
    maxNumberOfRecurrsionsForInitDeform: 5,
    maxRandomNumberForOverlayDeform: 5,
    maxNumberOfRecurrsionsForOverlayDeform: 3,
}

export const baseEx: WatercolorGeneratorProps = {
    svgHeight: svgHeight,
    svgWidth: svgWidth,
    watercolorShapes: [
        base
    ]
}