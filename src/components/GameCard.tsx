import React from "react";
import { Game } from "../hooks/useGames";
import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";


interface props {
  game: Game;
}
const GameCard = ({ game }: props) => {
 
  return (
    <Card width='300px' borderRadius={10} overflow={"hidden"}>
      <Image src={game.background_image}></Image>
      <CardBody>
        <Heading fontSize=" 2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
