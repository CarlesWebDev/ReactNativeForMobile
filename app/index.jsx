import { Link } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'


const Home = () => {
  return (
    <View>
      <Text style={{ marginBottom: 20 }}>Home</Text>
      <Link href="/about">Go to About</Link>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})