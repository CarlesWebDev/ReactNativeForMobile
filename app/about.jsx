import { View, Text, Image, useColorScheme,} from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import GAMABAR1 from "../assets/img/image1.png"
import GAMABAR2 from "../assets/img/image2.png"
import GAMABAR3 from "../assets/img/image.png"
import {Colors} from '../constants/color'
const About = () => {

  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light
  
  return (
    <View className='flex flex-col' style={{backgroundColor: theme.background, flex: 1}} >
      <Text className='px-6 mt-5 text-2xl font-bold text-wrap'>
        My Name Lumba Lumba Jawa and i Web Devloper
      </Text>
          
     <Text className='flex flex-col px-6 mt-10 font-semibold'>Keahlian ku:</Text>


    <View className='flex-row flex-wrap gap-3 px-6 mt-5 space-x-2'>
        <Image source={GAMABAR1} className='w-20 h-20' style={{ backgroundColor: theme.primary }} />
        <Image source={GAMABAR2} className='w-20 h-20' />
        <Image source={GAMABAR3} className='w-20 h-20' />
        <Image source={GAMABAR1} className='w-20 h-20' />
        <Image source={GAMABAR1} className='w-20 h-20' />
        <Image source={GAMABAR2} className='w-20 h-20' />
        <Image source={GAMABAR3} className='w-20 h-20' />
        <Image source={GAMABAR1} className='w-20 h-20' />
        <Image source={GAMABAR1} className='w-20 h-20' />
        <Image source={GAMABAR2} className='w-20 h-20' />
        <Image source={GAMABAR3} className='w-20 h-20' />
        <Image source={GAMABAR1} className='w-20 h-20' />
    </View>
    
      <Link 
        href="/" 
        className='p-2 mx-auto mt-10 font-semibold text-center bg-blue-400 rounded-md shadow-lg'
      >
        Kembali Ke Home
      </Link>     
    </View>
  )
}

export default About