import React from 'react';
import { WaterDrop } from './WaterDrop';
import { generateWaterDropData } from '../../utils/generateWaterDropData';
export const WatercolorGenerator = (props) => {
    const { svgHeight, svgWidth } = props;
    return (React.createElement("div", { style: { display: 'flex', justifyContent: 'center', alignItems: 'center' } },
        React.createElement("svg", { height: svgHeight, width: svgWidth },
            React.createElement("rect", { fill: 'white', height: svgHeight, width: svgWidth, x: 0, y: 0 }),
            generateWaterDropData(props).map((waterDrop, i) => {
                const { initPolygonPoints, initPolygonRadius, originX, originY, colors, opacity, numberOfOverlays, maxRandomNumberForInitDeform, maxNumberOfRecurrsionsForInitDeform, maxRandomNumberForOverlayDeform, maxNumberOfRecurrsionsForOverlayDeform } = waterDrop;
                return (React.createElement(WaterDrop, { key: i, initPolygonPoints: initPolygonPoints, initPolygonRadius: initPolygonRadius, originX: originX, originY: originY, colors: colors, opacity: opacity, numberOfOverlays: numberOfOverlays, maxRandomNumberForInitDeform: maxRandomNumberForInitDeform, maxNumberOfRecurrsionsForInitDeform: maxNumberOfRecurrsionsForInitDeform, maxRandomNumberForOverlayDeform: maxRandomNumberForOverlayDeform, maxNumberOfRecurrsionsForOverlayDeform: maxNumberOfRecurrsionsForOverlayDeform }));
            }))));
};
