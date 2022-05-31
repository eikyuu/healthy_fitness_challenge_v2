import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Container from '../styles/global/Container';
import Text from '../styles/global/Text';
import ImageBackground from '../styles/global/ImageBackground';
import TitleChallenge from '../styles/page/challenge/TitleChallenge';
import ButtonRecap from '../styles/page/configChallenge/ButtonRecap';
import ButtonValidate from '../styles/page/configChallenge/ButtonValidate';
import ButtonConfig from '../styles/page/configChallenge/ButtonConfig';
import { database } from '../_service/database';
import ViewOneColumn from '../styles/global/ViewOneColumn';
import ViewTwoColumns from '../styles/global/ViewTwoColumns';
import Column from '../styles/global/Column';

function ConfigChallenge({ navigation, route }) {
  const { exercise } = route.params;
  const [finalExercise, setFinalExercise] = useState([]);
  const [value, setValue] = useState({
    name: '',
    duration: '',
    firstRepetition: '',
    repetition: '',
  });

  useEffect(() => {
    for (let i = 0; i < exercise.length; i++) {
      if (exercise) {
        const source = {
          title: exercise[i].name,
          done: 0,
          img: exercise[i].gifUrl,
        };
        setFinalExercise((prevState) => [...prevState, source]);
      }
    }
  }, []);

  const submit = () => {
    for (const property in value) {
      if (value[property].length <= 0) {
        alert('Veuillez remplir chaque champs');
        return;
      }
    }
    navigation.navigate('myChallenge');
    database.insertChallenge(
      value.name,
      value.duration,
      value.firstRepetition,
      value.repetition,
      0,
      JSON.stringify(finalExercise),
      new Date().toLocaleString(),
    );
  };

  return (
    <ImageBackground
      source={require('../assets/images/backgroundImage.jpg')}
      resizeMode="cover"
    >
      <Container>
        <TitleChallenge>Configurer votre challenge</TitleChallenge>

        <ViewOneColumn>
          <Text>Nom de votre challenge</Text>
          <ButtonConfig
            onChangeText={(text) => setValue({ ...value, name: text })}
            value={value.name}
          />
        </ViewOneColumn>

        <ViewTwoColumns>
          <Column>
            <Text>Durée du challenge</Text>
            <ButtonConfig
              onChangeText={(text) => setValue({ ...value, duration: text })}
              value={value.duration}
              keyboardType="numeric"
            />
          </Column>
          <Column>
            <Text>Première répétition</Text>
            <ButtonConfig
              onChangeText={(text) =>
                setValue({ ...value, firstRepetition: text })
              }
              value={value.firstRepetition}
              keyboardType="numeric"
            />
          </Column>
        </ViewTwoColumns>

        <ViewOneColumn>
          <Text>Répétition en + par jour</Text>
          <ButtonConfig
            onChangeText={(text) => setValue({ ...value, repetition: text })}
            value={value.repetition}
            keyboardType="numeric"
          />
        </ViewOneColumn>

        <TouchableOpacity
          onPress={() => {
            submit();
          }}
        >
          <ButtonValidate>
            <Text>Suivant</Text>
          </ButtonValidate>
        </TouchableOpacity>

        <ButtonRecap>
          <View>
            <Text>Challenge {value.name}</Text>
            <Text>Durée {value.duration} JOURS</Text>
            <Text>Aujourd&apos;hui {value.firstRepetition} répétitions</Text>
            <Text>+{value.repetition} répétitions par jours</Text>
          </View>
        </ButtonRecap>
      </Container>
    </ImageBackground>
  );
}

export default ConfigChallenge;
