import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { FontAwesome } from '@expo/vector-icons';

const Contact = () => {
  const Data = [
    { label: "Nama", value: "Lumba Lumba Jawa", icon: "user" },
    { label: "Profesi", value: "Frontend / Fullstack Developer (React, React Native, Vue, Laravel, Spring Boot)", icon: "code" },
    { label: "Lokasi", value: "Indonesia", icon: "map-marker" },
    { label: "Tanggal Lahir", value: "(Info belum tersedia)", icon: "calendar" },
    { label: "Gaya Kerja", value: "Suka jawaban to the point dan project-based learning", icon: "bolt" },
  ];

  
  return (
    <View className="flex-1 bg-gray-100 justify-center items-center p-4">
      <Text className="text-3xl font-bold mb-6 text-blue-600">Contact Me</Text>

      <View className="w-full max-w-md rounded-2xl p-6 bg-white shadow-md">
        {Data.map((item, index) => (
          <View key={index} className="flex-row mb-4 items-center">
            <FontAwesome name={item.icon} size={20} color="#2563EB" className="mr-3" />
            <Text className="font-bold text-lg text-gray-700 w-32">{item.label}:</Text>
            <Text className="text-lg text-gray-800 flex-shrink">{item.value}</Text>
          </View>
        ))}
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

export default Contact
