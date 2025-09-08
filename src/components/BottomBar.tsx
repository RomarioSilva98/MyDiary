import { View, TouchableOpacity, Text } from "react-native";
import { useRouter, usePathname } from "expo-router";

export default function BottomBar() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#3b82f6", // mesma cor do header
        paddingVertical: 12,
        paddingBottom: 10,
      }}
    >
      {/* Ir para Home */}
      <TouchableOpacity onPress={() => router.push("/")}>
        <Text
          style={{
            fontSize: 24,
            color: pathname === "/" ? "yellow" : "white",
          }}
        >
          🗒️
        </Text>
      </TouchableOpacity>

      {/* Criar Nova Nota */}
      <TouchableOpacity onPress={() => router.push("/new")}>
        <Text
          style={{
            fontSize: 28,
            color: pathname === "/new" ? "yellow" : "white",
          }}
        >
          🆕
        </Text>
      </TouchableOpacity>

      {/* Alternar Calendário/Listagem (só aparece se estiver na Home) */}
      {pathname === "/" && (
        <TouchableOpacity onPress={() => router.push("/?view=calendar")}>
          <Text style={{ fontSize: 24, color: "white" }}>📅</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}