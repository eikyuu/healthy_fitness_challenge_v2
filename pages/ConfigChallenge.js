import React, {useEffect, useState} from "react";
import Container from "../styles/global/Container";
import Text from "../styles/global/Text";
import ImageBackground from "../styles/global/ImageBackground";
import {View, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    ScrollView,
    TextInput,
    TouchableOpacity,
} from 'react-native-gesture-handler';
import TitleChallenge from "../styles/page/challenge/TitleChallenge";
import ButtonRecap from "../styles/page/configChallenge/ButtonRecap";
import ButtonValidate from "../styles/page/configChallenge/ButtonValidate";
import ButtonConfig from "../styles/page/configChallenge/ButtonConfig";
import {database} from "../service/database";
import _ from "lodash";
const ConfigChallenge = ({navigation, route}) => {
    const {exercise} = route.params;
    const [finalExercise, setFinalExercise] = useState([]);
    console.log(finalExercise)
    useEffect(() => {
        for (let i = 0; i < exercise.length; i++) {
            if (exercise) {
                const source = { title : exercise[i].title , done: 0 };
                setFinalExercise(prevState => (
                       [...prevState, source]
                    ))
            }
        }
    },[]);

    const [value, setValue] = useState({
        name: '',
        duration: '',
        firstRepetition: '',
        repetition: '',
    });

    return (
        <ImageBackground
            source={require('../assets/images/backgroundImage.jpg')} resizeMode="cover"
        >
            <ScrollView>
                <Container>
                    <TitleChallenge>Configurer votre challenge</TitleChallenge>
                    <Text>Nom de votre challenge</Text>
                    <ButtonConfig
                        onChangeText={(text) => setValue({...value, name: text})}
                        value={value.name}
                    />
                    <Text>Durée du challenge</Text>
                    <ButtonConfig
                        onChangeText={(text) => setValue({...value, duration: text})}
                        value={value.duration}
                        keyboardType={'numeric'}
                    />
                    <Text>Premiere repetition</Text>
                    <ButtonConfig
                        onChangeText={(text) => setValue({...value, firstRepetition: text})}
                        value={value.firstRepetition}
                        keyboardType={'numeric'}
                    />
                    <Text>Repetition en + par jours</Text>
                    <ButtonConfig
                        onChangeText={(text) => setValue({...value, repetition: text})}
                        value={value.repetition}
                        keyboardType={'numeric'}
                    />
                    <TouchableOpacity
                       onPress={() => {
                           navigation.navigate('myChallenge');
                           database.insertChallenge(value.name, value.duration, value.firstRepetition, value.repetition,0, JSON.stringify(finalExercise), new Date().toLocaleString())
                        }}
                    >
                        <View>
                            <ButtonValidate>Suivant</ButtonValidate>
                        </View>
                    </TouchableOpacity>
                    <ButtonRecap>
                        <View>
                            <Text>Challenge {value.name}</Text>
                            <Text>Durée {value.duration} JOURS</Text>
                            <Text>
                                Aujourd'hui {value.firstRepetition} répetitions
                            </Text>
                            <Text>
                                +{value.repetition} répetitions par jours
                            </Text>
                        </View>
                    </ButtonRecap>

                </Container>
            </ScrollView>
        </ImageBackground>
    );
}

export default ConfigChallenge