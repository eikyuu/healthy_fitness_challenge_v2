import React from 'react';
import Container from '../styles/global/Container';
import Button from '../styles/page/home/Button';
import Text from '../styles/global/Text';
import ImageBackground from '../styles/global/ImageBackground';

function Home({ navigation }) {
  return (
    <ImageBackground
      source={require('../assets/images/backgroundImage.jpg')}
      resizeMode="cover"
    >
      <Container>
        <Button onPress={() => navigation.navigate('createChallenge')}>
          <Text>Créer un challenge</Text>
        </Button>
        <Button onPress={() => navigation.navigate('myChallenge')}>
          <Text>Mes challenges</Text>
        </Button>
      </Container>
    </ImageBackground>
  );
}

export default Home;
