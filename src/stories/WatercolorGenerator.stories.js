import { WatercolorGenerator } from "../components";
import { basicTriangleEx, staggeredRadiusEx, crossingLinesEx, lineEx, everythingEx, baseEx } from '../examples'

export default {
    title: 'components/WatercolorGenerator',
    component: WatercolorGenerator
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

export const Base = {
    render: (args) => <WatercolorGenerator
        {...args}
    />,
    args: {
        ...baseEx
    },
    parameters: {  /* ... */ },
}