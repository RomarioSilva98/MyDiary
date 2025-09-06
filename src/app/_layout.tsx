import { Stack } from "expo-router";
import { ThemeProvider, useTheme } from "../styles/ThemeContext";
import Header from "../components/Header";
import { View } from "react-native";

function LayoutWithHeader() {
  const { toggleTheme } = useTheme();

  return (
    <View style={{ flex: 1 }}>
      {/* Header fixo em todas as telas */}
      <Header toggleTheme={toggleTheme} />

      {/* Conteúdo das rotas */}
      <Stack screenOptions={{ headerShown: false }} />
    </View>
  );
}

export default function RootLayout() {
  return (
    <ThemeProvider>
      <LayoutWithHeader />
    </ThemeProvider>
  );
}
