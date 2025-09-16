import { View, TouchableOpacity, Text } from "react-native";
import { useRouter, usePathname } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function BottomBar() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <SafeAreaView
      edges={["bottom"]}
      style={{
        backgroundColor: "#3b82f6", // mesma cor do header
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          paddingVertical: 12,
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

        {/* Alternar Calendário/Listagem */}
        {pathname === "/" && (
          <TouchableOpacity onPress={() => router.push("/?view=calendar")}>
            <Text style={{ fontSize: 24, color: "white" }}>📅</Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
}
