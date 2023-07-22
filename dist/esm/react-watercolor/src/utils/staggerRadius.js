export const staggerRadius = (index, maxRadius, numberOfInitialShapeLayers) => {
    return maxRadius * (1 - (1 / numberOfInitialShapeLayers) * index);
};
