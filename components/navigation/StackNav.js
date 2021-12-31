import Home from "../../pages/Home";
import {MaterialCommunityIcons, MaterialIcons} from "@expo/vector-icons";
import Challenge from "../../pages/Challenge";
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import ConfigChallenge from "../../pages/ConfigChallenge";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {StyleSheet} from "react-native";
import Title from "../../styles/global/Title";
import BottomNav from "./BottomNav";

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const StackNav = () => {
    return (
        <Stack.Navigator  screenOptions={{ headerShown: false }}>
            <Stack.Screen name="BottomNav" component={BottomNav} />
            <Stack.Screen name="challenge" component={Challenge} />
        </Stack.Navigator>
    );
}
export default StackNav