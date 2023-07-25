import { GenerateWaterDropDataParams, WatercolorGeneratorProps } from "../types";
import { calcEvenlySpacedNumbers } from "../utils";

const svgHeight: number = 500
const svgWidth: number = 1000
const numberOfShapesAndOverlays: number = 5

const stuffThatIsTheSameForEach = {
    initPolygonPoints: 2,
    initPolygonRadius: svgHeight * .5,
    originY: svgHeight * .5,
    colors: ['#025464'],
    opacity: 1,              
    maxRandomNumberForInitDeform: 40,
    maxNumberOfRecurrsionsForInitDeform: 2,
    maxRandomNumberForOverlayDeform: 1,
    numberOfOverlays: 1,
    numberOfInitialShapeLayers: 1,
    initRotationAngle: 90
}

const shapesArray: GenerateWaterDropDataParams[] = new Array(numberOfShapesAndOverlays).fill(undefined).map((item: any, index: number) => {
    return {
        maxNumberOfRecurrsionsForOverlayDeform: index + 1,
        originX: calcEvenlySpacedNumbers(svgWidth, index, numberOfShapesAndOverlays),
        ...stuffThatIsTheSameForEach
    }
})

export const maxNumberOfRecurrsionsForOverlayDeformEx: WatercolorGeneratorProps = {
    svgHeight: svgHeight,
    svgWidth: svgWidth,
    watercolorShapes: shapesArray,
    backgroundColor: 'white' 
}