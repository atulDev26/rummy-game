import { Sprite } from '@pixi/react'
import React from 'react'

const Card = ({ image, x, y, scale }) => {
    return (
        <Sprite
            image={image}
            x={x}
            y={y}
            scale={{ x: scale, y: scale }}
            interactive
            buttonMode
            pointerdown={() => console.log(`Card clicked`)}
        />
    )
}

export default Card