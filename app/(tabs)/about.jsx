import { View, Text, Image, ScrollView, Dimensions } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Entypo from "@expo/vector-icons/Entypo";
import GAMABAR1 from "../../assets/img/image1.png";
import GAMABAR2 from "../../assets/img/image2.png";
import GAMABAR3 from "../../assets/img/image3.png";
import VUEJS from "../../assets/img/Vue.js_Logo_2.png";
import REACTJS from "../../assets/img/React.png";
import POSTMAN from "../../assets/img/POSTMAN.webp";
import JAVA from "../../assets/img/images.png";
import SPRINGBOOT from "../../assets/img/img.icons8.png";
import MYSQL from "../../assets/img/Mysql_logo.png";
import MONGODB from "../../assets/img/MONGODB.png";
import LIVEWERE from "../../assets/img/livewire.png";
import PHP from "../../assets/img/PHP-logo.png";
import TS from "../../assets/img/TS.png";
import TELWIND from "../../assets/img/Tailwind_CSS_Logo.png";
import HTML from "../../assets/img/HTMl.png";
import CSS from "../../assets/img/css3.png";
import BOOT from "../../assets/img/Bootstrap.png";

const { width } = Dimensions.get("window");

const logoSize = width * 0.22; 

const About = () => {
  return (
    <SafeAreaView className="flex-1 bg-[#1a1a1d]">
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        <View className="px-6 mt-10">
          <Text className="text-3xl font-extrabold text-center text-green-400">
            Tentang Saya 🐬
          </Text>
          <Text className="mt-3 text-lg font-semibold leading-6 text-center text-gray-300">
            My name is{" "}
            <Text className="text-yellow-300">Lumba Lumba Jawa</Text> and I’m a{" "}
            <Text className="text-blue-400">Web & Mobile Developer</Text>.
          </Text>
        </View>

        <View className="px-6 mt-10">
          <Text className="mb-4 text-xl font-bold text-gray-400">
            ⚡ Keahlian Saya
          </Text>

          <Text className="flex-row mb-2 text-lg font-semibold text-gray-300">
            <MaterialCommunityIcons name="web" size={19} color="skyblue" /> Web
            Development
          </Text>

          <View className="flex-row flex-wrap justify-center gap-4 mt-4">
            <Image source={GAMABAR1} style={{ width: logoSize, height: logoSize, borderRadius: 12 }} />
            <Image source={GAMABAR3} style={{ width: logoSize, height: logoSize, borderRadius: 12 }} />
            <Image source={VUEJS} style={{ width: logoSize, height: logoSize, borderRadius: 12 }} />
            <Image source={REACTJS} style={{ width: logoSize, height: logoSize, borderRadius: 12 }} />
          </View>

          <View className="flex-row flex-wrap justify-center gap-4 mt-4">
            <Image source={POSTMAN} style={{ width: logoSize, height: logoSize, borderRadius: 12 }} />
            <Image source={JAVA} style={{ width: logoSize, height: logoSize, borderRadius: 12 }} />
            <Image source={SPRINGBOOT} style={{ width: logoSize, height: logoSize, borderRadius: 12 }} />
            <Image source={MYSQL} style={{ width: logoSize, height: logoSize, borderRadius: 12 }} />
          </View>

          <View className="flex-row flex-wrap justify-center gap-4 mt-4">
            <Image source={MONGODB} style={{ width: logoSize, height: logoSize, borderRadius: 12 }} />
            <Image source={LIVEWERE} style={{ width: logoSize, height: logoSize, borderRadius: 12 }} />
            <Image source={PHP} style={{ width: logoSize, height: logoSize, borderRadius: 12 }} />
            <Image source={TS} style={{ width: logoSize, height: logoSize, borderRadius: 12 }} />
          </View>

          <View className="flex-row flex-wrap justify-center gap-4 mt-4">
            <Image source={TELWIND} style={{ width: logoSize, height: logoSize, borderRadius: 12 }} />
            <Image source={HTML} style={{ width: logoSize, height: logoSize, borderRadius: 12 }} />
            <Image source={CSS} style={{ width: logoSize, height: logoSize, borderRadius: 12 }} />
            <Image source={BOOT} style={{ width: logoSize, height: logoSize, borderRadius: 12 }} />
          </View>

          <Text className="flex-row mt-10 mb-2 text-lg font-semibold text-gray-300">
            <Entypo name="mobile" size={19} color="skyblue" /> Mobile Development
          </Text>

          <View className="flex-row flex-wrap justify-center gap-4 mt-4">
            <Image source={GAMABAR2} style={{ width: logoSize, height: logoSize, borderRadius: 12 }} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default About;