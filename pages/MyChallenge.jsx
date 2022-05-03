import React, { useEffect, useState } from 'react';
import { ScrollView, RectButton } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import Container from '../styles/global/Container';
import Text from '../styles/global/Text';
import ImageBackground from '../styles/global/ImageBackground';
import TitleChallenge from '../styles/page/challenge/TitleChallenge';
import { database } from '../service/database';
import AppleStyleSwipeableRow from '../components/AppleStyleSwipeableRow';

function MyChallenge({ navigation }) {
  const [challenges, setChallenges] = useState();
  const [forceUpdate, setForceUpdate] = useState(0);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      database.fetchChallenge(setChallenges);
    });
    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);
  // console.log(challenges[2].id)

  useEffect(() => {
    database.fetchChallenge(setChallenges);
  }, [forceUpdate])

  function Row({ item }) {
    return (
      <RectButton
        style={styles.rectButton}
        onPress={() => Alert.alert(item.from)}
      >
        <Text style={styles.fromText}>{item.from}</Text>
        <Text numberOfLines={2} style={styles.messageText}>
          toto
        </Text>
        <Text style={styles.dateText}>{item.when} ❭</Text>
      </RectButton>
    );
  }
  console.log(forceUpdate)
  function SwipeableRow({ name, duration, remaining, id, navigation }) {
    return (
      <AppleStyleSwipeableRow
        style={styles.rectButton}
        name={name}
        duration={duration}
        remaining={remaining}
        navigation={navigation}
        id={id}
        setForceUpdate={setForceUpdate}
      />
    );
  }

  return (
    <ImageBackground
      source={require('../assets/images/backgroundImage.jpg')}
      resizeMode="cover"
    >
      <ScrollView>
        <Container>
          <TitleChallenge>Mes challenges</TitleChallenge>
        </Container>

        {challenges &&
          Object.values(challenges).map((item, index) => (
            <React.Fragment key={index.toString()}>
              <SwipeableRow
                style={styles.rectButton}
                id={item.id}
                name={item.name}
                duration={item.duration}
                remaining={item.remaining}
                navigation={navigation}
              />
            </React.Fragment>
          ))}
      </ScrollView>
    </ImageBackground>
  );
}

export default MyChallenge;

const styles = StyleSheet.create({
  rectButton: {
    flex: 1,
    height: 80,
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    flexDirection: 'column',
    backgroundColor: 'red',
  },
  separator: {},
  fromText: {},
  messageText: {},
  dateText: {},
});
