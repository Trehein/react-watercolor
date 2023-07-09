export const staggerRadius = (index, svgHeight, numberOfInitialShapeLayers) => {
    return (svgHeight * .5) * (1 - (1 / numberOfInitialShapeLayers) * index);
};
