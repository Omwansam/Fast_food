import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";



import { useEffect } from "react";
import './global.css';

export default function RootLayout() {
  const [FontsLoaded, error] = useFonts({
    "Quicksand-Bold": require("../assets/fonts/Quicksand-Bold.ttf"),
    "Quicksand-Medium": require("../assets/fonts/Quicksand-Medium.ttf"),
    "Quicksand-Regular": require("../assets/fonts/Quicksand-Regular.ttf"),
    "Quicksand-SemiBold": require("../assets/fonts/Quicksand-SemiBold.ttf"),
    "Quicksand-light": require("../assets/fonts/Quicksand-Light.ttf"),

  });

  useEffect(() => {
    if (error) throw error;
    if(FontsLoaded) SplashScreen.hideAsync();

    

  }, [FontsLoaded, error]);

  return <Stack screenOptions={{ headerShown: false}} />;
}
