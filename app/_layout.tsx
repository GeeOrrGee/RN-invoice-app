import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { colors, components, palette } from "./theme";
import { ThemeProvider, createTheme } from "@rneui/themed";
import Logo from "../components/Logo";
import { View } from "../components/Themed";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  // initialRouteName: "modal",
};
//TODO organize colors as per theme mode
const theme = createTheme({
  lightColors: colors.light,
  darkColors: colors.dark,
  mode: "light",
  components,
});

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const screenConfig = {
    headerStyle: {
      backgroundColor: palette.darkBlue,
    },
    headerTintColor: palette.primaryLight,
    headerTitle: () => (
      <View>
        <Logo />
      </View>
    ),
  };
  return (
    <ThemeProvider theme={theme}>
      <Stack screenOptions={screenConfig} initialRouteName="homepage">
        <Stack.Screen name="homepage" />
        <Stack.Screen name="[id]" />
        <Stack.Screen name="modal" options={{ presentation: "modal" }} />
      </Stack>
    </ThemeProvider>
  );
}
