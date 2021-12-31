import React from "react";
import Container from "../styles/global/Container";
import Button from "../styles/Home/Button";
import Text from "../styles/global/Text";
import ImageBackground from "../styles/global/ImageBackground";

const Home = ({navigation}) => {
    return (
        <ImageBackground
            source={require('../assets/images/backgroundImage.jpg')} resizeMode="cover"
        >
            <Container>
                <Button
                    onPress={() => navigation.navigate('Challenge')}
                >
                    <Text>Crée un challenge</Text>
                </Button>
                <Button
                    onPress={() => navigation.navigate('Mes challenges')}
                >
                    <Text>Mes challenges</Text>
                </Button>
            </Container>
        </ImageBackground>
    );
}

export default Home