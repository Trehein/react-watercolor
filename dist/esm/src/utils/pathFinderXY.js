export const pathFinderXY = (pathArr) => {
    let starterString = `${pathArr[0].x} ${pathArr[0].y}`;
    pathArr.forEach((point) => {
        starterString = `${starterString}
            , ${point.x} ${point.y}`;
    });
    return starterString;
};
