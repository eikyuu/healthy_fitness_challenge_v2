import React, {useEffect, useState} from 'react';
import { Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import _ from 'lodash';
import ImageBackground from '../styles/global/ImageBackground';
import Container from '../styles/global/Container';
import Text from '../styles/global/Text';
import TitleChallenge from '../styles/page/challenge/TitleChallenge';
import {getAllExercises} from "../service/exerciseDB";

function Challenge({ navigation }) {
  const [media, setMedia] = useState(undefined);
  const [mediaTest, setMediaTest] = useState([]);

  const handleStyle = (index) => {
    const elementsIndex = mediaTest.findIndex(
      (element) => element.id === index.id,
    );
    return mediaTest[elementsIndex]
      ? styles.buttonChallengeCheck
      : styles.buttonChallenge;
  };

  const fetchAllExercises = async () => {
    let data;
    try {
     data = await getAllExercises();
     setMedia(data);
    } catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    fetchAllExercises();
  }, [])

  const x = (newArray, id, elementsIndex) => {
    if (_.find(newArray, {'id': id})) {
      setMediaTest(newArray.filter(item => item.id !== id))
    } else {
      newArray.push(media.data[elementsIndex])
      setMediaTest(newArray);
    }
  }

  return (
    <ImageBackground
      source={require('../assets/images/backgroundImage.jpg')}
      resizeMode="cover"
    >
      <ScrollView>
        <Container>
          <TitleChallenge>
            Sélectionner au moins un exercice
          </TitleChallenge>

          {media !== undefined && media.data.slice(0,30).map((index) => (
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
              <Image style={styles.imageChallenge} source={{uri :index.gifUrl}} />
            </TouchableOpacity>
          ))}

          {mediaTest.length > 0 ? (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('configChallenge', {
                  exercise: mediaTest
                })
              }
            >
              <Text style={styles.buttonValidate}>Suivant</Text>
            </TouchableOpacity>
          ) : null}
        </Container>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  buttonChallenge: {
    backgroundColor: '#FFFFFF',
    height: 120,
    width: 350,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#74C69D',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 25,
    flexDirection: 'row',
  },
  buttonChallengeCheck: {
    backgroundColor: '#ffffff',
    height: 120,
    width: 350,
    borderRadius: 10,
    borderWidth: 5,
    borderColor: '#74C69D',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 25,
    flexDirection: 'row',
  },
  imageChallenge: {
    height: 100,
    width: 100,
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
