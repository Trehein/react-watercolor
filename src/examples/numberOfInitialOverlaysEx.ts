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
    opacity: .2,              
    numberOfInitialShapeLayers: 1,
    maxRandomNumberForInitDeform: 30,
    maxNumberOfRecurrsionsForInitDeform: 1,
    maxRandomNumberForOverlayDeform: 10,
    maxNumberOfRecurrsionsForOverlayDeform: 1,
    initRotationAngle: 90
}

const shapesArray: GenerateWaterDropDataParams[] = new Array(numberOfShapesAndOverlays).fill(undefined).map((item: any, index: number) => {
    return {
        numberOfOverlays: index + 1,
        originX: calcEvenlySpacedNumbers(svgWidth, index, numberOfShapesAndOverlays),
        ...stuffThatIsTheSameForEach
    }
})

export const numberOfInitialOverlaysEx: WatercolorGeneratorProps = {
    svgHeight: svgHeight,
    svgWidth: svgWidth,
    watercolorShapes: shapesArray,
    backgroundColor: 'white' 
}