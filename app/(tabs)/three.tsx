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
      <Text>Bienvenue sur mon troisième onglet ! (autre branche)</Text>

      <Button title="Ouvrir la modale" onPress={() => router.push("/modal")} />
    </View>
  );
}
