import React from 'react'
import { Platform } from '../hooks/useGames'
import { HStack, Icon, Text } from '@chakra-ui/react'
import {FaWindows,FaPlaystation,FaXbox,FaApple,FaLinux,FaAndroid} from 'react-icons/Fa'
import {MdPhoneIphone} from 'react-icons/md'
import {SiNintendo} from 'react-icons/si'
import {BsGlobe} from 'react-icons/bs'
import { IconType } from 'react-icons';

interface props{
    platforms: Platform[]
}
const PlatformIconList = ({platforms}:props) => {
    const iconMap:{[key:string]:IconType} = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox:FaXbox,
        nintendo:SiNintendo,
        mac:FaApple,
        android:FaAndroid,
        linux:FaLinux,
        ios:MdPhoneIphone,
        web:BsGlobe
      }
     return (
   <HStack>
           {platforms.map((platform) =>(
            <Icon as={iconMap[platform.slug]}/>
           )) }
          
   </HStack>
  )
}

export default PlatformIconList