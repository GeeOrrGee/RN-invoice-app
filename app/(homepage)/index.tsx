import { Link, useNavigation, useRouter } from "expo-router";
import { Text, View } from "../../components/Themed";
import { Button } from "@rneui/themed";

export default function Homepage() {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Homepage</Text>
      <Link href={{ pathname: "/(homepage)/[id]", params: { id: "Bacon" } }}>
        Go to Invoice
      </Link>
      <View>
        <Button
          color="secondary"
          containerStyle={{ width: "auto", alignSelf: "flex-start" }}
        >
          HOLA
        </Button>
      </View>
    </View>
  );
}
