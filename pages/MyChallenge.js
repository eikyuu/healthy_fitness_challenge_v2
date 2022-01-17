import React, {useEffect, useState} from "react";
import Container from "../styles/global/Container";
import Text from "../styles/global/Text";
import ImageBackground from "../styles/global/ImageBackground";
import {ScrollView} from "react-native-gesture-handler";
import TitleChallenge from "../styles/page/challenge/TitleChallenge";
import ViewTodo from "../styles/page/myChallenge/ViewTodo";
import {database} from "../service/database";


const MyChallenge = ({ navigation}) => {
    const [challenges, setChallenges] = useState();

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            database.fetchChallenge(setChallenges)

        });
        // Return the function to unsubscribe from the event so it gets removed on unmount
        return unsubscribe;
    }, [navigation])
    // console.log(challenges[2].id)
    return (
        <ImageBackground
            source={require('../assets/images/backgroundImage.jpg')} resizeMode="cover"
        >
            <ScrollView>
                <Container >
                    <TitleChallenge>Mes challenges</TitleChallenge>
                    { challenges &&
                        Object.values(challenges).map((item, index) => (
                            <React.Fragment key={index.toString()} >
                                    <ViewTodo
                                        onPress={() => {
                                            navigation.navigate('detailChallenge', {
                                                id: item.id
                                            });
                                        }}
                                        activeOpacity={1}>
                                        <Text inputColor="black">
                                            {item.name}
                                        </Text>
                                        <Text inputColor="gray">
                                            Jours {item.remaining}/{item.duration}
                                        </Text>
                                    </ViewTodo>
                            </React.Fragment>
                        ))
                    }
                </Container>
            </ScrollView>
        </ImageBackground>
    );
}

export default MyChallenge