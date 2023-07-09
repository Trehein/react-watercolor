"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WatercolorGenerator = void 0;
const react_1 = __importDefault(require("react"));
const WaterDrop_1 = require("./WaterDrop");
const generateWaterDropData_1 = require("../../utils/generateWaterDropData");
const WatercolorGenerator = (props) => {
    const { svgHeight, svgWidth, watercolorShapes } = props;
    return (react_1.default.createElement("div", { style: { display: 'flex', justifyContent: 'center', alignItems: 'center' } },
        react_1.default.createElement("svg", { height: svgHeight, width: svgWidth },
            react_1.default.createElement("rect", { fill: 'white', height: svgHeight, width: svgWidth, x: 0, y: 0 }),
            watercolorShapes.map((shape, i) => {
                return (react_1.default.createElement(react_1.default.Fragment, null, (0, generateWaterDropData_1.generateWaterDropData)(shape).map((waterDrop, i) => {
                    const { initPolygonPoints, initPolygonRadius, originX, originY, colors, opacity, numberOfOverlays, maxRandomNumberForInitDeform, maxNumberOfRecurrsionsForInitDeform, maxRandomNumberForOverlayDeform, maxNumberOfRecurrsionsForOverlayDeform, initRotationAngle } = waterDrop;
                    return (react_1.default.createElement(WaterDrop_1.WaterDrop, { key: i, initPolygonPoints: initPolygonPoints, initPolygonRadius: initPolygonRadius, originX: originX, originY: originY, colors: colors, opacity: opacity, numberOfOverlays: numberOfOverlays, maxRandomNumberForInitDeform: maxRandomNumberForInitDeform, maxNumberOfRecurrsionsForInitDeform: maxNumberOfRecurrsionsForInitDeform, maxRandomNumberForOverlayDeform: maxRandomNumberForOverlayDeform, maxNumberOfRecurrsionsForOverlayDeform: maxNumberOfRecurrsionsForOverlayDeform, initRotationAngle: initRotationAngle }));
                })));
            }))));
};
exports.WatercolorGenerator = WatercolorGenerator;
