import React from 'react';
import { generateCircleCoords, generateRandomPoints, pathFinderXY } from '../../../utils';
export const WaterDrop = (props) => {
    const { colors, maxRandomNumberForInitDeform, maxNumberOfRecurrsionsForInitDeform, maxRandomNumberForOverlayDeform, maxNumberOfRecurrsionsForOverlayDeform, numberOfOverlays, initPolygonRadius, originX, originY, opacity, initPolygonPoints } = props;
    const emptyArray = new Array(numberOfOverlays).fill(undefined);
    const initPoints = generateCircleCoords(initPolygonPoints, initPolygonRadius, { originX: originX, originY: originY }).map((point) => {
        return { x: point.x, y: point.y };
    });
    const firstDeform = generateRandomPoints(initPoints, maxRandomNumberForInitDeform, maxNumberOfRecurrsionsForInitDeform);
    return (React.createElement(React.Fragment, null, emptyArray.map((emptySlot, i) => {
        return React.createElement("polygon", { key: i, points: pathFinderXY(generateRandomPoints(firstDeform, maxRandomNumberForOverlayDeform, maxNumberOfRecurrsionsForOverlayDeform)), fill: colors[0], opacity: opacity });
    })));
};
