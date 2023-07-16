import { GenerateWaterDropDataParams, WatercolorGeneratorProps } from "../types";
import { staggerRadius } from "../utils";

const svgHeight: number = 1000
const svgWidth: number = 1000
const numberOfInitialShapeLayers = 12

const purple: GenerateWaterDropDataParams = {
    initPolygonPoints: 12,
    initPolygonRadius: (index:number) => staggerRadius(index, svgHeight * .25, numberOfInitialShapeLayers),
    originX: svgWidth * .35,
    originY: svgHeight * .35,
    colors: ['rebeccapurple'],
    opacity: .1,              
    numberOfOverlays: 6,
    numberOfInitialShapeLayers: 3,
    maxRandomNumberForInitDeform: 100,
    maxNumberOfRecurrsionsForInitDeform: 3,
    maxRandomNumberForOverlayDeform: 25,
    maxNumberOfRecurrsionsForOverlayDeform: 3,
}

const aqua: GenerateWaterDropDataParams = {
    initPolygonPoints: 12,
    initPolygonRadius: (index:number) => staggerRadius(index, svgHeight * .2, numberOfInitialShapeLayers),
    originX: svgWidth * .65,
    originY: svgHeight * .65,
    colors: ['aqua'],
    opacity: .1,              
    numberOfOverlays: 6,
    numberOfInitialShapeLayers: 2,
    maxRandomNumberForInitDeform: 100,
    maxNumberOfRecurrsionsForInitDeform: 6,
    maxRandomNumberForOverlayDeform: 15,
    maxNumberOfRecurrsionsForOverlayDeform: 3,
}

export const everythingEx: WatercolorGeneratorProps = {
    svgHeight: svgHeight,
    svgWidth: svgWidth,
    watercolorShapes: [
        purple,
        aqua
    ],
    backgroundColor: 'salmon'
}