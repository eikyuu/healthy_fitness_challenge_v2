import React from "react";
import Container from "../../styles/global/Container";
import Button from "../../styles/Home/Button";
import Title from "../../styles/global/Title";
import ImageBackground from "../../styles/global/ImageBackground";

const Home = ({navigation}) => {
    return (
        <ImageBackground
            source={require('../../assets/images/backgroundImage.jpg')} resizeMode="cover"
        >
            <Container>
                <Button
                    onPress={() => navigation.navigate('Challenge')}
                >
                    <Title>Challenge</Title>
                </Button>
            </Container>
        </ImageBackground>
    );
}

export default Home