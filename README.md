# react-watercolor
![baseGreenEx](https://github.com/Trehein/react-watercolor/assets/18636420/6b0c7d75-bbf6-4fc2-b728-c7eb0c87b05c)
```
npm i react-watercolor
```
Or the [repo](https://github.com/Trehein/react-watercolor) and spin it up with storybook...
```
npm i
npm run storybook
```
## The Maths! ##
```typescript
numberOfPolygonsGenerated = numberOfInitialShapeLayers * numberOfOverlays

numberOfPointsInEachOverlayAfterDeform = initPolygonPoints * (2 ^ maxNumberOfRecurrsionsForInitDeform + maxNumberOfRecurrsionsForOverlayDeform)
```
![lineEx](https://github.com/Trehein/react-watercolor/assets/18636420/51e52672-c4b6-431b-a71b-4ba981bae87a)
### BlackLine.tsx ###
```typescript
import {GenerateWaterDropDataParams, WatercolorGenerator, WatercolorGeneratorProps} from 'react-watercolor'

export default const BlackLine = () => {
  const svgHeight: number = 200
  const svgWidth: number = 500

  const horizontalLine: GenerateWaterDropDataParams = {
      initPolygonPoints: 2,
      initPolygonRadius: svgHeight * .5,
      originX: svgWidth * .5,
      originY: svgHeight * .5,
      colors: ['black'],
      opacity: .045,              
      numberOfOverlays: 3,
      numberOfInitialShapeLayers: 12,
      maxRandomNumberForInitDeform: 20,
      maxNumberOfRecurrsionsForInitDeform: 3,
      maxRandomNumberForOverlayDeform: 3,
      maxNumberOfRecurrsionsForOverlayDeform: 3,
  }
  
  const lineEx: WatercolorGeneratorProps = {
      svgHeight: svgHeight,
      svgWidth: svgWidth,
      watercolorShapes: [
          horizontalLine,
      ]
  }
  
  return (
    <WatercolorGenerator 
      {...lineEx}
    />
  )
}
```
## Props ##
### WatercolorGeneratorProps ###
| Name | Type | Default | Description |
|   :---   |   :---:   |   :---:   |   :---   |
| svgHeight | number |  | Height of the svg component |
| svgWidth | number |  | Width of the svg component |
| watercolorShapes | GenerateWaterDropDataParams[] |  | The shape or shapes generated with GenerateWaterDropDataParams that will be rendered on the svg |
| backgroundColor? | string | 'white' | The color of the svg background |
### GenerateWaterDropDataParams ###
| Name | Type | Default | Description |
|   :---   |   :---:   |   :---:   |   :---   |
| initPolygonPoints | number |  | Number of points for the initial polygon that will be equal distance from each other |
| initPolygonRadius | number &#124; ((index: number) => number) |  | Distance that the initial points will be away from the origin point |
| originX | number &#124; ((index: number) => number) |  | X coordinate for initial shape origin |
| originY | number &#124; ((index: number) => number) |  | Y coordinate for initial shape origin, 0 being the top of the SVG |
| colors | string[] |  | First index is the color of the shape (update coming for multicolor) |
| opacity | number &#124; ((index: number) => number) |  | The opacity of each layer |
| numberOfOverlays | number |  | Number of overlays, each made of their own shape layers |
| numberOfInitialShapeLayers | number |  | Each shape layer is made of a randomized version of the initial polygon that was deformed |
| maxRandomNumberForInitDeform | number |  | Dictates how much variance randomly generated midpoints can have on a guassian skew with the highest likelyhood being the midpoint between this max and 0. This deforms the initial polygon that the lower layers will iterate on.|
| maxNumberOfRecurrsionsForInitDeform | number |  | The maximum number of times that a new random midpoint will be generated between two endpoints in the intial deforming. |
| maxRandomNumberForOverlayDeform | number |  | Guassian skew max for each overlay layer that will lead to more jagged deformations on generated midpoints |
| maxNumberOfRecurrsionsForOverlayDeform | number |  | The maximum number of times that a new random midpoint will be generated between two endpoints in each overlay. |
| initRotationAngle? | number | number &#124; ((index: number) => number) | Rotates the inital polygon shape in degrees. |

![SimpleTriangle](https://github.com/Trehein/react-watercolor/assets/18636420/69c1e93a-ac26-4f62-8444-001c49ed5bb5)
### BlueTriangle.tsx ###
```typescript
import {GenerateWaterDropDataParams, WatercolorGenerator, WatercolorGeneratorProps} from 'react-watercolor'

export default const BlueTriangle = () => {
  const svgHeightAndWidth = 500
  const basicTriangle: GenerateWaterDropDataParams = {
    initPolygonPoints: 3,
    initPolygonRadius: svgHeightAndWidth * .5,
    originX: svgHeightAndWidth * .5,
    originY: svgHeightAndWidth * .5,
    colors: ['blue'],
    opacity: .035,
    numberOfOverlays: 3,
    numberOfInitialShapeLayers: 12,
    maxRandomNumberForInitDeform: 20,
    maxNumberOfRecurrsionsForInitDeform: 3,
    maxRandomNumberForOverlayDeform: 3,
    maxNumberOfRecurrsionsForOverlayDeform: 3
  }
  const basicTriangleEx: WatercolorGeneratorProps = {
    svgHeight: svgHeightAndWidth,
    svgWidth: svgHeightAndWidth,
    watercolorShapes: [
      basicTriangle
    ]
  }
  
  return (
    <WatercolorGenerator 
      {...basicTriangleEx}
    />
  )
}
```
![threeLineCross](https://github.com/Trehein/react-watercolor/assets/18636420/0bc280ef-cf0c-48dc-aa60-a67dcd4bab03)
### ThreeLines.tsx ###
```typescript
import {GenerateWaterDropDataParams, WatercolorGenerator, WatercolorGeneratorProps} from 'react-watercolor'

export default const ThreeLines = () => {
  const svgHeight: number = 500
  const svgWidth: number = 500

  const stuffThatIsTheSameForEach = {
      initPolygonPoints: 2,
      initPolygonRadius: svgHeight * .5,
      opacity: .035,              
      numberOfOverlays: 3,
      numberOfInitialShapeLayers: 12,
      maxRandomNumberForInitDeform: 20,
      maxNumberOfRecurrsionsForInitDeform: 3,
      maxRandomNumberForOverlayDeform: 3,
      maxNumberOfRecurrsionsForOverlayDeform: 3,
  }
  
  const horizontalLine: GenerateWaterDropDataParams = {
      originX: svgWidth * .5,
      originY: svgHeight * .25,
      colors: ['blue'],
      ...stuffThatIsTheSameForEach
  }
  
  const verticalLine: GenerateWaterDropDataParams = {
      originX: svgWidth * .25,
      originY: svgHeight * .5,
      colors: ['red'],
      initRotationAngle: 90,
      ...stuffThatIsTheSameForEach
  }
  
  const diagonalLine: GenerateWaterDropDataParams = {
      originX: svgWidth * .5,
      originY: svgHeight * .5,
      colors: ['gold'],
      initRotationAngle: 45,
      ...stuffThatIsTheSameForEach
  }
  
  export const crossingLinesEx: WatercolorGeneratorProps = {
      svgHeight: svgHeight,
      svgWidth: svgWidth,
      watercolorShapes: [
          horizontalLine,
          verticalLine,
          diagonalLine
      ]
  }
  
  return (
    <WatercolorGenerator 
      {...crossingLinesEx}
    />
  )
}
```
![staggeredRadius](https://github.com/Trehein/react-watercolor/assets/18636420/dc595910-5589-45f9-b61f-5c60f75100cb)
### StaggeredInitRadius.tsx ###
```typescript
import {GenerateWaterDropDataParams, WatercolorGenerator, WatercolorGeneratorProps} from 'react-watercolor'

export default const StaggeredInitRadius = () => {
  const svgHeight: number = 500
  const svgWidth: number = 1000
  const numberOfInitialShapeLayers = 12

  const staggerRadius: (index: number, maxRadius: number, numberOfInitialShapeLayers: number) => number = (
      index: number, 
      maxRadius: number, 
      numberOfInitialShapeLayers: number
  ) => {
      return maxRadius * (1 - (1 / numberOfInitialShapeLayers) * index)
  }
  
  const stuffThatIsTheSameForEach = {
      initPolygonPoints: 3,
      originY: svgHeight * .5,
      colors: ['blue'],
      opacity: .035,              
      numberOfOverlays: 3,
      numberOfInitialShapeLayers: 12,
      maxRandomNumberForInitDeform: 20,
      maxNumberOfRecurrsionsForInitDeform: 3,
      maxRandomNumberForOverlayDeform: 3,
      maxNumberOfRecurrsionsForOverlayDeform: 3,
  }
  
  const staggeredRadius: GenerateWaterDropDataParams = {
      initPolygonPoints: 3,
      initPolygonRadius: (index:number) => staggerRadius(index, svgHeight * .4, numberOfInitialShapeLayers),
      originX: svgWidth * .66,
      ...stuffThatIsTheSameForEach
  }
  
  const basicTriangle: GenerateWaterDropDataParams = {
      initPolygonPoints: 3,
      initPolygonRadius: svgHeight * .4,
      originX: svgWidth * .33,
      ...stuffThatIsTheSameForEach
  }
  
  const staggeredRadiusEx: WatercolorGeneratorProps = {
      svgHeight: svgHeight,
      svgWidth: svgWidth,
      watercolorShapes: [
          basicTriangle,
          staggeredRadius
      ]
  }
  
  return (
    <WatercolorGenerator 
      {...lineEx}
    />
  )
}
```
![baseGreenEx](https://github.com/Trehein/react-watercolor/assets/18636420/6b0c7d75-bbf6-4fc2-b728-c7eb0c87b05c)
### BaseExample.tsx ###
```typescript
import {GenerateWaterDropDataParams, WatercolorGenerator, WatercolorGeneratorProps} from 'react-watercolor'

export default const BaseExample = () => {
  const svgHeight: number = 800
  const svgWidth: number = 800
  const numberOfInitialShapeLayers = 12

  const staggerRadius: (index: number, maxRadius: number, numberOfInitialShapeLayers: number) => number = (
      index: number, 
      maxRadius: number, 
      numberOfInitialShapeLayers: number
  ) => {
      return maxRadius * (1 - (1 / numberOfInitialShapeLayers) * index)
  }
  
  const base: GenerateWaterDropDataParams = {
    initPolygonPoints: 12,
    initPolygonRadius: (index:number) => staggerRadius(index, svgHeight * .35, numberOfInitialShapeLayers),
    originX: svgWidth * .5,
    originY: svgHeight * .5,
    colors: ['rgb(0, 105, 92)'],
    opacity: .015,              
    numberOfOverlays: 6,
    numberOfInitialShapeLayers: numberOfInitialShapeLayers,
    maxRandomNumberForInitDeform: 50,
    maxNumberOfRecurrsionsForInitDeform: 5,
    maxRandomNumberForOverlayDeform: 5,
    maxNumberOfRecurrsionsForOverlayDeform: 3,
  }
  
  const baseEx: WatercolorGeneratorProps = {
      svgHeight: svgHeight,
      svgWidth: svgWidth,
      watercolorShapes: [
          base
      ]
  }
  
  return (
    <WatercolorGenerator 
      {...baseEx}
    />
  )
}
```
![everything2Ex](https://github.com/Trehein/react-watercolor/assets/18636420/7a731e67-0285-45e3-a462-cec6e161236c)
### Everything.tsx ###
```typescript
import {GenerateWaterDropDataParams, WatercolorGenerator, WatercolorGeneratorProps} from 'react-watercolor'

export default const Everything = () => {
  const svgHeight: number = 500
  const svgWidth: number = 1000
  const numberOfInitialShapeLayers = 12

  const staggerRadius: (index: number, maxRadius: number, numberOfInitialShapeLayers: number) => number = (
      index: number, 
      maxRadius: number, 
      numberOfInitialShapeLayers: number
  ) => {
      return maxRadius * (1 - (1 / numberOfInitialShapeLayers) * index)
  }
  
  const purple: GenerateWaterDropDataParams = {
    initPolygonPoints: 12,
    initPolygonRadius: (index:number) => staggerRadius(index, svgHeight * .25, numberOfInitialShapeLayers),
    originX: svgWidth * .35,
    originY: svgHeight * .35,
    colors: ['rebeccapurple'],
    opacity: .1,              
    numberOfOverlays: 6,
    numberOfInitialShapeLayers: 3,
    maxRandomNumberForInitDeform: 100,
    maxNumberOfRecurrsionsForInitDeform: 3,
    maxRandomNumberForOverlayDeform: 25,
    maxNumberOfRecurrsionsForOverlayDeform: 3,
  }

  const aqua: GenerateWaterDropDataParams = {
      initPolygonPoints: 12,
      initPolygonRadius: (index:number) => staggerRadius(index, svgHeight * .2, numberOfInitialShapeLayers),
      originX: svgWidth * .65,
      originY: svgHeight * .65,
      colors: ['aqua'],
      opacity: .1,              
      numberOfOverlays: 6,
      numberOfInitialShapeLayers: 2,
      maxRandomNumberForInitDeform: 100,
      maxNumberOfRecurrsionsForInitDeform: 6,
      maxRandomNumberForOverlayDeform: 15,
      maxNumberOfRecurrsionsForOverlayDeform: 3,
  }

  const everythingEx: WatercolorGeneratorProps = {
      svgHeight: svgHeight,
      svgWidth: svgWidth,
      watercolorShapes: [
          purple,
          aqua
      ],
      backgroundColor: 'salmon'
  }
  
  return (
    <WatercolorGenerator 
      {...everythingEx}
    />
  )
}
```
## Recipes ##
The **numberOfInitialShapes** determines how many base polygons will be rendered. Each one of these will have layers that are then be iterated on and further deformed with more randomized path points and more slightly deformed layers. 
![numberOfInitialShapes](https://github.com/Trehein/react-watercolor/assets/18636420/467bf6e2-45b8-4542-8247-29061124bb03)
### NumberOfInitialShapes.tsx ###
```typescript
import {GenerateWaterDropDataParams, WatercolorGenerator, WatercolorGeneratorProps} from 'react-watercolor'

export default const NumberOfInitialShapes: React.FC = () => {
const svgHeight: number = 500
const svgWidth: number = 1000
const numberOfShapesAndOverlays: number = 5

const calcEvenlySpacedNumbers: (fullDimension: number, index: number, numberOfPoints: number) => number = (fullDimension: number, index: number, numberOfPoints: number) => {
    const distanceBetweenPoints = fullDimension / (numberOfPoints + 1)
    return distanceBetweenPoints + (distanceBetweenPoints * index)
}

const stuffThatIsTheSameForEach = {
    initPolygonPoints: 2,
    initPolygonRadius: svgHeight * .5,
    originY: svgHeight * .5,
    colors: ['#6527BE'],
    opacity: .2,              
    numberOfInitialShapeLayers: 1,
    maxRandomNumberForInitDeform: 30,
    maxNumberOfRecurrsionsForInitDeform: 1,
    maxRandomNumberForOverlayDeform: 10,
    maxNumberOfRecurrsionsForOverlayDeform: 1,
    initRotationAngle: 90
}

const shapesArray = new Array(numberOfShapesAndOverlays).fill(undefined).map((item: any, index: number) => {
    return {
        numberOfInitialShapes: index + 1,
        originX: calcEvenlySpacedNumbers(svgWidth, index, numberOfShapesAndOverlays),
        ...stuffThatIsTheSameForEach
    }
})

const numberOfOverlaysEx: WatercolorGeneratorProps = {
    svgHeight: svgHeight,
    svgWidth: svgWidth,
    watercolorShapes: shapesArray,
    backgroundColor: '#A7EDE7' 
}
  
  return (
    <WatercolorGenerator 
      {...numberOfOverlaysEx}
    />
  )
}
```
The **numberOfOverlays** makes a deformed copy of the initial shape. Each one of these will have layers that are then be iterated on and further deformed with more randomized path points and more slightly deformed layers. 
![numberOfOverlays](https://github.com/Trehein/react-watercolor/assets/18636420/525c7301-5642-4b6c-9696-dae1ea836ec8)
### NumberOfOverlays.tsx ###
```typescript
import {GenerateWaterDropDataParams, WatercolorGenerator, WatercolorGeneratorProps} from 'react-watercolor'

export default const NumberOfOverlays = () => {
  const svgHeight: number = 500
  const svgWidth: number = 1000
  const numberOfShapesAndOverlays: number = 5

  const calcEvenlySpacedNumbers: (fullDimension: number, index: number, numberOfPoints: number) => number = (fullDimension: number, index: number, numberOfPoints: number) => {
      const distanceBetweenPoints = fullDimension / (numberOfPoints + 1)
      return distanceBetweenPoints + (distanceBetweenPoints * index)
  }

  const stuffThatIsTheSameForEach = {
      initPolygonPoints: 2,
      initPolygonRadius: svgHeight * .5,
      originY: svgHeight * .5,
      colors: ['#6527BE'],
      opacity: .2,              
      numberOfInitialShapeLayers: 1,
      maxRandomNumberForInitDeform: 30,
      maxNumberOfRecurrsionsForInitDeform: 1,
      maxRandomNumberForOverlayDeform: 10,
      maxNumberOfRecurrsionsForOverlayDeform: 1,
      initRotationAngle: 90
  }

  const shapesArray = new Array(numberOfShapesAndOverlays).fill(undefined).map((item: any, index: number) => {
      return {
          numberOfOverlays: index + 1,
          originX: calcEvenlySpacedNumbers(svgWidth, index, numberOfShapesAndOverlays),
          ...stuffThatIsTheSameForEach
      }
  })

  const numberOfOverlaysEx: WatercolorGeneratorProps = {
      svgHeight: svgHeight,
      svgWidth: svgWidth,
      watercolorShapes: shapesArray,
      backgroundColor: '#A7EDE7' 
  }
  
  return (
    <WatercolorGenerator 
      {...numberOfOverlaysEx}
    />
  )
}
```
The total number of polygons that make up a shape is calculated like this... 
```typescript
numberOfPolygonsGenerated = numberOfInitialShapeLayers * numberOfOverlays
```
![numberOfInitialShapesAndOverlays](https://github.com/Trehein/react-watercolor/assets/18636420/263048ae-b08d-429d-9716-8c95d1eec471)
### NumberOfInitialShapesAndOverlaysEx.tsx ###
```typescript
import {GenerateWaterDropDataParams, WatercolorGenerator, WatercolorGeneratorProps, calcEvenlySpacedNumbers} from 'react-watercolor'

export default const NumberOfInitialShapesAndOverlaysEx: React.FC = () => {
  const svgHeight: number = 500
  const svgWidth: number = 1000
  const numberOfShapesAndOverlays: number = 5

  const stuffThatIsTheSameForEach = {
      initPolygonPoints: 2,
      initPolygonRadius: svgHeight * .5,
      originY: svgHeight * .5,
      colors: ['#6527BE'],
      opacity: .2,             
      maxRandomNumberForInitDeform: 30,
      maxNumberOfRecurrsionsForInitDeform: 1,
      maxRandomNumberForOverlayDeform: 10,
      maxNumberOfRecurrsionsForOverlayDeform: 1,
      initRotationAngle: 90
  }

  const shapesArray = new Array(numberOfShapesAndOverlays).fill(undefined).map((item: any, index: number) => {
      return {
          numberOfOverlays: index + 1,
          numberOfInitialShapeLayers: index + 1,        
          originX: calcEvenlySpacedNumbers(svgWidth, index, numberOfShapesAndOverlays),
          ...stuffThatIsTheSameForEach
      }
  })

  const numberOfOverlaysEx: WatercolorGeneratorProps = {
      svgHeight: svgHeight,
      svgWidth: svgWidth,
      watercolorShapes: shapesArray,
      backgroundColor: '#A7EDE7' 
  }
  
  return (
    <WatercolorGenerator 
      {...numberOfOverlaysEx}
    />
  )
}
```
**maxRandomNumberForInitDeform** controls how far midpoints that are generated can be + or - this value based on a guassian curve for the intial deforming of the shapes. These points will be further split by the overlay deformation.
![maxRandomNumberForInitDeform](https://github.com/Trehein/react-watercolor/assets/18636420/bc79ca8c-b2df-4a7c-a78d-8573b89c3f10)
### MaxRandomNumberForInitDeformEx.tsx ###
```typescript
import {GenerateWaterDropDataParams, WatercolorGenerator, WatercolorGeneratorProps, calcEvenlySpacedNumbers} from 'react-watercolor'

export default const MaxRandomNumberForInitDeformEx: React.FC = () => {
  const svgHeight: number = 500
  const svgWidth: number = 1000
  const numberOfShapesAndOverlays: number = 5

  const stuffThatIsTheSameForEach = {
      initPolygonPoints: 2,
      initPolygonRadius: svgHeight * .5,
      originY: svgHeight * .5,
      colors: ['#025464'],
      opacity: 1,              
      maxNumberOfRecurrsionsForInitDeform: 10,
      maxRandomNumberForOverlayDeform: 1,
      maxNumberOfRecurrsionsForOverlayDeform: 1,
      numberOfOverlays: 1,
      numberOfInitialShapeLayers: 1,
      initRotationAngle: 90
  }

  const shapesArray: GenerateWaterDropDataParams[] = new Array(numberOfShapesAndOverlays).fill(undefined).map((item: any, index: number) => {
      return {
          maxRandomNumberForInitDeform: index * 5,
          originX: calcEvenlySpacedNumbers(svgWidth, index, numberOfShapesAndOverlays),
          ...stuffThatIsTheSameForEach
      }
  })

  const maxRandomNumberForInitDeformEx: WatercolorGeneratorProps = {
      svgHeight: svgHeight,
      svgWidth: svgWidth,
      watercolorShapes: shapesArray,
      backgroundColor: 'white' 
  }
  
  return (
    <WatercolorGenerator 
      {...maxRandomNumberForInitDeformEx}
    />
  )
}
```
**maxRandomNumberForOverlayDeform** determins how far overlay generated points can vary from the initial points using the same guassian curve ideas.
![maxRandomNumberForOverlayDeform](https://github.com/Trehein/react-watercolor/assets/18636420/cd9dd316-c73a-4ebe-8a71-522dc346efda)
### MaxRandomNumberForInitDeformEx.tsx ###
```typescript
import {GenerateWaterDropDataParams, WatercolorGenerator, WatercolorGeneratorProps, calcEvenlySpacedNumbers} from 'react-watercolor'

export default const MaxRandomNumberForInitDeformEx: React.FC = () => {
  const svgHeight: number = 500
  const svgWidth: number = 1000
  const numberOfShapesAndOverlays: number = 5

  const stuffThatIsTheSameForEach = {
      initPolygonPoints: 2,
      initPolygonRadius: svgHeight * .5,
      originY: svgHeight * .5,
      colors: ['#025464'],
      opacity: 1,              
      maxRandomNumberForInitDeform: 40,
      maxNumberOfRecurrsionsForInitDeform: 1,
      maxNumberOfRecurrsionsForOverlayDeform: 1,
      numberOfOverlays: 1,
      numberOfInitialShapeLayers: 1,
      initRotationAngle: 90
  }

  const shapesArray: GenerateWaterDropDataParams[] = new Array(numberOfShapesAndOverlays).fill(undefined).map((item: any, index: number) => {
      return {
          maxRandomNumberForOverlayDeform: 25 + (index * 25),
          originX: calcEvenlySpacedNumbers(svgWidth, index, numberOfShapesAndOverlays),
          ...stuffThatIsTheSameForEach
      }
  })

  const maxRandomNumberForOverlayDeformEx: WatercolorGeneratorProps = {
      svgHeight: svgHeight,
      svgWidth: svgWidth,
      watercolorShapes: shapesArray,
      backgroundColor: 'white' 
  }
  
  return (
    <WatercolorGenerator 
      {...maxRandomNumberForOverlayDeformEx}
    />
  )
}
```
**maxNumberOfRecurrsionsForInitDeform** controls how many times the initial point array will be iterated on, each time, adding a new midpoint between midpoints.
![maxNumberOfRecurrsionsForInitDeform](https://github.com/Trehein/react-watercolor/assets/18636420/20730810-2364-41ab-822e-9efbdbde6671)
### MaxNumberOfRecurrsionsForInitDeformEx.tsx ###
```typescript
import {GenerateWaterDropDataParams, WatercolorGenerator, WatercolorGeneratorProps, calcEvenlySpacedNumbers} from 'react-watercolor'

export default const MaxRandomNumberForInitDeformEx: React.FC = () => {
  const svgHeight: number = 500
  const svgWidth: number = 1000
  const numberOfShapesAndOverlays: number = 5

  const stuffThatIsTheSameForEach = {
      initPolygonPoints: 2,
      initPolygonRadius: svgHeight * .5,
      originY: svgHeight * .5,
      colors: ['#025464'],
      opacity: 1,              
      maxRandomNumberForInitDeform: 40,
      maxRandomNumberForOverlayDeform: 1,
      maxNumberOfRecurrsionsForOverlayDeform: 2,
      numberOfOverlays: 1,
      numberOfInitialShapeLayers: 1,
      initRotationAngle: 90
  }

  const shapesArray: GenerateWaterDropDataParams[] = new Array(numberOfShapesAndOverlays).fill(undefined).map((item: any, index: number) => {
      return {
          maxNumberOfRecurrsionsForInitDeform: (1 + index),
          originX: calcEvenlySpacedNumbers(svgWidth, index, numberOfShapesAndOverlays),
          ...stuffThatIsTheSameForEach
      }
  })

  const maxNumberOfRecurrsionsForInitDeformEx: WatercolorGeneratorProps = {
      svgHeight: svgHeight,
      svgWidth: svgWidth,
      watercolorShapes: shapesArray,
      backgroundColor: 'white' 
  }
  
  return (
    <WatercolorGenerator 
      {...maxRandomNumberForOverlayDeformEx}
    />
  )
}
```
**maxNumberOfRecurrsionsForOverlayDeform** further deforms the initial deformed polygon for each overlay.
![maxNumberOfRecurrsionsForOverlayDeform](https://github.com/Trehein/react-watercolor/assets/18636420/e1b675c4-5ae5-4676-b7d4-375acf9425ed)
### MaxNumberOfRecurrsionsForOverlayDeformEx.tsx ###
```typescript
import {GenerateWaterDropDataParams, WatercolorGenerator, WatercolorGeneratorProps, calcEvenlySpacedNumbers} from 'react-watercolor'

export default const MaxNumberOfRecurrsionsForOverlayDeformEx: React.FC = () => {
  const svgHeight: number = 500
  const svgWidth: number = 1000
  const numberOfShapesAndOverlays: number = 5

  const stuffThatIsTheSameForEach = {
      initPolygonPoints: 2,
      initPolygonRadius: svgHeight * .5,
      originY: svgHeight * .5,
      colors: ['#025464'],
      opacity: 1,              
      maxRandomNumberForInitDeform: 40,
      maxNumberOfRecurrsionsForInitDeform: 2,
      maxRandomNumberForOverlayDeform: 1,
      numberOfOverlays: 1,
      numberOfInitialShapeLayers: 1,
      initRotationAngle: 90
  }

  const shapesArray: GenerateWaterDropDataParams[] = new Array(numberOfShapesAndOverlays).fill(undefined).map((item: any, index: number) => {
      return {
          maxNumberOfRecurrsionsForOverlayDeform: index + 1,
          originX: calcEvenlySpacedNumbers(svgWidth, index, numberOfShapesAndOverlays),
          ...stuffThatIsTheSameForEach
      }
  })

  const maxNumberOfRecurrsionsForOverlayDeformEx: WatercolorGeneratorProps = {
      svgHeight: svgHeight,
      svgWidth: svgWidth,
      watercolorShapes: shapesArray,
      backgroundColor: 'white' 
  }
  
  return (
    <WatercolorGenerator 
      {...maxRandomNumberForOverlayDeformEx}
    />
  )
}
```
**maxNumberOfRecurrsionsForOverlayDeform** and **maxNumberOfRecurrsionsForInitDeform** exponentially magnify each other like this...
```typescript
numberOfPointsInEachOverlayAfterDeform = initPolygonPoints * (2 ^ maxNumberOfRecurrsionsForInitDeform + maxNumberOfRecurrsionsForOverlayDeform)
```
![maxNumberOfRecursionsForInitAndOverlays](https://github.com/Trehein/react-watercolor/assets/18636420/e57ca680-4a52-4250-829c-43eca80f9f2d)
### MaxNumberOfRecursionsForInitAndOverlaysEx.tsx ###
```typescript
import {GenerateWaterDropDataParams, WatercolorGenerator, WatercolorGeneratorProps, calcEvenlySpacedNumbers} from 'react-watercolor'

export default const MaxNumberOfRecursionsForInitAndOverlaysEx: React.FC = () => {
  const svgHeight: number = 500
  const svgWidth: number = 1000
  const numberOfShapesAndOverlays: number = 5

  const stuffThatIsTheSameForEach = {
      initPolygonPoints: 2,
      initPolygonRadius: svgHeight * .5,
      originY: svgHeight * .5,
      colors: ['#025464'],
      opacity: 1,              
      maxRandomNumberForInitDeform: 40,
      maxNumberOfRecurrsionsForInitDeform: 2,
      maxRandomNumberForOverlayDeform: 1,
      numberOfOverlays: 1,
      numberOfInitialShapeLayers: 1,
      initRotationAngle: 90
  }

  const shapesArray: GenerateWaterDropDataParams[] = new Array(numberOfShapesAndOverlays).fill(undefined).map((item: any, index: number) => {
      return {
          maxNumberOfRecurrsionsForOverlayDeform: index + 1,
          originX: calcEvenlySpacedNumbers(svgWidth, index, numberOfShapesAndOverlays),
          ...stuffThatIsTheSameForEach
      }
  })

  const maxNumberOfRecurrsionsForOverlayDeformEx: WatercolorGeneratorProps = {
      svgHeight: svgHeight,
      svgWidth: svgWidth,
      watercolorShapes: shapesArray,
      backgroundColor: 'white' 
  }
  
  return (
    <WatercolorGenerator 
      {...maxRandomNumberForOverlayDeformEx}
    />
  )
}
```

<!-- todo - gradient background? -->
<!-- todo - color array with weights -->
<!-- todo - custom shapes -->
<!-- todo - text masking -->
<!-- todo - optional rounded paths -->
<!-- todo - optional additional filters -->
<!-- todo - more examples -->
<!-- todo - readme docs -->
