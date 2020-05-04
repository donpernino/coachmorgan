import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import Text from '../TextCustom';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Logo from '../../../assets/logo.png';
import { bgColor, blueColor, bgGrayColor } from '../../../stylesVars';

const headerStyles = StyleSheet.create({
    header: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#2b2f37",
        width: "100%",
        height: 85,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: 0,
        paddingHorizontal: 20,
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

function Header({navigation}) {
    return (
        <View style={headerStyles.header}>
            <TouchableOpacity onPress={() => navigation.openDrawer()} style={{ marginRight: "auto" }}>
                <Icon name="menu" size={36} style={{ color: 'white'}}></Icon> 
            </TouchableOpacity>
            <TouchableOpacity
                style={{ display: "flex", flexDirection: "row", alignItems: "center", marginRight: "auto" }}
                onPress={() => {navigation.navigate('Home')}}
            >
                <View style={{
                    borderRadius: 30,
                    backgroundColor: "rgba(106,120,255,0.5)",
                    width: 60,
                    height: 60,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: 10,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.2,
                    shadowRadius: 3.84,
                    elevation: 5,
                }}>
                    <Image
                        style={{
                            width: 50,
                            height: 50,
                            margin: "auto"
                        }}
                        source={Logo}
                    />
                </View>
                <Text type="medium" style={{ color: 'white', fontSize: 18 }}>Coach </Text>
                <Text type="bold" style={{ color: '#6a78ff', fontSize: 20 }}>Morgan</Text>
                <Text type="bold" style={{ color: '#6a78ff', fontSize: 18 }}>.</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Header;
