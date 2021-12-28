import React from "react";
import ImageBackground from "../../styles/global/ImageBackground";
import Container from "../../styles/global/Container";
import Title from "../../styles/global/Title";
import Button from "../../styles/Home/Button";
import {
    View,
    ScrollView,
    StyleSheet
} from 'react-native';
import TitleChallenge from "../../styles/challenge/TitleChallenge";

const Challenge = ({navigation}) => {
    return (
        <ImageBackground
            source={require('../../assets/images/backgroundImage.jpg')} resizeMode="cover"
        >
            <ScrollView>
                <Container>
                    <View style={styles.container}>
                        <TitleChallenge>
                            Sélectionner un ou plusieurs exercices
                        </TitleChallenge>
                        <Button
                            onPress={() => navigation.navigate('Mes challenges')}
                        >
                            <Title>Mes challenges</Title>
                        </Button>
                        <Button
                            onPress={() => navigation.navigate('Mes challenges')}
                        >
                            <Title>Mes challenges</Title>
                        </Button>
                        <Button
                            onPress={() => navigation.navigate('Mes challenges')}
                        >
                            <Title>Mes challenges</Title>
                        </Button>
                        <Button
                            onPress={() => navigation.navigate('Mes challenges')}
                        >
                            <Title>Mes challenges</Title>
                        </Button>
                        <Button
                            onPress={() => navigation.navigate('Mes challenges')}
                        >
                            <Title>Mes challenges</Title>
                        </Button>
                        <Button
                            onPress={() => navigation.navigate('Mes challenges')}
                        >
                            <Title>Mes challenges</Title>
                        </Button>
                        <Button
                            onPress={() => navigation.navigate('Mes challenges')}
                        >
                            <Title>Mes challenges</Title>
                        </Button>
                        <Button
                            onPress={() => navigation.navigate('Mes challenges')}
                        >
                            <Title>Mes challenges</Title>
                        </Button>
                    </View>
                </Container>
            </ScrollView>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingTop: 10,
        alignItems: "center",
    },
});
export default Challenge;