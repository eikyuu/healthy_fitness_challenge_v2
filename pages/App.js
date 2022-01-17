import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import BottomNav from "../components/navigation/BottomNav";
import useDatabase from "../hooks/useDatabase";
import * as SplashScreen from 'expo-splash-screen';

export default function App() {
    const isDBLoadingComplete = useDatabase();

    if (isDBLoadingComplete) {
        return (
            <React.Fragment>
                <NavigationContainer>
                    <BottomNav/>
                </NavigationContainer>
            </React.Fragment>
        );
    } else {
        return null;
    }
}
