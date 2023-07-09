"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateWaterDropData = void 0;
const generateWaterDropData = (generateWaterDropDataParams) => {
    const { colors, initPolygonPoints, initPolygonRadius, opacity, originX, originY, numberOfInitialShapeLayers, numberOfOverlays, maxNumberOfRecurrsionsForInitDeform, maxNumberOfRecurrsionsForOverlayDeform, maxRandomNumberForInitDeform, maxRandomNumberForOverlayDeform } = generateWaterDropDataParams;
    const waterDropData = new Array(numberOfInitialShapeLayers).fill(undefined).map((undefinedSlot, i) => {
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
        };
    });
    return waterDropData;
};
exports.generateWaterDropData = generateWaterDropData;
