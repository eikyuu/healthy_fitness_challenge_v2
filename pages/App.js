import {StatusBar} from 'react-native';
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import Container from "../styles/Container";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';


function HomeScreen({navigation}) {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}
            />
        </View>
    );
}

function DetailsScreen({navigation}) {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Details Screen</Text>
            <Button
                title="Go to Details... again"
                onPress={() => navigation.push('Details')}
            />
            <Button title="Go to Home" onPress={() => navigation.navigate('Home')}/>
            <Button title="Go back" onPress={() => navigation.goBack()}/>
        </View>
    );
}

function Feed({navigation}) {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Feed Screen</Text>
            <Button title="Open drawer" onPress={() => navigation.openDrawer()}/>
            <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()}/>
        </View>
    );
}

function Notifications() {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Notifications Screen</Text>
        </View>
    );
}

function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            {/*<DrawerItem*/}
            {/*    label="Close drawer"*/}
            {/*    onPress={() => props.navigation.closeDrawer()}*/}
            {/*/>*/}
            {/*<DrawerItem*/}
            {/*    label="Toggle drawer"*/}
            {/*    onPress={() => props.navigation.toggleDrawer()}*/}
            {/*/>*/}
        </DrawerContentScrollView>
    );
}

function MyDrawer() {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
            <Drawer.Screen
                name="Home"
                component={HomeScreen}
            />
            <Drawer.Screen
                name="Details"
                component={DetailsScreen}
            />
        </Drawer.Navigator>
    );
}

const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <React.Fragment>
            <NavigationContainer>
                <MyDrawer/>
            </NavigationContainer>
        </React.Fragment>
    );
}
