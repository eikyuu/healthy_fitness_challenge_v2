import React from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import { RectButton, TouchableOpacity } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Text from '../styles/global/Text';
import { database } from '../service/database';

function AppleStyleSwipeableRow({ name, duration, remaining, navigation, id, setForceUpdate }) {
  const renderLeftActions = (_progress, dragX) => {
    const pressHandler = () => {
      database.deleteChallenge(id);
      setForceUpdate(Math.random());
    };

    return (
      <RectButton style={styles.leftAction} onPress={pressHandler}>
        <Animated.Text style={styles.delete}>Supprimer</Animated.Text>
      </RectButton>
    );
  };

  const renderRightAction = (text, color, x, progress) => {
    const trans = progress.interpolate({
      inputRange: [0, 1],
      outputRange: [x, 0],
    });

    return (
      <Animated.View style={{ flex: 1, transform: [{ translateX: trans }] }}>
        <RectButton style={[styles.rightAction, { backgroundColor: color}]}>
          <Text>Editer</Text>
        </RectButton>
      </Animated.View>
    );
  };

  const renderRightActions = (progress, _dragAnimatedValue) => (
    <View
      style={{
        width: 192,
        flexDirection: 'row',
      }}
    >
      {renderRightAction('More', 'red', 192, progress)}
    </View>
  );

  return (
    <Swipeable
      style={styles.rectButton}
      friction={2}
      enableTrackpadTwoFingerGesture
      leftThreshold={30}
      rightThreshold={40}
      renderLeftActions={renderLeftActions}
      // renderRightActions={renderRightActions}
      onSwipeableOpen={(direction) => {
        console.log(`Opening swipeable from the ${direction}`);
      }}
      onSwipeableClose={(direction) => {
        console.log(`Closing swipeable to the ${direction}`);
      }}
    >
      <TouchableOpacity
        style={styles.rectButton}
        activeOpacity={1}
        onPress={() => {
          navigation.navigate('detailChallenge', {
            id,
          });
        }}
      >
        <Text inputColor="black">{name}</Text>
        <Text inputColor="gray">
          Jours {remaining}/{duration} { duration === remaining ? "challenge terminé" : ""}
        </Text>
      </TouchableOpacity>
    </Swipeable>
  );
}

export default AppleStyleSwipeableRow;

const styles = StyleSheet.create({
  leftAction: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    height: 80,
  },
  delete: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center"
  },
  rectButton: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-between',
    flexDirection: 'column',
    backgroundColor: 'white',
    height: 80,
  },
  rightAction: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
