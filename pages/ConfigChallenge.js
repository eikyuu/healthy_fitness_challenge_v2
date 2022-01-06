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
import ButtonValidate from "../styles/page/configChallenge/ButtonValidate";
import ButtonConfig from "../styles/page/configChallenge/ButtonConfig";
const ConfigChallenge = ({navigation, route}) => {
    const {challenges} = route.params;
    const [value, setValue] = useState({
        idChallenge: 0,
        name: '',
        days: '',
        rep: '',
        reps: '',
        miniDays: 0,
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
                        onChangeText={(text) => setValue({...value, days: text})}
                        value={value.days}
                        keyboardType={'numeric'}
                    />
                    <Text>Premiere repetition</Text>
                    <ButtonConfig
                        onChangeText={(text) => setValue({...value, rep: text})}
                        value={value.rep}
                        keyboardType={'numeric'}
                    />
                    <Text>Repetition en + par jours</Text>
                    <ButtonConfig
                        onChangeText={(text) => setValue({...value, reps: text})}
                        value={value.reps}
                        keyboardType={'numeric'}
                    />
                    <TouchableOpacity
                       onPress={() => {
                           navigation.navigate('MyChallenge',{
                               configChallenge : value
                           });
                        }}
                    >
                        <View>
                            <ButtonValidate>Suivant</ButtonValidate>
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

export default ConfigChallenge