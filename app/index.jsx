import { Link } from 'expo-router'
import { Text, View, Image } from 'react-native'
import "../global.css"
import GAMBAR2 from "../assets/icon.png"

const Home = () => {
  return (
    <View className='flex flex-col'>
      <Text className='text-xl font-extrabold text-center mt-10 text-wrap px-8'>
        My First React Native App with NativeWind 
      </Text>
      <Text className='font-semibold shadow-lg bg-blue-400 px-6 p-2 rounded-md mt-10 mx-auto'>Hallo Brok</Text>

      <Image source={GAMBAR2}  className='w-20 h-20 mx-auto mt-10'/>
    </View>
  )
}

export default Home