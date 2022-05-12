import React, { useEffect, useState } from 'react';
import {
  View,
  Image,
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
import { getAllExercises } from '../service/exerciseDB';

function Challenge({ navigation, toto }) {
  const [media, setMedia] = useState(undefined);
  const [mediaTest, setMediaTest] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleStyle = (index) => {
    const elementsIndex = mediaTest.findIndex(
      (element) => element.id === index.id,
    );
    return mediaTest[elementsIndex]
      ? styles.buttonChallengeCheck
      : styles.buttonChallenge;
  };

  useEffect(() => {
    async function fetchAllExercises() {
      let data;
      try {
        setLoading(true);
        data = await getAllExercises();
        setMedia(data);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    }
    fetchAllExercises();
  }, []);

  const x = (newArray, id, elementsIndex) => {
    if (_.find(newArray, { id: id })) {
      setMediaTest(newArray.filter((item) => item.id !== id));
    } else {
      newArray.push(media.data[elementsIndex]);
      setMediaTest(newArray);
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
            <View style={styles.containerChallenges}>
            {media !== undefined &&
              media.data.slice(0, 30).map((index) => (
                    <TouchableOpacity
                        key={index.id}
                        activeOpacity={1}
                        style={handleStyle(index)}
                        onPress={() => {
                          const elementsIndex = media.data.findIndex(
                              (element) => element.id === index.id,
                          );
                          const newArray = [...mediaTest];
                          x(newArray, index.id, elementsIndex);
                        }}
                    >
                      <Image
                          style={styles.imageChallenge}
                          source={{ uri: index.gifUrl }}
                      />
                    </TouchableOpacity>

              ))}
            </View>

            {mediaTest.length > 0 ? (
              <TouchableOpacity
                style={styles.buttonValidate}
                onPress={() =>
                  navigation.navigate('configChallenge', {
                    exercise: mediaTest,
                  })
                }
              >
                <Text>Suivant</Text>
              </TouchableOpacity>
            ) : null}
          </Container>
        </ScrollView>
      )}

      {loading ? <ActivityIndicator size="large" color="#40916C" /> : null}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  containerChallenges: {
    display:"flex",
    flexDirection:"row",
    flexWrap: "wrap",
    justifyContent: "center"
  },
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
  imageChallenge: {
    height: 80,
    width: 80,
    resizeMode: 'contain',
  },
  buttonValidate: {
    backgroundColor: 'white',
    height: 40,
    width: 350,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#74C69D',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 20,
    textAlign: 'center',
    marginBottom: 25,
  },
});

export default Challenge;
