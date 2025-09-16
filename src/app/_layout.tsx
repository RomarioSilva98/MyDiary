import { Stack } from "expo-router";
import { ThemeProvider, useTheme } from "../styles/ThemeContext";
import Header from "../components/Header";
import BottomBar from "../components/BottomBar";
import { View } from "react-native";
import { useState } from "react";
import LoginScreen from "./login"; // aqui fica sua tela de login

function LayoutWithHeaderAndBottom() {
  const { toggleTheme } = useTheme();
  const [unlocked, setUnlocked] = useState(false);

  if (!unlocked) {
    return <LoginScreen onUnlock={() => setUnlocked(true)} />;
  }

  return (
    <View style={{ flex: 1 }}>
      {/* Header fixo */}
      <Header toggleTheme={toggleTheme} />

      {/* Conteúdo das rotas */}
      <View style={{ flex: 1 }}>
        <Stack screenOptions={{ headerShown: false }} />
      </View>

      {/* BottomBar fixo */}
      <BottomBar />
    </View>
  );
}

export default function RootLayout() {
  return (
    <ThemeProvider>
      <LayoutWithHeaderAndBottom />
    </ThemeProvider>
  );
}
