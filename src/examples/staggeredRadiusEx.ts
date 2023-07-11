import { GenerateWaterDropDataParams, WatercolorGeneratorProps } from "../types";
import { staggerRadius } from "../utils";

const svgHeight: number = 500
const svgWidth: number = 1000
const numberOfInitialShapeLayers = 12

const stuffThatIsTheSameForEach = {
    initPolygonPoints: 3,
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

const staggeredRadius: GenerateWaterDropDataParams = {
    initPolygonPoints: 3,
    initPolygonRadius: (index:number) => staggerRadius(index, svgHeight * .4, numberOfInitialShapeLayers),
    originX: svgWidth * .66,
    ...stuffThatIsTheSameForEach
}

const basicTriangle: GenerateWaterDropDataParams = {
    initPolygonPoints: 3,
    initPolygonRadius: svgHeight * .4,
    originX: svgWidth * .33,
    ...stuffThatIsTheSameForEach
}

export const staggeredRadiusEx: WatercolorGeneratorProps = {
    svgHeight: svgHeight,
    svgWidth: svgWidth,
    watercolorShapes: [
        basicTriangle,
        staggeredRadius
    ]
}

