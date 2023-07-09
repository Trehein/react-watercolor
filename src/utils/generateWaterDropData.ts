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
        return {
            initPolygonPoints,
            initPolygonRadius: typeof(initPolygonRadius) === 'number' ? initPolygonRadius : initPolygonRadius(i),
            originX: typeof(originX) === 'number' ? originX : originX(i),
            originY: typeof(originY) === 'number' ? originY : originY(i),
            colors: [colors[0]],
            opacity: typeof(opacity) === 'number' ? opacity : opacity(i),
            numberOfOverlays,
            maxRandomNumberForInitDeform,
            maxNumberOfRecurrsionsForInitDeform,
            maxRandomNumberForOverlayDeform,
            maxNumberOfRecurrsionsForOverlayDeform,
            initRotationAngle: initRotationAngle ? typeof(initRotationAngle) === 'number' ? initRotationAngle : initRotationAngle(i) : 1
        }
    })

    return waterDropData
}
