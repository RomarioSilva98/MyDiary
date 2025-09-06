import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  Pressable,
} from "react-native";
import { Link, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {
  toggleTheme: () => void;
};

export default function Header({ toggleTheme }: Props) {
  const [menuVisible, setMenuVisible] = useState(false);
  const router = useRouter();

  function handleLogout() {
    router.replace("/"); // redireciona para Home
    setMenuVisible(false);
  }

  return (
    <SafeAreaView style={{ backgroundColor: "#3b82f6" }}>
      <View
        style={{
          height: 30,
          backgroundColor: "#3b82f6",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 16,
        }}
      >
        {/* Título */}
        <Text style={{ color: "white", fontSize: 20, fontWeight: "bold", paddingTop: 5 }}>
          MY Diary
        </Text>

        {/* Botão Hamburger */}
        <TouchableOpacity onPress={() => setMenuVisible(true)}>
          <Text style={{ fontSize: 28, color: "white" }}>☰</Text>
        </TouchableOpacity>
      </View>

      {/* Menu Modal */}
      <Modal
        transparent
        visible={menuVisible}
        animationType="fade"
        onRequestClose={() => setMenuVisible(false)}
      >
        {/* Área clicável para fechar */}
        <Pressable
          style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.3)" }}
          onPress={() => setMenuVisible(false)}
        />

        {/* Caixa do menu */}
        <View
          style={{
            position: "absolute",
            top: 70,
            right: 10,
            backgroundColor: "white",
            borderRadius: 8,
            elevation: 5,
            width: 200,
          }}
        >
          <Link href="/new" asChild>
            <TouchableOpacity
              style={{ padding: 12 }}
              onPress={() => setMenuVisible(false)}
            >
              <Text style={{ fontSize: 16 }}>➕ Nova Nota</Text>
            </TouchableOpacity>
          </Link>

          <TouchableOpacity
            style={{ padding: 12 }}
            onPress={() => {
              toggleTheme();
              setMenuVisible(false);
            }}
          >
            <Text style={{ fontSize: 16 }}>☀️ Mudar Tema</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ padding: 12 }} onPress={handleLogout}>
            <Text style={{ fontSize: 16 }}>⬅️ Voltar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
