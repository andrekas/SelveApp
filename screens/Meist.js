import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class Meist extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    Meist
                </Text>
                <Text style={styles.body}>
                    Antud rakendus on loodud Tarkvaratehnika aine raames. Rakenduse eesmärgiks on
                    koondada Tallinna selvepesulad ühte rakendusse. Mõnusat kasutamist!
                </Text>
                <Text/>
                <Text style={styles.footer}>
                    Autorid:
                    Andre Laurimaa, Martin Amor, Mark Luik
                </Text>
            </View>
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
        textAlignVertical: 'top',
        margin: 10,
    },
    body: {
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    footer: {
        textAlignVertical: 'bottom',
        textAlign: 'center',
    }
});