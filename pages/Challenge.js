import React, {useState} from "react";
import ImageBackground from "../styles/global/ImageBackground";
import Container from "../styles/global/Container";
import Title from "../styles/global/Title";
import Button from "../styles/Home/Button";
import {
    Image,
    ScrollView,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import TitleChallenge from "../styles/challenge/TitleChallenge";
import {mediaImage} from "../assets/images";

const Challenge = ({navigation}) => {
    const [media, setMedia] = useState(mediaImage);

    let length = media.data.findIndex(
        (element) => element.completed === true,
    );

    const handleStyle = (index) => {
        const elementsIndex = media.data.findIndex(
            (element) => element.id === index.id,
        );
        return !media.data[elementsIndex].completed
            ? styles.buttonChallenge
            : styles.buttonChallengeCheck;
    };

    return (
        <ImageBackground
            source={require('../assets/images/backgroundImage.jpg')} resizeMode="cover"
        >
            <ScrollView>
                <Container>
                    <TitleChallenge>
                        Sélectionner un ou plusieurs exercices
                    </TitleChallenge>

                    {media.data.map((index) => (
                        <TouchableOpacity
                            key={index.id}
                            activeOpacity={1}
                            style={handleStyle(index)}
                            onPress={() => {
                                const elementsIndex = media.data.findIndex(
                                    (element) => element.id === index.id,
                                );
                                let newArray = [...media.data];
                                newArray[elementsIndex] = {
                                    ...newArray[elementsIndex],
                                    completed: !newArray[elementsIndex].completed,
                                };
                                setMedia({data: newArray});
                            }}>
                            <Image style={styles.imageChallenge} source={index.img}/>
                        </TouchableOpacity>
                    ))}
                    {length >= 0 ? (
                        <TouchableOpacity
                            onPress={() => navigation.navigate('ConfigChallenge')}>
                            <Title style={styles.buttonValidate} >Suivant</Title>
                        </TouchableOpacity>
                    ) : null}
                </Container>
            </ScrollView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    buttonChallenge: {
        backgroundColor: '#FFFFFF',
        height: 120,
        width: 350,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#74C69D',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 25,
        flexDirection: 'row',
    },
    buttonChallengeCheck: {
        backgroundColor: '#D8F3DC',
        height: 120,
        width: 350,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#74C69D',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 25,
        flexDirection: 'row',
    },
    imageChallenge: {
        height: 100,
        width: 150,
        resizeMode: 'contain',
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
});

export default Challenge;