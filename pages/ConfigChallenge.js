import React, {useState} from "react";
import Container from "../styles/global/Container";
import Text from "../styles/global/Text";
import ImageBackground from "../styles/global/ImageBackground";
import {View, StyleSheet} from 'react-native';

import {
    ScrollView,
    TextInput,
    TouchableOpacity,
} from 'react-native-gesture-handler';
import TitleChallenge from "../styles/page/challenge/TitleChallenge";
import ButtonRecap from "../styles/page/configChallenge/ButtonRecap";
const ConfigChallenge = ({navigation, route}) => {
    const {challenges } = route.params;
    const [value, setValue] = useState({
        idChallenge: 0,
        name: '',
        days: '',
        rep: '',
        reps: '',
        miniDays: 0,
    });
    console.log(challenges)
    return (
        <ImageBackground
            source={require('../assets/images/backgroundImage.jpg')} resizeMode="cover"
        >
            <ScrollView>
                <Container>
                    <TitleChallenge>Configurer votre challenge</TitleChallenge>
                    <Text>Nom de votre challenge</Text>
                    <TextInput
                        style={styles.buttonConfig}
                        onChangeText={(text) => setValue({...value, name: text})}
                        value={value.name}
                    />
                    <Text>Durée du challenge</Text>
                    <TextInput
                        style={styles.buttonConfig}
                        onChangeText={(text) => setValue({...value, days: text})}
                        value={value.days}
                        keyboardType={'numeric'}
                    />
                    <Text>Premiere repetition</Text>
                    <TextInput
                        style={styles.buttonConfig}
                        onChangeText={(text) => setValue({...value, rep: text})}
                        value={value.rep}
                        keyboardType={'numeric'}
                    />
                    <Text>Repetition en + par jours</Text>
                    <TextInput
                        style={styles.buttonConfig}
                        onChangeText={(text) => setValue({...value, reps: text})}
                        value={value.reps}
                        keyboardType={'numeric'}
                    />
                    <TouchableOpacity
                       // onPress={() => {
                         //   navigation.navigate('MyChallengeScreen');
                        //}}
                    >
                        <View>
                            <Text style={styles.buttonValidate}>Suivant</Text>
                        </View>
                    </TouchableOpacity>
                    <ButtonRecap>

                        <View>
                            <Text>Challenge {value.name}</Text>
                            <Text>Durée {value.days} JOURS</Text>
                            <Text>
                                Aujourd'hui {value.rep} répetitions
                            </Text>
                            <Text>
                                +{value.reps} répetitions par jours
                            </Text>
                        </View>

                    </ButtonRecap>

                </Container>
            </ScrollView>

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    buttonRecap: {
        backgroundColor: '#D8F3DC',
        height: 150,
        width: 350,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#74C69D',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
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
    buttonConfig: {
        backgroundColor: '#FFFFFF',
        height: 50,
        width: 350,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#74C69D',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10
    },
});
export default ConfigChallenge