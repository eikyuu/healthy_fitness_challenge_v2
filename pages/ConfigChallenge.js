import React from "react";
import Container from "../styles/global/Container";
import Text from "../styles/global/Text";
import ImageBackground from "../styles/global/ImageBackground";
import {View, StyleSheet} from 'react-native';

import {
    ScrollView,
    TextInput,
    TouchableOpacity,
} from 'react-native-gesture-handler';
import TitleChallenge from "../styles/challenge/TitleChallenge";
const ConfigChallenge = ({navigation, route}) => {
    const {challenges } = route.params;
    const [text, onChangeText] = React.useState("Useless Text");

    console.log(challenges)
    return (
        <ImageBackground
            source={require('../assets/images/backgroundImage.jpg')} resizeMode="cover"
        >
            <ScrollView>
                <Container>
                    <TitleChallenge>Configurer votre challenge</TitleChallenge>
                    <Text>Nom de votre challenge</Text>
                    <TextInput
                        style={styles.buttonConfig}
                        onChangeText={onChangeText}
                        value={text}
                    />

                    <Text>Durée votre challenge</Text>
                    <TextInput
                        style={styles.buttonConfig}
                        onChangeText={onChangeText}
                        value={text}
                    />

                    <Text>Durée votre challenge</Text>
                    <TextInput
                        style={styles.buttonConfig}
                        onChangeText={onChangeText}
                        value={text}
                    />

                    <Text>Durée votre challenge</Text>
                    <TextInput
                        style={styles.buttonConfig}
                        onChangeText={onChangeText}
                        value={text}
                    />
                </Container>
            </ScrollView>

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    buttonConfig: {
        backgroundColor: '#FFFFFF',
        height: 50,
        width: 350,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#74C69D',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10
    },
});
export default ConfigChallenge