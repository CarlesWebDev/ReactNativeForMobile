import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import "../global.css"
import {Colors} from '../constants/color'
import { StatusBar } from 'expo-status-bar'

const RootLayout = () => {

  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light



  return (
    <>
    <StatusBar value="auto" />
    <Stack screenOptions={{ headerStyle: { backgroundColor: theme.navBackground }, headerTintColor: theme.title, headerTitleStyle: { fontWeight: 'bold' } }}>
      <Stack.Screen name='index' options={{ title: 'home' }} />
      <Stack.Screen name='about' options={{ title: 'Tentang' }} />
      <Stack.Screen name='contact' options={{ title: 'Kontak', headerShown: false }} />
      </Stack>
    </>
  )
}
export default RootLayout
