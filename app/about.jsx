import { View, Text, Image,} from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import GAMABAR1 from "../assets/img/image1.png"
import GAMABAR2 from "../assets/img/image2.png"
import GAMABAR3 from "../assets/img/image.png"

const About = () => {
  return (
    <View className=' flex flex-col'>
      <Text className='font-bold mt-5 px-6 text-wrap text-2xl'>
        My Name Lumba Lumba Jawa and i Web Devloper
      </Text>
          
     <Text className='flex flex-col mt-10 px-6 font-semibold'>Keahlian ku:</Text>


    <View className='flex-row flex-wrap px-6 space-x-2 gap-3 mt-5'>
        <Image source={GAMABAR1} className='w-20 h-20' />
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
        className='font-semibold shadow-lg bg-blue-400 p-2 rounded-md mt-10 mx-auto text-center'
      >
        Kembali Ke Home
      </Link>     
    </View>
  )
}

export default About