import React, {useState} from "react";
import ImageBackground from "../../styles/global/ImageBackground";
import Container from "../../styles/global/Container";
import Title from "../../styles/global/Title";
import Button from "../../styles/Home/Button";
import {
    Image,
    ScrollView,
    Text,
    TouchableOpacity
} from 'react-native';
import TitleChallenge from "../../styles/challenge/TitleChallenge";
import {mediaImage} from "../../assets/images";

const Challenge = ({navigation}) => {
    const [media, setMedia] = useState(mediaImage);
console.log(media)
    return (
        <ImageBackground
            source={require('../../assets/images/backgroundImage.jpg')} resizeMode="cover"
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
                            //style={handleStyle(index)}
                            onPress={() => {
                                const elementsIndex = media.data.findIndex(
                                    (element) => element.id == index.id,
                                );
                                let newArray = [...media.data];
                                newArray[elementsIndex] = {
                                    ...newArray[elementsIndex],
                                    completed: !newArray[elementsIndex].completed,
                                };
                                setMedia({data: newArray});
                            }}>
                            <Image source={index.img} />
                            <Text>{index.title}</Text>
                        </TouchableOpacity>
                    ))}
                </Container>
            </ScrollView>
        </ImageBackground>
    );
}

export default Challenge;