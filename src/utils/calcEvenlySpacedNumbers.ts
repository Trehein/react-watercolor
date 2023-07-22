export const calcEvenlySpacedNumbers: (fullDimension: number, index: number, numberOfPoints: number) => number = (fullDimension: number, index: number, numberOfPoints: number) => {
    const distanceBetweenPoints = fullDimension / (numberOfPoints + 1)
    return distanceBetweenPoints + (distanceBetweenPoints * index)
}