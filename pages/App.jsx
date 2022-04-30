import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomNav from '../components/navigation/BottomNav';
import useDatabase from '../hooks/useDatabase';

export default function App() {
  const isDBLoadingComplete = useDatabase();
  if (isDBLoadingComplete) {
    return (
      <NavigationContainer>
        <BottomNav />
      </NavigationContainer>
    );
  }
  return null;
}
