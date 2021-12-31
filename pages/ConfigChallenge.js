import React from "react";
import Container from "../styles/global/Container";
import Title from "../styles/global/Title";
import ImageBackground from "../styles/global/ImageBackground";

const ConfigChallenge = ({navigation, route}) => {
    const {challenges } = route.params;
    console.log(challenges)
    return (
        <ImageBackground
            source={require('../assets/images/backgroundImage.jpg')} resizeMode="cover"
        >
            <Container>
                    <Title>test</Title>
            </Container>
        </ImageBackground>
    );
}

export default ConfigChallenge