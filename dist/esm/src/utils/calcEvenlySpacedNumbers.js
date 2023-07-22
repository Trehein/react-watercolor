export const calcEvenlySpacedNumbers = (fullDimension, index, numberOfPoints) => {
    const distanceBetweenPoints = fullDimension / (numberOfPoints + 1);
    return distanceBetweenPoints + (distanceBetweenPoints * index);
};
