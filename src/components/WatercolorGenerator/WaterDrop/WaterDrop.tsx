import React from 'react'
import { WaterDropProps } from '../../../types'
import { generateCircleCoords, generateRandomPoints, pathFinderXY } from '../../../utils'

export const WaterDrop: React.FC<WaterDropProps> = (props) => {
    const {
        colors, 
        maxRandomNumberForInitDeform, 
        maxNumberOfRecurrsionsForInitDeform, 
        maxRandomNumberForOverlayDeform, 
        maxNumberOfRecurrsionsForOverlayDeform, 
        numberOfOverlays, 
        initPolygonRadius, 
        originX, 
        originY, 
        opacity, 
        initPolygonPoints,
        initRotationAngle
    } = props
    const emptyArray: undefined[] = new Array(numberOfOverlays).fill(undefined)

    const initPoints = generateCircleCoords(initPolygonPoints, initPolygonRadius, {originX: originX, originY: originY}, initRotationAngle).map((point: any) => {
        return {x: point.x, y: point.y}
    })

    const firstDeform = generateRandomPoints(initPoints, maxRandomNumberForInitDeform, maxNumberOfRecurrsionsForInitDeform) // todo - add optional shape points here

    return (
        <>
            {emptyArray.map((emptySlot: undefined, i: number) => {
                return <polygon
                    key={i} 
                    points={pathFinderXY(generateRandomPoints(firstDeform, maxRandomNumberForOverlayDeform, maxNumberOfRecurrsionsForOverlayDeform))} 
                    fill={colors[0]} 
                    opacity={opacity} 
                />
            })}
            {/* <polygon points={pathFinderXY(generateRandomPoints(firstDeform, 15, 8))} fill='blue' opacity={opacity} /> */}
        </>

    )
}

