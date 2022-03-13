import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import ViewTodo from '../../styles/page/myChallenge/ViewTodo';
import Circle from '../../assets/images/circle.png';
import EmptyCircle from '../../assets/images/emptyCircle.png';
import Text from '../../styles/global/Text';
import { database } from '../../service/database';

function ButtonCheck({ challenge, setForceUpdate }) {
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
          challenge[0].name,
          JSON.stringify([...anotherExo, { done: 0, title: exo[0].title }]),
        );
      else
        database.updateExo(
          challenge[0].name,
          JSON.stringify([...anotherExo, { done: 1, title: exo[0].title }]),
        );
    } catch (e) {
      throw new Error(e);
    } finally {
      setForceUpdate(Math.random());
    }
  };

  return (
    <>
      {challenge &&
        JSON.parse(challenge[0].exercise).map((item, index) => (
          <ViewTodo
            key={index.toString()}
            value={index}
            onPress={(e) => {
              challenge[0].remaining < challenge[0].duration &&
              handlerDoneExercise(item.title);
            }}
            inputColor={item.done ? '#74C69D' : 'white'}
          >
            <View style={styles.inline}>
              <Image
                  style={styles.imageChallenge}
                source={item.done ? Circle : EmptyCircle}
              />
              <Text inputColor="black">{item.title}</Text>
            </View>
          </ViewTodo>
        ))}
    </>
  );
}
const styles = StyleSheet.create({
  inline : {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  imageChallenge: {
    height: 50,
    width: 50,
  },
});
export default ButtonCheck;
