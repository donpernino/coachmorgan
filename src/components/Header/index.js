import React from 'react';
import { StyleSheet, View } from 'react-native';
import Text from '../TextCustom';

const headerStyles = StyleSheet.create({
    header: {
      backgroundColor: 'red',
      width: "100%",
      height: "80px",
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      top: 0,
    },
});

function Header() {
    return (
        <View style={headerStyles.header}>
            <Text type="medium">Header</Text>
        </View>
    )
}

export default Header;
