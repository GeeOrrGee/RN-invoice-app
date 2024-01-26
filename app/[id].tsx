import { useLocalSearchParams } from "expo-router";
import { Text, View } from "../components/Themed";

export default function EditInvoice() {
  const params = useLocalSearchParams();
  return <Text>Edit Invoice page {params.id}</Text>;
}
