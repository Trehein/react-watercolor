import { WatercolorGenerator } from "../components";
import { basicTriangleEx, horizontalLineEx, staggeredRadiusEx } from '../examples'

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

export const HorizontalLine = {
    render: (args) => <WatercolorGenerator
        {...args}
    />,
    args: {
        ...horizontalLineEx
    },
    parameters: {  /* ... */ },
  };

export const StaggeredRadius = {
    render: (args) => <WatercolorGenerator
        {...args}
    />,
    args: {
        ...staggeredRadiusEx
    },
    parameters: {  /* ... */ },
}