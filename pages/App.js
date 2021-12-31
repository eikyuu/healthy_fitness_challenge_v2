import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import BottomNav from "../components/navigation/BottomNav";
import StackNav from "../components/navigation/StackNav";

export default function App() {
    return (
        <React.Fragment>
            <NavigationContainer>
                <BottomNav/>
            </NavigationContainer>
        </React.Fragment>
    );
}
