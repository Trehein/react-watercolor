export type CalcXYCoordsOfCircleWithAngleParams = {
    angle: number, 
    radius: number, 
    originX: number, 
    originY: number,
    initRotationAngle?: number
}

// todo - use type to destructure and set initRotation angle as default value in destructuring

export const calcXYCoordsOfCircleWithAngle = (
    angle: number, 
    radius: number, 
    originX: number, 
    originY: number,
    initRotationAngle?: number
) => {
    const initAngle: number = initRotationAngle ? initRotationAngle : 1

    angle = (angle + initAngle) % 360;
    var rad = angle * Math.PI / 180;
    var x = originX + radius * Math.cos(rad);
    var y = originY - radius * Math.sin(rad);
    return {cx: x, x: x, cy: y, y: y}
}