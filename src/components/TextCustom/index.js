import React from 'react';
import { Text } from 'react-native';

function TextCustom(props) {
    const setFontType = (type) => {
        switch (type) {
            case 'regular':
                return 'jost-regular';
            case 'medium':
                return 'jost-medium';
            case 'bold':
                return 'jost-bold';
            default:
                return 'jost-regular';
        }
    }

    const font = setFontType(props.type ? props.type : 'regular');

    const style = [{ fontFamily: font }, props.style || {}]

    return (
        <Text style={style}>
            {props.children}
        </Text>
    )
}

export default TextCustom;
