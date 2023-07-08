import { GenerateWaterDropDataParams, WaterDropProps } from "../types"

export const generateWaterDropData: (generateWaterDropDataParams: GenerateWaterDropDataParams) => WaterDropProps[] = (generateWaterDropDataParams: GenerateWaterDropDataParams) => {
    const {
        colors, 
        initPolygonPoints, 
        initPolygonRadius, 
        opacity, 
        originX, 
        originY, 
        numberOfInitialShapeLayers, 
        numberOfOverlays, 
        maxNumberOfRecurrsionsForInitDeform, 
        maxNumberOfRecurrsionsForOverlayDeform, 
        maxRandomNumberForInitDeform, 
        maxRandomNumberForOverlayDeform 
    } = generateWaterDropDataParams

    const waterDropData: WaterDropProps[] = new Array(numberOfInitialShapeLayers).fill(undefined).map((undefinedSlot: undefined, i: number) => {
        return {
            initPolygonPoints,
            initPolygonRadius: initPolygonRadius * (.5 - .05 * i),
            originX,
            originY,
            colors: [colors[0]],
            opacity,
            numberOfOverlays,
            maxRandomNumberForInitDeform,
            maxNumberOfRecurrsionsForInitDeform,
            maxRandomNumberForOverlayDeform,
            maxNumberOfRecurrsionsForOverlayDeform
        }
    })

    return waterDropData
}