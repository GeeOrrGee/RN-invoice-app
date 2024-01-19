import { Link, useNavigation, useRouter } from "expo-router";
import { Text, View } from "../../components/Themed";

export default function Homepage() {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Homepage</Text>
      <Link href={{ pathname: "/(homepage)/[id]", params: { id: "Bacon" } }}>
        Go to Invoice
      </Link>
    </View>
  );
}
