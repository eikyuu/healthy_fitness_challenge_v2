import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import BottomNav from "../components/navigation/BottomNav";

export default function App() {
    return (
        <React.Fragment>
            <NavigationContainer>
                <BottomNav/>
            </NavigationContainer>
        </React.Fragment>
    );
}
