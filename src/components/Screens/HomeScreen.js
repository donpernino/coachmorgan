import React from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';
import {
    Card
} from 'react-native-paper';
import Header from '../Header';
import Text from '../TextCustom';
import { bgColor, blueColor, bgGrayColor } from '../../../stylesVars';

import Running from '../../../assets/images/running.jpg';
import Fight from '../../../assets/images/fight.jpg';
import Abdo from '../../../assets/images/abdo.jpg';
import Lift from '../../../assets/images/lift.jpg';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: bgColor,
      paddingTop: 120,
    },
    cardContainer: {
        display: "flex",
        flexDirection: "row",
        flexWrap: 'wrap',
        flex: 1,
        justifyContent: "space-between"
    },
    cardWrapper: {
        display: "flex",
        width: "47%",
        marginBottom: 25,
    },
    card: {
        height: 245,
        backgroundColor: bgGrayColor,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.2,
        shadowRadius: 6.27,
        elevation: 10,
    },
    cardCover: {
        height: 175,
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    cardText: {
        fontSize: 15,
        textAlign: "center",
        color: "white"
    }
});

const homeCards = [
    {
        cover: Running,
        text: 'Je prépare un marathon'
    },
    {
        cover: Fight,
        text: 'Je prépare un combat'
    },
    {
        cover: Abdo,
        text: 'Je souhaite perdre du poids'
    },
    {
        cover: Lift,
        text: 'Je souhaite prendre de la masse'
    },
]

function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Header navigation={navigation} />
            <ScrollView style={{ paddingHorizontal: 20 }}>
                <Text type="bold" style={{ fontSize: 18, marginBottom: 20, color: "white" }}>Quel est mon objectif ?</Text>
                <View style={styles.cardContainer}>
                    {homeCards.map((card, index) => (
                        <TouchableOpacity key={index} style={styles.cardWrapper} onPress={() => {navigation.navigate('Form')}}>
                            <Card style={styles.card}>
                                <Card.Cover source={card.cover} style={styles.cardCover} />
                                <Card.Content style={{ paddingVertical: 10, flex: 1, justifyContent: "center" }}>
                                    <Text type="medium" style={styles.cardText}>{card.text}</Text>
                                </Card.Content>
                            </Card>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </View>
    )
}

export default HomeScreen;
