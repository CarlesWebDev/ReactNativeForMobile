import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function AuthLayout() {
  <StatusBar style="auto" />;
  return (
    <Stack>
      <Stack.Screen
        name="login"
        options={{ 
            title: "Login", headerShown: false }}
      />
      <Stack.Screen
        name="register"
        options={{ 
            title: "Daftar", headerShown: true }}
      />
    </Stack>
  );
}
