import { Link } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'
import "../global.css"


const Home = () => {
  return (
    <View>
      <Text className='text-red-500 text-center'>Home</Text>
      <Link href="/about">Go to About</Link>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})