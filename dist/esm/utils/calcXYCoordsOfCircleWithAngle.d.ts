export type CalcXYCoordsOfCircleWithAngleParams = {
    angle: number;
    radius: number;
    originX: number;
    originY: number;
    initRotationAngle?: number;
};
export declare const calcXYCoordsOfCircleWithAngle: (angle: number, radius: number, originX: number, originY: number, initRotationAngle?: number) => {
    cx: number;
    x: number;
    cy: number;
    y: number;
};
