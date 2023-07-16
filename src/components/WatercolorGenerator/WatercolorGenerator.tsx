import React from 'react'
import { GenerateWaterDropDataParams, WatercolorGeneratorProps, WaterDropProps } from '../../types'
import { WaterDrop } from './WaterDrop'
import { generateWaterDropData } from '../../utils/generateWaterDropData'

export const WatercolorGenerator: React.FC<WatercolorGeneratorProps> = (props) => {    
    const {svgHeight, svgWidth, watercolorShapes, backgroundColor} = props

    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <svg height={svgHeight} width={svgWidth}>
                <rect fill={backgroundColor ? backgroundColor : 'white'} height={svgHeight} width={svgWidth} x={0} y={0}/>
                    {
                        watercolorShapes.map((shape: GenerateWaterDropDataParams, i: number) => {
                            return (
                                <>
                                    {
                                        generateWaterDropData(shape).map((waterDrop: WaterDropProps, i: number) => {
                                            const {
                                                initPolygonPoints, 
                                                initPolygonRadius, 
                                                originX, 
                                                originY, 
                                                colors, 
                                                opacity, 
                                                numberOfOverlays, 
                                                maxRandomNumberForInitDeform, 
                                                maxNumberOfRecurrsionsForInitDeform, 
                                                maxRandomNumberForOverlayDeform, 
                                                maxNumberOfRecurrsionsForOverlayDeform,
                                                initRotationAngle
                                            } = waterDrop

                                            return (
                                                <WaterDrop 
                                                    key={i}
                                                    initPolygonPoints={initPolygonPoints}
                                                    initPolygonRadius={initPolygonRadius} 
                                                    originX={originX} 
                                                    originY={originY} 
                                                    colors={colors} 
                                                    opacity={opacity} 
                                                    numberOfOverlays={numberOfOverlays} 
                                                    maxRandomNumberForInitDeform={maxRandomNumberForInitDeform} 
                                                    maxNumberOfRecurrsionsForInitDeform={maxNumberOfRecurrsionsForInitDeform} 
                                                    maxRandomNumberForOverlayDeform={maxRandomNumberForOverlayDeform} 
                                                    maxNumberOfRecurrsionsForOverlayDeform={maxNumberOfRecurrsionsForOverlayDeform}                    
                                                    initRotationAngle={initRotationAngle}
                                                />
                                            )
                                        })
                                    }
                                </>
                            )
                        })
                    }

                {/* {
                    generateWaterDropData(watercolorShapes).map((waterDrop: WaterDropProps, i: number) => {
                        const {
                            initPolygonPoints, 
                            initPolygonRadius, 
                            originX, 
                            originY, 
                            colors, 
                            opacity, 
                            numberOfOverlays, 
                            maxRandomNumberForInitDeform, 
                            maxNumberOfRecurrsionsForInitDeform, 
                            maxRandomNumberForOverlayDeform, 
                            maxNumberOfRecurrsionsForOverlayDeform,
                            initRotationAngle
                        } = waterDrop

                            
                        return (
                            <WaterDrop 
                                key={i}
                                initPolygonPoints={initPolygonPoints}
                                initPolygonRadius={initPolygonRadius} 
                                originX={originX} 
                                originY={originY} 
                                colors={colors} 
                                opacity={opacity} 
                                numberOfOverlays={numberOfOverlays} 
                                maxRandomNumberForInitDeform={maxRandomNumberForInitDeform} 
                                maxNumberOfRecurrsionsForInitDeform={maxNumberOfRecurrsionsForInitDeform} 
                                maxRandomNumberForOverlayDeform={maxRandomNumberForOverlayDeform} 
                                maxNumberOfRecurrsionsForOverlayDeform={maxNumberOfRecurrsionsForOverlayDeform}                    
                                initRotationAngle={initRotationAngle}
                            />
                        )
                    })
                } */}


            </svg>
        </div>

    )
}
