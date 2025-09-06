import { useState } from "react";
import { View, Text, TouchableOpacity, Modal } from "react-native";
import { Link, useRouter } from "expo-router";

type Props = {
  toggleTheme: () => void;
};

export default function Header({ toggleTheme }: Props) {
  const [menuVisible, setMenuVisible] = useState(false);
  const router = useRouter();

  function handleLogout() {
    // Aqui você pode limpar dados/sessão depois
    router.replace("/"); // redireciona para Home
    setMenuVisible(false);
  }

  return (
    <View
      style={{
        height: 60,
        backgroundColor: "#3b82f6",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 16,
      }}
    >
      {/* Título */}
      <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
        MY Diary
      </Text>

      {/* Botão Hamburger */}
      <TouchableOpacity onPress={() => setMenuVisible(true)}>
        <Text style={{ fontSize: 28, color: "white" }}>☰</Text>
      </TouchableOpacity>

      {/* Menu Modal */}
      <Modal
        transparent={true}
        visible={menuVisible}
        animationType="fade"
        onRequestClose={() => setMenuVisible(false)}
      >
        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: "rgba(0,0,0,0.3)",
          }}
          activeOpacity={1}
          onPressOut={() => setMenuVisible(false)}
        >
          <View
            style={{
              position: "absolute",
              top: 60,
              right: 10,
              backgroundColor: "white",
              borderRadius: 8,
              elevation: 5,
              width: 180,
            }}
          >
            <Link
              href="/new"
              asChild
              onPress={() => setMenuVisible(false)}
            >
              <TouchableOpacity style={{ padding: 12 }}>
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
              <Text style={{ fontSize: 16 }}>🌙 Mudar Tema</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ padding: 12 }} onPress={handleLogout}>
              <Text style={{ fontSize: 16 }}>🚪 Sair</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}
