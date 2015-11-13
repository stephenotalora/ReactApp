/**
 * Created by jono on 2015-11-12.
 */
import React from 'react-native';
const { StyleSheet } = React;

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#fff',
    },
    instructions: {
        textAlign: 'center',
        color: '#fff',
        marginBottom: 5,
    },
    image: {
        justifyContent: 'center',
        top: 1,
    }
});

export default styles;