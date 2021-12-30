import Home from "../../pages/Home";
import {MaterialCommunityIcons, MaterialIcons} from "@expo/vector-icons";
import Challenge from "../../pages/Challenge";
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import ConfigChallenge from "../../pages/ConfigChallenge";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {StyleSheet} from "react-native";

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const BottomNav = () => {

    return (
        <>
        <Tab.Navigator
            initialRouteName="Home"
            activeColor="#FFFFFF"
            inactiveColor="#86ccac"
            barStyle={{ backgroundColor: '#52B788' }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    title: '',
                    tabBarLabel: 'Accueil',
                    tabBarVisible: false,
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Challenge"
                component={Challenge}
                options={{
                    tabBarLabel: 'Challenge',
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="sports-esports" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Mes challenges"
                component={Challenge}
                options={{
                    tabBarLabel: 'Mes challenges',
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="fitness-center" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
        </>
    );
}
const styles = StyleSheet.create({
    none: {
        display:"none"
    },
});
export default BottomNav