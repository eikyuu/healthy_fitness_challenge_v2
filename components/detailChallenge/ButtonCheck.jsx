import React, {useState} from 'react';
import { Image, View, StyleSheet } from 'react-native';
import ViewTodo from '../../styles/page/myChallenge/ViewTodo';
import Circle from '../../assets/images/circle.png';
import EmptyCircle from '../../assets/images/emptyCircle.png';
import Text from '../../styles/global/Text';
import { database } from '../../service/database';
import {mediaImage} from "../../assets/images";
import _ from "lodash";

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
          challenge[0].id,
          JSON.stringify([...anotherExo, { done: 0, title: exo[0].title }]),
        );
      else
        database.updateExo(
          challenge[0].id,
          JSON.stringify([...anotherExo, { done: 1, title: exo[0].title }]),
        );
    } catch (e) {
      throw new Error(e);
    } finally {
      setForceUpdate(Math.random());
    }
  };
  const [media, setMedia] = useState(mediaImage);
  // aller chercher les media et trier par title
  console.log(mediaImage.data[0].img)

  const renderImageExercise = (title) => {
    const filter = _.filter(mediaImage.data,{ 'title': title});
    return filter[0]['img'];
  }

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
                  style={styles.imageCircle}
                  source={item.done ? Circle : EmptyCircle}
              />
              {/*<Text inputColor="black">{item.title}</Text>*/}
              <Image
                style={styles.imageChallenge}
                source={renderImageExercise(item.title)}
              />
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
  imageCircle: {
    height: 50,
    width: 50,
  },
  imageChallenge: {
    margin: 5,
    width: 150,
    height: 100,
    resizeMode: 'contain'
  }
});
export default ButtonCheck;
