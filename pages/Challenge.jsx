import React, { useEffect, useState } from 'react';
import {
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import _ from 'lodash';
import ImageBackground from '../styles/global/ImageBackground';
import Container from '../styles/global/Container';
import Text from '../styles/global/Text';
import TitleChallenge from '../styles/page/challenge/TitleChallenge';
import { getAllExercises } from '../_service/exerciseDB';
import useErrorHandler from '../_hooks/useHandleError';
import ContainerChallenges from '../styles/page/challenge/ContainerChallenges';
import ButtonValidate from '../styles/page/challenge/ButtonValidate';
import ImageChallenge from '../styles/page/challenge/ImageChallenge';

function Challenge({ navigation }) {
  const [media, setMedia] = useState(undefined);
  const [finalMedia, setFinalMedia] = useState([]);
  const [loading, setLoading] = useState(false);
  const { errorHandler } = useErrorHandler();

  const findElementIndex = (index, array) => {
    const elementIndex = array.findIndex((element) => element.id === index.id);
    return elementIndex;
  };

  const handleStyle = (elementIndex) => {
    return finalMedia[elementIndex]
      ? styles.buttonChallengeCheck
      : styles.buttonChallenge;
  };

  useEffect(() => {
    const fetchAllExercises = async () => {
      let data;
      try {
        setLoading(true);
        data = await getAllExercises();
        setMedia(data);
      } catch (e) {
        errorHandler(e);
      } finally {
        setLoading(false);
      }
    };
    fetchAllExercises();
  }, []);

  const newFinalMedia = (newArray, id, elementsIndex) => {
    if (_.find(newArray, { id: id })) {
      setFinalMedia(newArray.filter((item) => item.id !== id));
    } else {
      newArray.push(media.data[elementsIndex]);
      setFinalMedia(newArray);
    }
  };

  return (
    <ImageBackground
      source={require('../assets/images/backgroundImage.jpg')}
      resizeMode="cover"
    >
      {media && (
        <ScrollView>
          <Container>
            <TitleChallenge>Sélectionner au moins un exercice</TitleChallenge>
            <ContainerChallenges>
              {media !== undefined &&
                media.data.slice(0, 30).map((index) => (
                  <TouchableOpacity
                    key={index.id}
                    activeOpacity={1}
                    style={handleStyle(findElementIndex(index, finalMedia))}
                    onPress={() => {
                      const newArray = [...finalMedia];
                      newFinalMedia(
                        newArray,
                        index.id,
                        findElementIndex(index, media.data),
                      );
                    }}
                  >
                    <ImageChallenge source={{ uri: index.gifUrl }} />
                  </TouchableOpacity>
                ))}
            </ContainerChallenges>
            {finalMedia.length > 0 ? (
              <ButtonValidate
                onPress={() =>
                  navigation.navigate('configChallenge', {
                    exercise: finalMedia,
                  })
                }
              >
                <Text>Suivant</Text>
              </ButtonValidate>
            ) : null}
          </Container>
        </ScrollView>
      )}
      {loading ? <ActivityIndicator size="large" color="#40916C" /> : null}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  buttonChallenge: {
    backgroundColor: '#FFFFFF',
    height: 100,
    width: 100,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#74C69D',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    flexDirection: 'row',
  },
  buttonChallengeCheck: {
    backgroundColor: '#ffffff',
    height: 100,
    width: 100,
    borderRadius: 10,
    borderWidth: 5,
    borderColor: '#74C69D',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    flexDirection: 'row',
  },
});

export default Challenge;
