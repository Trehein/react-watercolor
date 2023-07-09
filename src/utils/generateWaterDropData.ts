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
        maxRandomNumberForOverlayDeform,
        initRotationAngle,
    } = generateWaterDropDataParams

    const waterDropData: WaterDropProps[] = new Array(numberOfInitialShapeLayers).fill(undefined).map((undefinedSlot: undefined, i: number) => {
        console.log('testbool', typeof(initPolygonRadius))
        return {
            initPolygonPoints,
            initPolygonRadius: typeof(initPolygonRadius) === 'number' ? initPolygonRadius : initPolygonRadius(i),
            originX,
            originY,
            colors: [colors[0]],
            opacity,
            numberOfOverlays,
            maxRandomNumberForInitDeform,
            maxNumberOfRecurrsionsForInitDeform,
            maxRandomNumberForOverlayDeform,
            maxNumberOfRecurrsionsForOverlayDeform,
            initRotationAngle
        }
    })

    return waterDropData
}