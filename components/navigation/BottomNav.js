import Home from "../../pages/Home";
import {MaterialCommunityIcons, MaterialIcons} from "@expo/vector-icons";
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import ConfigChallenge from "../../pages/ConfigChallenge";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MyChallenge from "../../pages/MyChallenge";
import Challenge from "../../pages/Challenge";
import DetailChallenge from "../../pages/DetailChallenge";

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const BottomNav = () => {
    return (
        <>
            <Tab.Navigator
                initialRouteName="Accueil"
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
                            <Stack.Screen name="home" component={Home}/>
                            <Stack.Screen name="createChallenge" component={Challenge}/>
                            <Stack.Screen name="configChallenge" component={ConfigChallenge}/>
                            <Stack.Screen name="detailChallenge" component={DetailChallenge}/>
                        </Stack.Navigator>
                    )}
                </Tab.Screen>

                <Tab.Screen
                    name="myChallenge"
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

export default BottomNav