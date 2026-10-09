import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

export default function ThirdScreen() {
  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
      }}
    >
      <Text>Troisième onglet</Text>

      <Button title="Ouvrir la modale" onPress={() => router.push("/modal")} />
    </View>
  );
}
