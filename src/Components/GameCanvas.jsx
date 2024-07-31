import { Container, Stage } from '@pixi/react';
import React, { useEffect, useState } from 'react';
import { shuffleDeck } from '../Util/shuffleDeck';
import Card from './Card';

const GameCanvas = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const [players, setPlayers] = useState([{ hand: [] }, { hand: [] }, { hand: [] }, { hand: [] }]);

    useEffect(() => {
        const shuffelDeck = () => {
            const shuffledDeck = shuffleDeck();
            const player1Hand = shuffledDeck.slice(0, 7);
            const player2Hand = shuffledDeck.slice(7, 14);
            const player3Hand = shuffledDeck.slice(14, 21);
            const player4Hand = shuffledDeck.slice(21, 28);
            setPlayers([{ hand: player1Hand }, { hand: player2Hand }, { hand: player3Hand }, { hand: player4Hand }]);
        }
        shuffelDeck();
    }, [])


    console.dir(players);

    // const style={
    //     backgroundImage: linear-gradient(to bottom, #1A4A1C, #308834 600px)
    // }
    const playerPositions = [
        { x: width / 2, y: 50 },
        { x: width - 170, y: height / 2 },
        { x: width / 2, y: height - 200 },
        { x: 50, y: height / 2 },
    ];
    const scaleFactor = width < 500 ? 0.3 : 0.5;
    return (
        <div className="w-full h-screen flex flex-col justify-center items-center bg-green-800">
            <Stage width={width} height={height} options={{ backgroundColor: 0x308834 }}>
                <Container>
                    {players?.map((player, playerIndex) =>
                        player?.hand?.map((card, cardIndex) => {
                            const position = playerPositions[playerIndex];
                            let x = position.x;
                            let y = position.y;
                            const cardSpacing = 50; // Adjust spacing between cards

                            console.log(player.hand.length)
                            if (playerIndex === 0) { // Player 1 (Top)
                                x -= (player.hand.length / 2) * cardSpacing - cardIndex * cardSpacing;
                                y -= 0; // Keep y fixed for the top player
                            } else if (playerIndex === 1) {
                                x -= 0;
                                y -= (player.hand.length / 2) * cardSpacing - cardIndex * cardSpacing;
                            } else if (playerIndex === 2) {
                                x -= (player.hand.length / 2) * cardSpacing - cardIndex * cardSpacing;
                                y -= 0;
                            } else if (playerIndex === 3) {
                                x -= 0;
                                y -= (player.hand.length / 2) * cardSpacing - cardIndex * cardSpacing;
                            }
                            return (
                                <Card
                                    key={card.code}
                                    image={card.image}
                                    x={x}
                                    y={y}
                                    scale={scaleFactor}
                                />
                            );
                        })
                    )}
                </Container>
            </Stage>
        </div>
    )
}

export default GameCanvas