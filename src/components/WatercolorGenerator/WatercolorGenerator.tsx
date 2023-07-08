import React from 'react'
import { GenerateWaterDropDataParams, WaterDropProps } from '../../types'
import { WaterDrop } from './WaterDrop'
import { generateWaterDropData } from '../../utils/generateWaterDropData'

export const WatercolorGenerator: React.FC<GenerateWaterDropDataParams> = (props) => {    
    const {svgHeight, svgWidth} = props

    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <svg height={svgHeight} width={svgWidth}>
                <rect fill='white' height={svgHeight} width={svgWidth} x={0} y={0}/>
                {
                    generateWaterDropData(props).map((waterDrop: WaterDropProps, i: number) => {
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
                            maxNumberOfRecurrsionsForOverlayDeform} = waterDrop
                            
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
                            />
                        )
                    })
                }
            </svg>
        </div>

    )
}
