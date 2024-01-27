import { HStack, Image } from '@chakra-ui/react'
import React from 'react'
import logo from '../assets/google-play-games.webp'
import ColorModeSwitch from './ColorModeSwitch'
const NavBar = () => {
  return (
    <HStack justifyContent='space-between' padding='10px'>
        <Image src={logo} boxSize='60px'></Image>
        <ColorModeSwitch/>
    </HStack>
  )
}

export default NavBar