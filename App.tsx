import { useState } from "react";
import { ThemeProvider } from "./src/styles/ThemeContext";
import { Stack } from "expo-router";
import LoginScreen from "./src/app/login"; // ajuste o caminho

export default function App() {
  const [unlocked, setUnlocked] = useState(false);

  if (!unlocked) {
    // Enquanto não desbloquear, mostra só a tela de login
    return <LoginScreen onUnlock={() => setUnlocked(true)} />;
  }

  return (
    <ThemeProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </ThemeProvider>
  );
}
