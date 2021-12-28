import Home from "../../pages/home/Home";
import {MaterialCommunityIcons, MaterialIcons} from "@expo/vector-icons";
import Challenge from "../../pages/challenge/Challenge";
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";

const BottomNav = () => {
    const Tab = createMaterialBottomTabNavigator();

    return (
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
                    tabBarLabel: 'Accueil',
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
    );
}

export default BottomNav