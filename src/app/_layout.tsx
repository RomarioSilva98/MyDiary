// app/_layout.tsx
import { Stack } from "expo-router";
import { ThemeProvider, useTheme } from "../styles/ThemeContext";
import Header from "../components/Header";
import BottomBar from "../components/BottomBar";
import { View } from "react-native";

function LayoutWithHeaderAndBottom() {
  const { toggleTheme } = useTheme();

  return (
    <View style={{ flex: 1 }}>
      {/* Header fixo */}
      <Header toggleTheme={toggleTheme} />

      {/* Conteúdo das telas */}
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
