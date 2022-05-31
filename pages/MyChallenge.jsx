import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import ImageBackground from '../styles/global/ImageBackground';
import TitleChallenge from '../styles/page/challenge/TitleChallenge';
import { database } from '../_service/database';
import AppleStyleSwipeableRow from '../components/AppleStyleSwipeableRow';

function MyChallenge({ navigation }) {
  const [challenges, setChallenges] = useState([]);
  const [forceUpdate, setForceUpdate] = useState(0);

  useEffect(() => {
    // Return the function to unsubscribe from the event so it gets removed on unmount
    return navigation.addListener('focus', () => {
      database.fetchChallenge(setChallenges);
    });
  }, [navigation]);

  useEffect(() => {
    database.fetchChallenge(setChallenges);
    return () => {
      setChallenges([]);
    };
  }, [forceUpdate]);

  function SwipeableRow({ name, duration, remaining, id, navigation }) {
    return (
      <AppleStyleSwipeableRow
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
      <TitleChallenge style={{ marginTop: '10%' }}>
        Mes challenges
      </TitleChallenge>

      <ScrollView>
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
});
