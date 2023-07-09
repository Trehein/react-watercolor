"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WaterDrop = void 0;
const react_1 = __importDefault(require("react"));
const utils_1 = require("../../../utils");
const WaterDrop = (props) => {
    const { colors, maxRandomNumberForInitDeform, maxNumberOfRecurrsionsForInitDeform, maxRandomNumberForOverlayDeform, maxNumberOfRecurrsionsForOverlayDeform, numberOfOverlays, initPolygonRadius, originX, originY, opacity, initPolygonPoints } = props;
    const emptyArray = new Array(numberOfOverlays).fill(undefined);
    const initPoints = (0, utils_1.generateCircleCoords)(initPolygonPoints, initPolygonRadius, { originX: originX, originY: originY }).map((point) => {
        return { x: point.x, y: point.y };
    });
    const firstDeform = (0, utils_1.generateRandomPoints)(initPoints, maxRandomNumberForInitDeform, maxNumberOfRecurrsionsForInitDeform);
    return (react_1.default.createElement(react_1.default.Fragment, null, emptyArray.map((emptySlot, i) => {
        return react_1.default.createElement("polygon", { key: i, points: (0, utils_1.pathFinderXY)((0, utils_1.generateRandomPoints)(firstDeform, maxRandomNumberForOverlayDeform, maxNumberOfRecurrsionsForOverlayDeform)), fill: colors[0], opacity: opacity });
    })));
};
exports.WaterDrop = WaterDrop;
