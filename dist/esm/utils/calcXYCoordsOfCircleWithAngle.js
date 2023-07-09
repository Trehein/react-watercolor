export const calcXYCoordsOfCircleWithAngle = (angle, radius, originX, originY) => {
    angle = (angle + 1) % 360;
    var rad = angle * Math.PI / 180;
    var x = originX + radius * Math.cos(rad);
    var y = originY - radius * Math.sin(rad);
    return { cx: x, x: x, cy: y, y: y };
};
