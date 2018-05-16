import React, { Component } from 'react';
import {
    StyleSheet,
    WebView
} from 'react-native';

export default class Pesulad extends Component {
    render() {
        return (
            <WebView
                source={{uri: 'http://dijkstra.cs.ttu.ee/~andlau/SelveLeidja'}}
                style={{marginTop: 20}}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});