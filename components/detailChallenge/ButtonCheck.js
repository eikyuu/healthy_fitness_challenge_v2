import React, {useEffect, useState} from "react";
import ViewTodo from "../../styles/page/myChallenge/ViewTodo";
import {Image, StyleSheet, View} from "react-native";
import Circle from "../../assets/images/circle.png";
import EmptyCircle from "../../assets/images/emptyCircle.png";
import Text from "../../styles/global/Text";
import _ from "lodash";
import {database} from "../../service/database";

const ButtonCheck = ({challenge, setForceUpdate}) => {
    //update db
    const checkExercise = (title) => {
        let exo = JSON.parse(challenge[0].exercise).filter(exo => exo.title === title);
        let anotherExo = JSON.parse(challenge[0].exercise).filter(exo => exo.title !== title);

        if (exo[0].done === 0) {
            database.updateExo(challenge[0].name, JSON.stringify([...anotherExo, {  done: 1, title : exo[0].title }])),
                setForceUpdate(Math.random());
        } else {
            database.updateExo(challenge[0].name, JSON.stringify([...anotherExo, {  done: 0, title : exo[0].title }])),
                setForceUpdate(Math.random());
        }
    }

    return (
        <>
            { challenge &&
                JSON.parse(challenge[0].exercise).map((item, index) => (
                    <ViewTodo
                        key={index.toString()}
                        value={index}
                        onPress={(e) => {
                           checkExercise(item.title)
                        }}
                        // activeOpacity={1}
                    >
                        <View style={styles.inline}>
                            <Image style={styles.imageChallenge} source={item.done ? Circle : EmptyCircle}/>
                            <Text inputColor={item.done ? "red" : "black"}>
                                {item.title}
                            </Text>
                        </View>
                    </ViewTodo>

                ))
            }
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
export default ButtonCheck