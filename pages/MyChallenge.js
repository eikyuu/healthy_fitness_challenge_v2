import React, {useState} from "react";
import Container from "../styles/global/Container";
import Button from "../styles/page/home/Button";
import Text from "../styles/global/Text";
import ImageBackground from "../styles/global/ImageBackground";
import { TouchableOpacity, View} from 'react-native';
import {ScrollView} from "react-native-gesture-handler";
import TitleChallenge from "../styles/page/challenge/TitleChallenge";
import ViewTodo from "../styles/page/myChallenge/ViewTodo";


const MyChallenge = ({ navigation }) => {
    return (
        <ImageBackground
            source={require('../assets/images/backgroundImage.jpg')} resizeMode="cover"
        >
            <ScrollView>
                <Container >
                    <TitleChallenge>Mes challenges</TitleChallenge>
                    <ViewTodo
                        activeOpacity={1}>
                        <Text inputColor="black">
                            name id
                        </Text>
                        <Text inputColor="gray">
                            Jours restant
                        </Text>
                    </ViewTodo>
                </Container>
            </ScrollView>

        </ImageBackground>
    );
}

export default MyChallenge