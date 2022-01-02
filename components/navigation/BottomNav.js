import Home from "../../pages/Home";
import {MaterialCommunityIcons, MaterialIcons} from "@expo/vector-icons";
import Challenge from "../../pages/Challenge";
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import ConfigChallenge from "../../pages/ConfigChallenge";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet} from "react-native";
import Text from "../../styles/global/Text";
import MyChallenge from "../../pages/MyChallenge";

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const BottomNav = () => {
    return (
        <>
            <Tab.Navigator
                initialRouteName="Acceuil"
                activeColor="#FFFFFF"
                inactiveColor="#86ccac"
                barStyle={{backgroundColor: '#52B788'}}
                screenOptions={{headerShown: false}}
            >

                <Tab.Screen
                    name="Accueil"
                    component={Home}
                    options={{
                        tabBarLabel: 'Accueil',
                        tabBarIcon: ({color}) => (
                            <MaterialIcons name="fitness-center" color={color} size={26}/>
                        ),
                    }}
                />


                <Tab.Screen name="Challenge"
                            options={{
                                tabBarIcon: ({color}) => (
                                    <MaterialCommunityIcons name="home" color={color} size={26}/>
                                ),
                            }}
                >
                    {() => (
                        <Stack.Navigator screenOptions={{headerShown: false}}>
                            <Stack.Screen name="Challenge" component={Challenge}/>
                            <Stack.Screen name="ConfigChallenge" component={ConfigChallenge}/>
                        </Stack.Navigator>
                    )}
                </Tab.Screen>

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