import React, { useState } from 'react';
import { Image, View, StyleSheet } from 'react-native';
import ViewTodo from '../../styles/page/myChallenge/ViewTodo';
import Circle from '../../assets/images/circle.png';
import EmptyCircle from '../../assets/images/emptyCircle.png';
import Text from '../../styles/global/Text';
import { database } from '../../_service/database';
import { mediaImage } from '../../assets/images';
import _ from 'lodash';
import useErrorHandler from "../../_hooks/useHandleError";

function ButtonCheck({ challenge, setForceUpdate }) {
  const {errorHandler} = useErrorHandler();
  // update db
  const handlerDoneExercise = (title) => {
    const exo = JSON.parse(challenge[0].exercise).filter(
      (exo) => exo.title === title,
    );
    const anotherExo = JSON.parse(challenge[0].exercise).filter(
      (exo) => exo.title !== title,
    );
    try {
      if (exo[0].done !== 0)
        database.updateExo(
          challenge[0].id,
          JSON.stringify([
            ...anotherExo,
            { done: 0, title: exo[0].title, img: exo[0].img },
          ]),
        );
      else
        database.updateExo(
          challenge[0].id,
          JSON.stringify([
            ...anotherExo,
            { done: 1, title: exo[0].title, img: exo[0].img },
          ]),
        );
    } catch (e) {
      errorHandler(e);
    } finally {
      setForceUpdate(Math.random());
    }
  };

  return (
    <React.Fragment>
      {challenge &&
        JSON.parse(challenge[0].exercise).map((item, index) => (
          <ViewTodo
            key={index.toString()}
            value={index}
            onPress={(e) => {
              challenge[0].remaining < challenge[0].duration &&
                handlerDoneExercise(item.title);
            }}
            inputColor={item.done ? '#74C69D' : 'black'}
          >
            <View style={styles.inline}>
              <Image
                style={styles.imageCircle}
                source={item.done ? Circle : EmptyCircle}
              />
              <Image style={styles.imageChallenge} source={{ uri: item.img }} />
            </View>
          </ViewTodo>
        ))}
    </React.Fragment>
  );
}
const styles = StyleSheet.create({
  inline: {
    padding: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imageCircle: {
    height: 50,
    width: 50,
  },
  imageChallenge: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
});
export default ButtonCheck;
