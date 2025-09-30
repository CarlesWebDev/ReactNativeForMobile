import { Alert, Pressable, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuthStore } from "../stores/authStore";
import { router } from "expo-router";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { register, loading, error } = useAuthStore();
  const [ errors, setErrors] = useState({});

  const handleRegister = async () => {

    let newErrors = {};

   if (!email) {
      newErrors.email = "Email wajib diisi";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Format email tidak valid";
    }
    
    if(!password) {
        newErrors.password = "password Wajib Disi";
    } else if (password.length < 8) {
        newErrors.password = "Password Minimal 8 Karakter";
    }

    if(Object.keys(newErrors).length>0) {
        setErrors(newErrors);
        return;
    }

    setErrors({});

    const success = await register(email, password);
    if (success) {
      Alert.alert("Akun Berhasil Dibuat", "Silakan Kembali Kehalaman Login");
      // router.push("(auth)/login");
    } else {
      Alert.alert("Gagal", error || "Register Gagal");
    }
  };

    return (
      <SafeAreaView className="flex-1 bg-[#1a1a1d]">
        <View className="justify-center flex-1 px-6">
          <Text className="flex-row mb-8 text-3xl font-extrabold text-center text-white">
            {" "}
            Create Your Account
            <MaterialCommunityIcons
              name="account"
              size={30}
              color="white"
              style={{ marginLeft: 150 }}
            />
          </Text>

          <View className="mb-4">
            <Text className="mb-2 text-gray-300">Email</Text>
            <TextInput
              placeholder="Masukkan email"
              placeholderTextColor="#9ca3af"
              className="w-full px-4 py-3 text-white bg-gray-800 rounded-xl"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
            {errors.email && (
                <Text className="text-red-500">{errors.email}</Text>
            )}
          </View>

          <View className="mb-4">
            <Text className="mb-2 text-gray-300">Password</Text>
            <TextInput
              placeholder="Masukkan Password"
              placeholderTextColor="#9ca3af"
              className="w-full px-4 py-3 text-white bg-gray-800 rounded-xl"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
            {errors.password && (
                <Text className="text-red-500">{errors.password}</Text>
            )}
          </View>

          <View className="flex-row justify-center mt-6">
            <Pressable
              onPress={handleRegister}
              disabled={loading}
              secureTextEntry
              className="items-center justify-center w-full px-6 py-3 bg-blue-600 rounded-xl active:bg-blue-700"
            >
              <Text className="text-lg font-bold text-white">
                {loading ? "Mendaftar...." : "Daftar"}
              </Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    );
};

export default Register;
