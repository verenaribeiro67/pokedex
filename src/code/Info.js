import React, { Component } from "react";
import { Text, View, StyleSheet, Image, ImageBackground, TouchableHighlight, Button} from "react-native"
import {createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer} from "@react-navigation/native";
import Home from "./Home";

export default class Info extends Component{
    render(){
        return (

            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>Informações</Text>
                    <Text style={styles.subTitle}>Sobre o app Pokédex</Text>
                </View>

                <View style={styles.body}>
                    <Text style={styles.paragraph}>
                        Pokédex é um aplicativo não oficial e bem projetado para que todos possam usar.
                        Contém dados detalhados sobre cada Pokémon, para todos os jogos da série principal já lançados.
                    </Text>

                    <Text style={styles.paragraph2}>
                        Desenvolvido por Verena Ribeiro
                    </Text>

                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#BE1D2D'
    },
    header: {
        flex: 1,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 30,
        marginLeft: 30,
        color: '#ffffff'
    },
    body: {
        flex: 4,
        // borderTopStartRadius: 60,
        // borderTopEndRadius: 60,
        backgroundColor: '#fff'
    },
    subTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginTop: 10,
        marginLeft: 30,
        color: '#ffffff'
    },
    paragraph: {
        textAlign: 'justify',
        marginTop: 50,
        marginHorizontal: 30,
        fontSize: 20
    },
    paragraph2: {
        textAlign: 'center',
        marginTop: 50,
        marginHorizontal: 30,
        fontSize: 18,
        fontWeight: 'bold'
    }
});
