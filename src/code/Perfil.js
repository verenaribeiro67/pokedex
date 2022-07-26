import React, { Component, useState } from "react";
import {
    Text,
    View,
    StyleSheet,
    Image,
    ImageBackground,
    TouchableHighlight,
    Button,
    TextInput,
    TouchableOpacity
} from "react-native"
import {createNativeStackNavigator } from "@react-navigation/native-stack";
import treinadorPokemon from "../assets/treinador-de-pokemon.png";
import { NavigationContainer} from "@react-navigation/native";
import Home from "./Home";
import bgPokemon from "../assets/bgPokemon.jpg";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default class Perfil extends Component{



    render(){

        return (

            <View style={styles.container}>
                <View style={styles.header}>
                    <ImageBackground source={bgPokemon} resizeMode="cover" >
                    <Image source={treinadorPokemon} style={{ width: 100, height: 100 }} />
                    </ImageBackground>
                </View>

                <View style={styles.body}>
                    <Text style={styles.title}>Treinador(a) Pokémon</Text>


                    <TouchableHighlight style={styles.button} onPress={() => console.log(this.props.navigation.getParam)}>
                        <Text style={{ color: '#fff'}}>Salvar</Text>
                    </TouchableHighlight>
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
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomStartRadius: 60,
        borderBottomEndRadius: 60
    },
    body: {
        flex: 3,
        // borderTopStartRadius: 60,
        // borderTopEndRadius: 60,
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    subTitle: {
        fontSize: 12,
        fontWeight: '600',
        marginTop: 10,
        color: '#ffffff'
    },
    title: {
        fontSize: 18,
        marginTop: 20,
        color: '#000000'
    },
    button: {
        backgroundColor: '#5aa2cc',
        height: 40,
        width: '80%',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
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
