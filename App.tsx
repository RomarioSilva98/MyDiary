import { ThemeProvider } from "./src/styles/ThemeContext";
import { Stack } from "expo-router";

export default function App() {
  return (
    <ThemeProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </ThemeProvider>
  );
}
