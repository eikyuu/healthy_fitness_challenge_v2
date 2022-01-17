import React, {useEffect, useState} from "react";
import ImageBackground from "../styles/global/ImageBackground";
import {database} from "../service/database";
import ViewTodo from "../styles/page/myChallenge/ViewTodo";
import Text from "../styles/global/Text";
import {ScrollView} from "react-native-gesture-handler";
import Container from "../styles/global/Container";
import TitleChallenge from "../styles/page/challenge/TitleChallenge";
import {mediaImage} from "../assets/images";
import {Image, TouchableOpacity} from "react-native";
import _ from "lodash";


const DetailChallenge = ({ navigation, route}) => {
    const {id} = route.params;
    const [challenge, setChallenge] = useState();
    const [media, setMedia] = useState(mediaImage);
    const [finalMedia, setFinalMedia] = useState([]);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            database.fetchChallengeById(setChallenge, id);
        });
        // Return the function to unsubscribe from the event so it gets removed on unmount
        return unsubscribe;
    }, [navigation])

    useEffect(() => {
        if (challenge)
            setFinalMedia(_.filter(media.data, ['title', JSON.parse(challenge[0].exercise)[0].title]));
    }, [challenge])
    return (
        <ImageBackground
            source={require('../assets/images/backgroundImage.jpg')} resizeMode="cover"
        >
            <ScrollView>
                <Container >
                    {challenge &&
                        <React.Fragment>
                            <TitleChallenge>{challenge[0].name}</TitleChallenge>
                            <Text inputColor="gray">
                                Jours {challenge[0].remaining}/{challenge[0].duration}
                            </Text>
                        </React.Fragment>
                    }
                    { challenge &&
                        JSON.parse(challenge[0].exercise).map((item, index) => (
                                <ViewTodo
                                    key={index.toString()}
                                    // onPress={() => {
                                    //     navigation.navigate('detailChallenge', {
                                    //         id: item.id
                                    //     });
                                    // }}
                                    // activeOpacity={1}
                                >
                                    <Text inputColor="black">
                                        {item.title}
                                    </Text>
                                </ViewTodo>

                        ))
                    }
                    {finalMedia.map((index) => (
                        <TouchableOpacity
                            key={index.id}
                            activeOpacity={1}
                        >
                            <Image source={index.img}/>
                        </TouchableOpacity>
                    ))}
                </Container>
            </ScrollView>
        </ImageBackground>
    );
}

export default DetailChallenge