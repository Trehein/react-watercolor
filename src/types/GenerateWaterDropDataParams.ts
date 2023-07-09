export type GenerateWaterDropDataParams = {
    initPolygonPoints: number,
    initPolygonRadius: number,
    originX: number,
    originY: number,
    colors: Array<string>,
    opacity: number,
    numberOfOverlays: number,
    numberOfInitialShapeLayers: number,
    maxRandomNumberForInitDeform: number,
    maxNumberOfRecurrsionsForInitDeform: number,
    maxRandomNumberForOverlayDeform: number,
    maxNumberOfRecurrsionsForOverlayDeform: number,
    svgHeight: number,
    svgWidth: number,
    initRotationAngle?: number
}