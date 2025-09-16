import { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import * as LocalAuthentication from "expo-local-authentication";
import * as SecureStore from "expo-secure-store";

export default function LoginScreen({ onUnlock }: { onUnlock: () => void }) {
  const [pin, setPin] = useState("");
  const [storedPin, setStoredPin] = useState<string | null>(null);

  useEffect(() => {
    SecureStore.getItemAsync("user_pin").then(setStoredPin);
  }, []);

  async function checkBiometrics() {
    const hasHardware = await LocalAuthentication.hasHardwareAsync();
    const supported = await LocalAuthentication.supportedAuthenticationTypesAsync();

    if (hasHardware && supported.length > 0) {
      const result = await LocalAuthentication.authenticateAsync({
        promptMessage: "Autentique-se para entrar",
        fallbackLabel: "Usar PIN",
      });

      if (result.success) {
        onUnlock();
      } else {
        Alert.alert("Erro", "Autenticação falhou");
      }
    } else {
      Alert.alert("Aviso", "Seu dispositivo não suporta biometria.");
    }
  }

  async function handlePinLogin() {
    if (storedPin && pin === storedPin) {
      onUnlock();
    } else {
      Alert.alert("Erro", "PIN incorreto");
    }
  }

  async function saveNewPin() {
    if (!pin) return;
    await SecureStore.setItemAsync("user_pin", pin);
    setStoredPin(pin);
    Alert.alert("Sucesso", "PIN cadastrado!");
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
      <Text style={{ fontSize: 18, marginBottom: 10, textAlign: "center" }}>Digite seu PIN</Text>
      <TextInput
        value={pin}
        onChangeText={setPin}
        placeholder="****"
        secureTextEntry
        keyboardType="numeric"
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          padding: 10,
          borderRadius: 6,
          marginBottom: 12,
        }}
      />

      {storedPin ? (
        <>
          <TouchableOpacity
            onPress={handlePinLogin}
            style={{ backgroundColor: "blue", padding: 12, borderRadius: 6, marginBottom: 10 }}
          >
            <Text style={{ color: "white", textAlign: "center" }}>Entrar com PIN</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={checkBiometrics}
            style={{ backgroundColor: "purple", padding: 12, borderRadius: 6 }}
          >
            <Text style={{ color: "white", textAlign: "center" }}>Entrar com Biometria</Text>
          </TouchableOpacity>
        </>
      ) : (
        <TouchableOpacity
          onPress={saveNewPin}
          style={{ backgroundColor: "green", padding: 12, borderRadius: 6 }}
        >
          <Text style={{ color: "white", textAlign: "center" }}>
            Cadastrar PIN
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
