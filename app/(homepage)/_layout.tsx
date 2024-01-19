import { Stack } from "expo-router";
import { View } from "../../components/Themed";

export default function HomeLayout() {
  return (
    <View style={{ flex: 1, marginTop: 20 }}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index"></Stack.Screen>
        <Stack.Screen name="[id]"></Stack.Screen>
      </Stack>
    </View>
  );
}
