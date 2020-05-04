import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import {
    Card
} from 'react-native-paper';
import Header from '../Header';
import Text from '../TextCustom';
import { bgColor, blueColor, bgGrayColor, pinkColor } from '../../../stylesVars';

import Nutrition from '../../../assets/images/nutrition.jpg';
import Programme from '../../../assets/images/programme.jpg';
import Squat from '../../../assets/images/squat.jpg';
import Deadlift from '../../../assets/images/deadlift.jpg';

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
          height: 235,
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

const profileCards = [
    {
        cover: Nutrition,
        text: 'Accéder à mon suivi de nutrition'
    },
    {
        cover: Programme,
        text: 'Accéder à mon entrainement'
    },
]

const exercises = [
    {
        cover: Squat,
        title: '20 x squats (40kg)',
        nbSeries: 5,
        pause: '1mn30'
    },
    {
        cover: Deadlift,
        title: '12 x deadlift (45kg)',
        nbSeries: 4,
        pause: '1mn15'
    },
    {
        cover: Squat,
        title: '20 x squats (40kg)',
        nbSeries: 5,
        pause: '1mn30'
    },
    {
        cover: Deadlift,
        title: '12 x deadlift (45kg)',
        nbSeries: 4,
        pause: '1mn15'
    },
]

function ProfileScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Header navigation={navigation} />
            <ScrollView style={{ paddingHorizontal: 20 }}>
                <Text type="bold" style={{ fontSize: 18, marginBottom: 20, color: "white" }}>Mon programme</Text>
                <View style={styles.cardContainer}>
                    {profileCards.map((card, index) => (
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
                <View style={{ marginTop: 20 }}>
                    <Text type="bold" style={{ fontSize: 18, marginBottom: 25, color: "white" }}>Aujourd'hui</Text>
                    <View style={{ display: "flex", flexDirection: "column" }}>
                        <View style={{ display: "flex", flexDirection: "row" }}>
                            <Text type="medium" style={{ fontSize: 14, marginBottom: 20, color: "white", backgroundColor: pinkColor, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginRight: 10, width: 28, height: 28 }}>3</Text>
                            <Text type="medium" style={{ fontSize: 16, marginBottom: 20, color: pinkColor }}>Jour 3</Text>
                        </View>
                    </View>
                    <Text type="medium" style={{ fontSize: 16, marginBottom: 15, color: "white" }}>Résumé :</Text>
                        {exercises.map((exercise, index) => (
                            <View style={{
                                display: "flex",
                                alignItems: "center",
                                flexDirection: "row",
                                marginBottom: 15,
                                backgroundColor: bgGrayColor,
                                shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 1,
                                },
                                shadowOpacity: 0.22,
                                shadowRadius: 2.22,
                                elevation: 3,
                                borderRadius: 6
                            }}>
                                <Image
                                    source={exercise.cover}
                                    style={{
                                        width: 75,
                                        height: 75,
                                        borderRadius: 6,
                                    }}
                                />
                                <View style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    paddingHorizontal: 15,
                                    flex: 1
                                }}>
                                    <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: 15 }}>
                                        <Text type="medium" style={{ fontSize: 14, color: "white" }}>{exercise.title}</Text>
                                        <Text type="medium" style={{ fontSize: 14, color: blueColor }}>{exercise.nbSeries} séries</Text>
                                    </View>
                                    <View style={{ display: "flex", flexDirection: "row" }}>
                                        <Text type="regular" style={{ fontSize: 14, color: "white", marginRight: 5 }}>
                                            Temps de repos : 
                                        </Text>
                                        <Text type="medium" style={{ fontSize: 14, color: "white" }}>
                                            {exercise.pause}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        ))}
                    </View>
            </ScrollView>
        </View>
    )
}

export default ProfileScreen;
