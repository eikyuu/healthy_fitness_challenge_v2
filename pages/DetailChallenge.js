import React, {useEffect, useState} from "react";
import ImageBackground from "../styles/global/ImageBackground";
import {database} from "../service/database";
import Text from "../styles/global/Text";
import {ScrollView} from "react-native-gesture-handler";
import Container from "../styles/global/Container";
import TitleChallenge from "../styles/page/challenge/TitleChallenge";
import {StyleSheet} from "react-native";
import ButtonCheck from "../components/detailChallenge/ButtonCheck";


const DetailChallenge = ({ navigation, route}) => {
    const [forceUpdate, setForceUpdate] = useState(0);
    console.log(forceUpdate)
    const {id} = route.params;
    const [challenge, setChallenge] = useState();

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            database.fetchChallengeById(setChallenge, id);
        });
        // Return the function to unsubscribe from the event so it gets removed on unmount
        return unsubscribe;
    }, [navigation, forceUpdate])

    useEffect(() => {
        database.fetchChallengeById(setChallenge, id);
    }, [forceUpdate])


    const nbrRepetition = () => {
        {/*      challenge[0].remaining === 0 ? challenge[0].first_repetition + " répétitions par exercice" : challenge[0].repetition*/}
        if (challenge && challenge[0])
            if (challenge[0].remaining === 0)
                return (
                    <Text>{challenge[0].first_repetition} répétitions par exercice</Text>
                )
            else return (
                <Text>{challenge[0].total_repetition}</Text>
                )
    }

    const calculTotalEstimation = () => {
        if (challenge && challenge[0])
            if (challenge[0].remaining === 0)
                console.log(challenge[0].first_repetition + challenge[0].repetition)
    }

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
                    <ButtonCheck challenge={challenge} setForceUpdate={setForceUpdate}/>
                    {nbrRepetition()}
                </Container>
            </ScrollView>
        </ImageBackground>
    );
}

export default DetailChallenge