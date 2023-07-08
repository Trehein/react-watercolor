export const pathFinderXY = (pathArr: any[]) => {
    let starterString = `${pathArr[0].x} ${pathArr[0].y}`
    pathArr.forEach((point: {x: number, y: number}) => {
        starterString = `${starterString}
            , ${point.x} ${point.y}`
    })

    return starterString
}