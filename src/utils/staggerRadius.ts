export const staggerRadius: (index: number, maxRadius: number, numberOfInitialShapeLayers: number) => number = (
    index: number, 
    maxRadius: number, 
    numberOfInitialShapeLayers: number
) => {
    return maxRadius * (1 - (1 / numberOfInitialShapeLayers) * index)
}