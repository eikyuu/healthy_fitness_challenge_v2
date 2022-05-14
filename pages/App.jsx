import React, { useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import BottomNav from '../components/navigation/BottomNav';
import useDatabase from '../_hooks/useDatabase';
import { StatusBar } from 'expo-status-bar';
import useHandleError from "../_hooks/useHandleError";

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const {errorHandler} = useHandleError();
  useEffect(() => {
    async function prepare() {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync();
      } catch (e) {
        errorHandler();
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
      <React.Fragment>
        <StatusBar style="dark" />
        <NavigationContainer>
          <BottomNav />
        </NavigationContainer>
      </React.Fragment>
    );
  }
  return null;
}
