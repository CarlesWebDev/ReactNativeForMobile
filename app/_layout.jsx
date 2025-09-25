import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const RootLayout = () => {
  return (
    <Stack screenOptions={{ headerStyle: { backgroundColor: '#ADD8E6' }, headerTintColor: '#fff', headerTitleStyle: { fontWeight: 'bold' } }}>
      <Stack.Screen name='index' options={{ title: 'home' }} />
      <Stack.Screen name='about' options={{ title: 'Tentang' }} />
      <Stack.Screen name='contact' options={{ title: 'Kontak', headerShown: false }} />
    </Stack>
  )
}
export default RootLayout
