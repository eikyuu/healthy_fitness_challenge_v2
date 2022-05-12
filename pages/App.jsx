import React, { useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import BottomNav from '../components/navigation/BottomNav';
import useDatabase from '../hooks/useDatabase';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync();
        // Pre-load fonts, make any API calls you need to do here
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        // await new Promise(resolve => setTimeout(resolve, 10000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
        await SplashScreen.hideAsync();
      }
    }

    prepare();
  }, []);

  const isDBLoadingComplete = useDatabase();
  if (isDBLoadingComplete && appIsReady) {
    return (
        <>
          <StatusBar style="dark" />
          <NavigationContainer>
            <BottomNav />
          </NavigationContainer>
        </>

    );
  }
  return null;
}
