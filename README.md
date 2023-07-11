# react-watercolor
```
npm i react-watercolor
```
![SimpleTriangle](https://github.com/Trehein/react-watercolor/assets/18636420/69c1e93a-ac26-4f62-8444-001c49ed5bb5)
**BlueTriangle.tsx**
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
![lineEx](https://github.com/Trehein/react-watercolor/assets/18636420/51e52672-c4b6-431b-a71b-4ba981bae87a)
**BlackLine.tsx**
```typescript
import {GenerateWaterDropDataParams, WatercolorGenerator, WatercolorGeneratorProps} from 'react-watercolor'

export default const BlackLine = () => {
  const svgHeight: number = 500
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

<!-- threelines -->
![threeLineCross](https://github.com/Trehein/react-watercolor/assets/18636420/0bc280ef-cf0c-48dc-aa60-a67dcd4bab03)

<!-- staggeredRadius -->
![staggeredRadius](https://github.com/Trehein/react-watercolor/assets/18636420/dc595910-5589-45f9-b61f-5c60f75100cb)


<!-- optional backgroundcolor -->
<!-- todo - color array with weights -->
<!-- todo - custom shapes -->
<!-- todo - text masking -->
<!-- todo - optional rounded paths -->
<!-- todo - optional additional filters -->
<!-- todo - more examples -->
<!-- todo - readme docs -->
