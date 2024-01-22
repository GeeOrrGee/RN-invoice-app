import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { useColorScheme } from "react-native";
import { colors, components, palette } from "./theme";
import { ThemeProvider, createTheme, useTheme } from "@rneui/themed";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
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
  const colorScheme = useColorScheme();
  const headerConfig = {
    screenOptions: {},
  };
  return (
    <ThemeProvider theme={theme}>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: palette.darkBlue,
          },
          headerTintColor: palette.primaryLight,
          headerTitle: "Universal header in the app",
        }}
      >
        <Stack.Screen name="(homepage)" />
        <Stack.Screen name="modal" options={{ presentation: "modal" }} />
      </Stack>
    </ThemeProvider>
  );
}
