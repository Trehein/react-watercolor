import { WatercolorGenerator } from "../components";
import { blueTriangle, greenLine } from '../examples'

export default {
    title: 'components/WatercolorGenerator',
    component: WatercolorGenerator
}

export const BasicTriangle = {
    render: (args) => <WatercolorGenerator
        {...args}
    />,
    args: {
        ...blueTriangle
    },
    parameters: {  /* ... */ },
  };

export const HorizontalLine = {
    render: (args) => <WatercolorGenerator
        {...args}
    />,
    args: {
        ...greenLine
    },
    parameters: {  /* ... */ },
  };