import { View, Text, ScrollView, Dimensions } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");

const Contact = () => {
  const Data = [
    { label: "Nama", value: "Lumba Lumba Jawa", icon: "user" },
    {
      label: "Profesi",
      value: "Fullstack Developer",
      icon: "code",
    },
    { label: "Lokasi", value: "Indonesia", icon: "map-marker" },
    {
      label: "Tanggal Lahir",
      value: "Kapan ya",
      icon: "calendar",
    },
    {
      label: "Gaya Kerja",
      value: "Suka jawaban to the point dan project-based learning",
      icon: "bolt",
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-[#1a1a1d]">
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 24,
          paddingVertical: 32,
        }}
      >
        {/* Header */}
        <Text className="text-3xl font-extrabold text-center text-green-400">
          Contact Me 📬
        </Text>
        <Text className="mt-2 text-base text-center text-gray-400">
          Yuk kenalan, jangan sungkan 😎
        </Text>

        {/* Card */}
        <View
          style={{
            width: width * 0.9, // 90% dari layar
            alignSelf: "center",
          }}
          className="p-6 mt-8 bg-white shadow-xl rounded-2xl"
        >
          {Data.map((item, index) => (
            <View
              key={index}
              className={`flex-row items-center ${
                index !== Data.length - 1
                  ? "pb-4 mb-4 border-b border-gray-200"
                  : ""
              }`}
            >
              <View className="items-center justify-center w-12 h-12 mr-4 bg-blue-100 rounded-full">
                <FontAwesome
                  name={item.icon}
                  size={22}
                  color="#2563EB"
                />
              </View>
              <View className="flex-1">
                <Text className="px-1 text-base font-semibold text-gray-700">
                  {item.label}
                </Text>
                <Text className="px-1 text-gray-600">{item.value}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Back Button */}
        <View className="items-center mt-10">
          <Link
            href="/"
            className="px-6 py-3 font-semibold text-white bg-blue-500 shadow-lg rounded-xl active:bg-blue-600"
          >
            Kembali ke Home
          </Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Contact;