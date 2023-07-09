import { GenerateWaterDropDataParams } from "../types";
import { staggerRadius } from "../utils";

const svgHeight: number = 1000
const svgWidth: number = 1000
const numberOfInitialShapeLayers = 12

export const staggeredRadiusEx: GenerateWaterDropDataParams = {
    initPolygonPoints: 3,
    initPolygonRadius: (index:number) => staggerRadius(index, svgHeight, numberOfInitialShapeLayers),
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