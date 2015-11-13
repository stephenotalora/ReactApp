/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React from 'react-native';
var styles = require('./src/css/globalcss');

const {
    AppRegistry,
    Text,
    View,
    Image
} = React;

let counter = 0;
var TestProject = React.createClass({
    componentWillMount() {
        ++counter;
        console.log('component will mount');
    },

    componentDidMount() {
        ++counter;
        console.log('the value is: ' + counter);
    },

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Hello World!
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit index.ios.js
                </Text>
                <Text style={styles.instructions}>
                    Press Cmd+R to reload,{'\n'}
                    Cmd+D or shake for dev menu
                </Text>
                <Text>The current counter is {counter}</Text>
                <Image style={styles.image}
                       source={require('./src/images/logo_og.png')} />
            </View>
        );
    }
});

AppRegistry.registerComponent('TestProject', () => TestProject);
