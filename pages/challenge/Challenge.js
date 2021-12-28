import React from "react";
import {Button, Text, View} from "react-native";

const Challenge = ({navigation}) => {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Challenge"
                onPress={() => navigation.navigate('Challenge')}
            />
        </View>
    );
}

export default Challenge;