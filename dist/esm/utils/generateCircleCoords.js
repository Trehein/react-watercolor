import { calcXYCoordsOfCircleWithAngle } from "./calcXYCoordsOfCircleWithAngle";
export const generateCircleCoords = (numberOfPoints, radius, origin) => {
    const { originX, originY } = origin;
    const emptyArray = new Array(numberOfPoints).fill(undefined);
    const angleInterval = 360 / numberOfPoints;
    return emptyArray.map((u, i) => {
        return calcXYCoordsOfCircleWithAngle(angleInterval * i, radius, originX, originY);
    });
};
