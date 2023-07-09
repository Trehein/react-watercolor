export const staggerRadius: (index: number, svgHeight: number, numberOfInitialShapeLayers: number) => number = (
    index: number, 
    svgHeight: number, 
    numberOfInitialShapeLayers: number
) => {
    return (svgHeight * .5) * (1 - (1 / numberOfInitialShapeLayers) * index)
}