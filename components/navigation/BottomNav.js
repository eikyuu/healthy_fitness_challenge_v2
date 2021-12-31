import Home from "../../pages/Home";
import {MaterialCommunityIcons, MaterialIcons} from "@expo/vector-icons";
import Challenge from "../../pages/Challenge";
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import ConfigChallenge from "../../pages/ConfigChallenge";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet} from "react-native";
import Title from "../../styles/global/Title";
import MyChallenge from "../../pages/MyChallenge";

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const BottomNav = () => {
    function DetailsScreen() {
        return (
            <Title>Details Screen</Title>

        );
    }

    return (
        <>
            <Tab.Navigator
                initialRouteName="Acceuil"
                activeColor="#FFFFFF"
                inactiveColor="#86ccac"
                barStyle={{backgroundColor: '#52B788'}}
                screenOptions={{headerShown: false}}
            >
                <Tab.Screen name="Accueil"
                            options={{
                                tabBarIcon: ({color}) => (
                                    <MaterialCommunityIcons name="home" color={color} size={26}/>
                                ),
                            }}
                >
                    {() => (
                        <Stack.Navigator screenOptions={{headerShown: false}}>
                            <Stack.Screen
                                name="accueil"
                                component={Home}
                            />
                            <Stack.Screen name="Challenge" component={Challenge}/>
                            <Stack.Screen name="ConfigChallenge" component={ConfigChallenge}/>
                        </Stack.Navigator>
                    )}
                </Tab.Screen>

                <Tab.Screen
                    name="Créé un challenge"
                    component={Challenge}
                    options={{
                        tabBarLabel: 'Crée un challenge',
                        tabBarIcon: ({color}) => (
                            <MaterialIcons name="fitness-center" color={color} size={26}/>
                        ),
                    }}
                />
                <Tab.Screen
                    name="Mes challenges"
                    component={MyChallenge}
                    options={{
                        tabBarLabel: 'Mes challenges',
                        tabBarIcon: ({color}) => (
                            <MaterialIcons name="fitness-center" color={color} size={26}/>
                        ),
                    }}
                />
            </Tab.Navigator>
        </>
    );
}
const styles = StyleSheet.create({
    none: {
        display: "none"
    },
});
export default BottomNav