import { WatercolorGenerator } from "../components";
import { 
    basicTriangleEx, 
    staggeredRadiusEx, 
    crossingLinesEx, 
    lineEx, 
    everythingEx, 
    baseEx, 
    numberOfInitialShapesEx,
    numberOfInitialOverlaysEx,
    numberOfInitialShapesAndOverlaysEx
 } from '../examples'

export default {
    title: 'components/WatercolorGenerator',
    component: WatercolorGenerator
}

export const Base = {
    render: (args) => <WatercolorGenerator
        {...args}
    />,
    args: {
        ...baseEx
    },
    parameters: {  /* ... */ },
}

export const BasicTriangle = {
    render: (args) => <WatercolorGenerator
        {...args}
    />,
    args: {
        ...basicTriangleEx
    },
    parameters: {  /* ... */ },
};

export const CrossingLines = {
    render: (args) => <WatercolorGenerator
        {...args}
    />,
    args: {
        ...crossingLinesEx
    },
    parameters: {  /* ... */ },
};

export const Line = {
    render: (args) => <WatercolorGenerator
        {...args}
    />,
    args: {
        ...lineEx
    },
    parameters: {  /* ... */ },
}

export const StaggeredRadius = {
    render: (args) => <WatercolorGenerator
        {...args}
    />,
    args: {
        ...staggeredRadiusEx
    },
    parameters: {  /* ... */ },
}

export const Everything = {
    render: (args) => <WatercolorGenerator
        {...args}
    />,
    args: {
        ...everythingEx
    },
    parameters: {  /* ... */ },
}

export const NumberOfOverlays = {
    render: (args) => <WatercolorGenerator
        {...args}
    />,
    args: {
        ...numberOfInitialOverlaysEx
    },
    parameters: {  /* ... */ },
}

export const NumberOfInitialShapeLayers = {
    render: (args) => <WatercolorGenerator
        {...args}
    />,
    args: {
        ...numberOfInitialShapesEx
    },
    parameters: {  /* ... */ },
}

export const NumberOfInitialOverlaysAndShapeLayers = {
    render: (args) => <WatercolorGenerator
        {...args}
    />,
    args: {
        ...numberOfInitialShapesAndOverlaysEx
    },
    parameters: {  /* ... */ },
}





