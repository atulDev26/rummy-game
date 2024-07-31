import { Container, Sprite, Stage, Text } from '@pixi/react'
import React from 'react'

const Containers = () => {
    let arr = [2, 2, 2, 2]
    return (
        <>
            <div className="w-full flex flex-wrap justify-center">
                {arr.map((item, index) => (
                    <div key={index} className="m-2">
                        <Stage width={200} height={200} options={{ backgroundColor: 0x1A4A1C }}>
                            <Container>
                                <Text
                                    text={item.toString()}
                                    anchor={0.5}
                                    x={100}
                                    y={100}
                                />
                            </Container>
                        </Stage>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Containers