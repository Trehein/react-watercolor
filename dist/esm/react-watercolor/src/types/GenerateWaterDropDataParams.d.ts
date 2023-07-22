export type GenerateWaterDropDataParams = {
    initPolygonPoints: number;
    initPolygonRadius: number | ((index: number) => number);
    originX: number | ((index: number) => number);
    originY: number | ((index: number) => number);
    colors: Array<string>;
    opacity: number | ((index: number) => number);
    numberOfOverlays: number;
    numberOfInitialShapeLayers: number;
    maxRandomNumberForInitDeform: number;
    maxNumberOfRecurrsionsForInitDeform: number;
    maxRandomNumberForOverlayDeform: number;
    maxNumberOfRecurrsionsForOverlayDeform: number;
    initRotationAngle?: number | ((index: number) => number);
};
