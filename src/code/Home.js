import React, { Component } from "react";
import {Text, View, StyleSheet, Image, ImageBackground, TouchableHighlight, Button} from "react-native";
import bgHome from "../assets/bgHome.png";
import {createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer} from "@react-navigation/native";
import ListaPokemons from "./ListaPokemons";
import Info from "./Info";
import Perfil from "./Perfil";

export default class Home extends Component{
    render(){
    return (
        <View style={styles.container}>


            <ImageBackground source={bgHome} resizeMode="cover" style={styles.image} >

                <View style={styles.header}>
                    <Image source={require('../assets/logo.png')}
                           style={{ width: '60%', height: '60%', resizeMode: 'contain' }} />
                </View>

                <View style={styles.body}>

                    <TouchableHighlight style={styles.button}
                                        onPress={() => this.props.navigation.navigate("ListaPokemons")}>
                        <Text style={styles.text}>Entrar</Text>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.button}
                                        onPress={() => this.props.navigation.navigate("Info")}>
                        <Text style={styles.text}>Informações</Text>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.button}
                                        onPress={() => this.props.navigation.navigate("Perfil")}>
                        <Text style={styles.text}>Perfil</Text>
                    </TouchableHighlight>

                </View>

                <View style={styles.footer}>
                    <Text style={[styles.text, { color: '#ffffff'}]}>Versão 1.0.0</Text>
                </View>

            </ImageBackground>
        </View>
    )}

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        flex: 1,
        justifyContent: 'center'
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    body: {
        flex: 2
    },
    button: {
        marginTop: 10,
        marginHorizontal: 40,
        backgroundColor: '#FFCE31',
        padding: 15,
        borderRadius: 10
    },
    text: {
        textAlign: 'center',
        fontWeight: '900'
    },
    footer: {
        flex: 0.6
    }
});
