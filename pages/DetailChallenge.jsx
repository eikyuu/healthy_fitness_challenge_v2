import React, {useEffect, useState} from 'react';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {View} from 'react-native';
import ImageBackground from '../styles/global/ImageBackground';
import {database} from '../_service/database';
import Text from '../styles/global/Text';
import Container from '../styles/global/Container';
import TitleChallenge from '../styles/page/challenge/TitleChallenge';
import ButtonCheck from '../components/detailChallenge/ButtonCheck';
import ButtonValidate from '../styles/page/configChallenge/ButtonValidate';

function DetailChallenge({ navigation, route }) {
  const { id } = route.params;
  const [forceUpdate, setForceUpdate] = useState(0);
  const [challenge, setChallenge] = useState();
  const [nextDay, setNextDay] = useState(0);

  useEffect(() => {
    // Return the function to unsubscribe from the event so it gets removed on unmount
    return navigation.addListener('focus', () => {
      database.fetchChallengeById(setChallenge, id);
    });
  }, [navigation, forceUpdate, id]);

  useEffect(() => {
    database.fetchChallengeById(setChallenge, id);
  }, [forceUpdate]);

  useEffect(() => {
    if (!(challenge && challenge[0])) return;
    let array = [];
    for (let i = 0; i < JSON.parse(challenge[0].exercise).length; i++) {
      array = [...array, JSON.parse(challenge[0].exercise)[i].done];
    }
    setNextDay(array.findIndex((element) => element === 0));
  }, [challenge, forceUpdate]);

  const nbrRepetition = () => {
    if (challenge && challenge[0])
      if (challenge[0].remaining !== 0) {
        return (
          <Text>{challenge[0].total_repetition} répétitions par exercice</Text>
        );
      } else {
        return (
          <Text>{challenge[0].first_repetition} répétitions par exercice</Text>
        );
      }
  };

  const challengeDone = () => {
    if (challenge && challenge[0].remaining === challenge[0].repetition) {
      return (
        <View>
          <ButtonValidate>
            <Text>Félicitations pour avoir terminé votre défi</Text>
          </ButtonValidate>
        </View>
      );
    }
  };

  const pushNextDay = () => {
    let newArray = [];
    for (let i = 0; i < JSON.parse(challenge[0].exercise).length; i++) {
      newArray = [
        ...newArray,
        {
          done: 0,
          title: JSON.parse(challenge[0].exercise)[i].title,
          img: JSON.parse(challenge[0].exercise)[i].img,
        },
      ];
      database.updateNextDay(
        challenge[0].id,
        JSON.stringify(newArray),
        challenge[0].remaining + 1,
        challenge[0].total_repetition + challenge[0].repetition,
      );
    }
    setForceUpdate(Math.random());
  };

  return (
    <ImageBackground
      source={require('../assets/images/backgroundImage.jpg')}
      resizeMode="cover"
    >
      <ScrollView>
        <Container>
          {challenge && (
            <>
              <TitleChallenge>{challenge[0].name}</TitleChallenge>
              <Text style={{ marginBottom: 10 }} inputColor="gray">
                Jours {challenge[0].remaining}/{challenge[0].duration}
              </Text>
            </>
          )}
          <ButtonCheck challenge={challenge} setForceUpdate={setForceUpdate} />
          {nbrRepetition()}
          {challengeDone()}
          {nextDay === -1 && challenge[0].remaining < challenge[0].duration && (
            <TouchableOpacity
              onPress={() => {
                pushNextDay();
              }}
            >
              <ButtonValidate>
                <Text>Finir le challenge pour aujourd'hui</Text>
              </ButtonValidate>
            </TouchableOpacity>
          )}
        </Container>
      </ScrollView>
    </ImageBackground>
  );
}

export default DetailChallenge;
