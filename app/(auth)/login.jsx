import { View, Text, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import { Link, router } from "expo-router";
import { useAuthStore } from "../stores/authStore";



const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, loading } = useAuthStore();
  const [errors, setErrors] = useState({});

  const handleLogin = async () => {
    let newErrors = {};

     if (!email) {
      newErrors.email = "Email wajib diisi";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Format email tidak valid";
    }

    if(!password) {
      newErrors.password = "Password wajib disi"
    } else if (password.length < 8) {
      newErrors.password = "Password harus 8 karakter"
    }

    if(Object.keys(newErrors).length>0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    const success = await login(email, password);
    if (success) {
      console.log("Login berhasil!");
      router.replace("/"); 
    }
  };

  return (
    <>
     <View className="justify-center flex-1 px-6 bg-[#1a1a1d]">
      <Text className="mb-8 text-3xl font-extrabold text-center text-white">
        Masuk 🔑
      </Text>

      <View className="mb-4">
        <Text className="mb-2 text-gray-300">Email</Text>
        <TextInput
          placeholder="Masukkan email"
          placeholderTextColor="#9ca3af"
          className="w-full px-4 py-3 text-white bg-gray-800 rounded-xl"
          value={email}
          onChangeText={setEmail}
        />
        {errors.email && (
          <Text className="text-red-500">{errors.email}</Text>
        )}
      </View>

      <View className="mb-6">
        <Text className="mb-2 text-gray-300">Password</Text>
        <TextInput
          placeholder="Masukkan password"
          placeholderTextColor="#9ca3af"
          secureTextEntry
          className="w-full px-4 py-3 text-white bg-gray-800 rounded-xl"
          value={password}
          onChangeText={setPassword}
        />
        {errors.password && (
          <Text className="text-red-500">{errors.password}</Text>
        )}
      </View>

      <Pressable
        onPress={handleLogin}
        className="w-full py-3 bg-red-600 rounded-xl active:bg-red-700"
      >
        <Text className="font-semibold text-center text-white">
          {loading ? "Loading..." : "Login"}
        </Text>
      </Pressable>

      <View className="flex-row justify-center mt-6">
        <Text className="text-gray-400">Belum punya akun? </Text>
          <Link href={"(auth)/register"}>
            <Text className="font-semibold text-blue-400">Daftar</Text>
          </Link>
      </View>
    </View>
    </>
  );
};

export default Login;