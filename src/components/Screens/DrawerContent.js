import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from '../TextCustom';
import {
    Avatar,
    Title,
    Drawer
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { bgColor, blueColor, bgGrayColor } from '../../../stylesVars';

export function DrawerContent(props) {
    return (
        <View style={{
            flex:1,
            backgroundColor: bgColor,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 5,
            },
            shadowOpacity: 0.2,
            shadowRadius: 6.27,
            elevation: 10,
        }}>
            <DrawerContentScrollView {...props} style={{paddingTop: 0}}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View
                            style={{ flexDirection:'row' }}
                        >
                            <Avatar.Image 
                                source={{
                                    uri: 'http://thibaut-pernin.com/static/media/avatar.1469253e.png'
                                }}
                                size={50}
                                style={{
                                    shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 2,
                                    },
                                    shadowOpacity: 0.2,
                                    shadowRadius: 3.84,
                                    elevation: 5,
                                }}
                            />
                            <View style={{ marginLeft:15, flexDirection:'column' }}>
                                <Text style={styles.title} type="bold">Thibaut</Text>
                                <Text style={{color: "white"}}>Fitness rookie</Text>
                            </View>
                        </View>
                    </View>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="home-outline" 
                                color={"white"}
                                size={size}
                                />
                            )}
                            label="Accueil"
                            labelStyle={{color: "white"}}
                            style={styles.drawerItem}
                            onPress={() => {props.navigation.navigate('Home')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="information-outline" 
                                color={"white"}
                                size={size}
                                />
                            )}
                            label="Mes infos"
                            labelStyle={{color: "white"}}
                            style={styles.drawerItem}
                            onPress={() => {props.navigation.navigate('Form')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                    name="account-outline" 
                                    color={"white"}
                                    size={size}
                                />
                            )}
                            label="Mon programme"
                            labelStyle={{color: "white"}}
                            style={styles.drawerItem}
                            onPress={() => {props.navigation.navigate('Profile')}}
                        />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                            name="exit-to-app" 
                            color={"white"}
                            size={size}
                        />
                    )}
                    label="Se déconnecter"
                    labelStyle={{color: "white"}}
                />
            </Drawer.Section>
        </View>
    )
};

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
      paddingVertical: 0
    },
    userInfoSection: {
        marginTop: -4,
        paddingLeft: 20,
        paddingVertical: 15,
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
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
      color: blueColor
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15
    },
    drawerSection: {
      marginBottom: 15,
      borderBottomColor: bgGrayColor,
      borderBottomWidth: 2
    },
    drawerItem: {
        borderTopWidth: 2,
        borderTopColor: bgGrayColor,
        borderRadius: 0,
        marginHorizontal: 0,
        marginVertical: 0,
        paddingHorizontal: 10,
    },
    bottomDrawerSection: {
        marginBottom: 0,
        borderColor: bgGrayColor,
        borderTopWidth: 2,
        borderBottomWidth: 2,
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
  });