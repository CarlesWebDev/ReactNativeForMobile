import { Link } from "expo-router";
import { Text, View, Image, ScrollView, Dimensions, Pressable } from "react-native";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import FOTOGW from "../../assets/img/image.png";
import "../../global.css";
import { useAuthStore } from "../stores/authStore";
const { width } = Dimensions.get("window");

const Home = () => {
  return (
    <SafeAreaView className="flex-1 bg-[#1a1a1d]">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="flex flex-col items-center px-6 py-8">

          <Image
            source={FOTOGW}
            style={{
              width: width * 0.7,   
              height: width * 0.55, 
              borderRadius: 16,
              borderWidth: 4,
              borderColor: "white",
            }}
            className="shadow-lg shadow-red-800"
            resizeMode="cover"
          />

          <Text className="flex-row mt-8 text-2xl font-extrabold tracking-wide text-center">
            <Text className="text-red-500">Hai </Text>
            <Text className="text-blue-400">I'm </Text>
            <Text className="text-green-400">Lumba </Text>
            <Text className="text-yellow-400">Lumba </Text>
            <Text className="text-purple-400">Jawa</Text>
          </Text>

          <Text
            className="mt-3 text-lg font-bold text-green-400"
            style={{
              textShadowColor: "#22c55e",
              textShadowOffset: { width: 0, height: 0 },
              textShadowRadius: 6,
            }}
          >
            Full Stack Dev & Mobile Dev
          </Text>

          <Text className="mt-4 text-base font-medium leading-6 text-center text-gray-300">
            Saya adalah{" "}
            <Text className="font-bold text-yellow-300">Lumba Lumba Jawa</Text> 
            {" "}yang berasal dari Jawa Tengah. Konon katanya jika Anda memanggil nama 
            Lumba Lumba Jawa, dia akan mengintai rumah Anda setiap malam 🐬✨
          </Text>

          <View className="flex-row flex-wrap justify-center gap-4 mx-auto mt-8">
            <Link
              href="/about"
              className="px-6 py-3 font-semibold text-white bg-blue-500 shadow-lg rounded-xl active:bg-blue-600"
            >
              Tentang Saya
            </Link>

            <Link
              href="/contact"
              className="px-6 py-3 font-semibold text-white bg-pink-500 shadow-lg rounded-xl active:bg-pink-600"
            >
              Kontak
            </Link>
            
           <Pressable
  onPress={() => {
    useAuthStore.getState().logout(); // reset state
    router.replace("/(auth)/login");  // balik ke login
  }}
  className="px-6 py-3 bg-red-500 shadow-lg rounded-xl active:bg-red-600"
>
  <Text className="font-semibold text-white">Logout</Text>
</Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;