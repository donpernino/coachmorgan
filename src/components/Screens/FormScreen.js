import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, Button } from 'react-native';
import Header from '../Header';
import Text from '../TextCustom';
import {
    TextInput,
    RadioButton
} from 'react-native-paper';
import { bgColor, blueColor, bgGrayColor, pinkColor } from '../../../stylesVars';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: bgColor,
        paddingTop: 120,
    },
    input: {
        backgroundColor: bgGrayColor,
        color: "white",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.2,
        shadowRadius: 6.27,
        elevation: 10,
        fontFamily: 'jost-medium',
        marginBottom: 30,
    },
    radioGroup: {
        backgroundColor: bgGrayColor,
        color: "white",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.2,
        shadowRadius: 6.27,
        elevation: 10,
        fontFamily: 'jost-medium',
        marginTop: 10,
        marginBottom: 30,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        borderBottomWidth: 2,
        borderBottomColor: "white",
        paddingHorizontal: 12,
        paddingVertical: 12
    }
});

function FormScreen({ navigation }) {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [frequency, setFrequency] = useState('');

    return (
        <View style={styles.container}>
            <Header navigation={navigation} />
            <ScrollView style={{ paddingHorizontal: 20 }}>
                <Text type="bold" style={{ fontSize: 18, marginBottom: 20, color: "white" }}>Je génère mon programme</Text>
                <TextInput
                    label='Quel est votre poids actuel ?'
                    defaultValue={weight}
                    style={styles.input}
                    theme={{
                        dark: true,
                        colors: {
                            primary: "white",
                            placeholder: "white",
                            accent: "white",
                            text: "white"
                        }
                    }}
                    underlineColor="white"
                    selectionColor="white"
                />
                <TextInput
                    label='Quelle est votre taille ?'
                    defaultValue={height}
                    style={styles.input}
                    theme={{
                        dark: true,
                        colors: {
                            primary: "white",
                            placeholder: "white",
                            accent: "white",
                            text: "white"
                        }
                    }}
                    underlineColor="white"
                    selectionColor="white"
                />
                <RadioButton.Group>
                    <Text style={{ color: 'white', fontSize: 16 }}>Combien de fois vous entrainez-vous par semaine ?</Text>
                    <View style={styles.radioGroup}>
                        <View style={{ display: "flex", flexDirection: "row", alignItems: "center", marginBottom: 10 }}>
                            <RadioButton
                                value="1"
                                status={frequency === "1" ? 'checked' : 'unchecked'}
                                onPress={() => setFrequency('1')}
                                theme={{
                                    dark: true,
                                    colors: {
                                        primary: "white",
                                        placeholder: "white",
                                        accent: "white",
                                        text: "white"
                                    }
                                }}
                            />
                            <Text style={{ color: 'white' }}>1 à 2 fois par semaine</Text>
                        </View>
                        <View style={{ display: "flex", flexDirection: "row", alignItems: "center", marginBottom: 10 }}>
                            <RadioButton
                                value="2"
                                status={frequency === "2" ? 'checked' : 'unchecked'}
                                onPress={() => setFrequency('2')}
                                theme={{
                                    dark: true,
                                    colors: {
                                        primary: "white",
                                        placeholder: "white",
                                        accent: "white",
                                        text: "white"
                                    }
                                }}
                            />
                            <Text style={{ color: 'white' }}>3 à 5 fois par semaine</Text>
                        </View>
                        <View style={{ display: "flex", flexDirection: "row", alignItems: "center", marginBottom: 10 }}>
                            <RadioButton
                                value="3"
                                status={frequency === "3" ? 'checked' : 'unchecked'}
                                onPress={() => setFrequency('3')}
                                theme={{
                                    dark: true,
                                    colors: {
                                        primary: "white",
                                        placeholder: "white",
                                        accent: "white",
                                        text: "white"
                                    }
                                }}
                            />
                            <Text style={{ color: 'white' }}>plus de 5 fois par semaine</Text>
                        </View>
                    </View>
                </RadioButton.Group>
                <TouchableOpacity
                    onPress={() => {navigation.navigate('Profile')}}
                    style={{
                        backgroundColor: pinkColor,
                        color: "white",
                        textTransform: 'initial',
                        height: 45,
                        borderRadius: 6,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 5,
                        },
                        shadowOpacity: 0.2,
                        shadowRadius: 6.27,
                        elevation: 10,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: 25,
                        textAlign: "center"
                    }}
                ><Text type="medium" style={{ color: "white" }}>Je génère mon programme gratuit</Text></TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {navigation.navigate('Profile')}}
                    style={{
                        backgroundColor: blueColor,
                        color: "white",
                        textTransform: 'initial',
                        height: 45,
                        borderRadius: 6,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 5,
                        },
                        shadowOpacity: 0.2,
                        shadowRadius: 6.27,
                        elevation: 10,
                        display: "flex",
                        alignItems: "center",
                        justifyContent:"center",
                        textAlign: "center",
                        marginBottom: 30
                    }}
                ><Text type="medium" style={{ color: "white" }}>Je veux un programme personnalisé du coach</Text></TouchableOpacity>
            </ScrollView>
        </View>
    )
}

export default FormScreen;
