import React, { Component } from "react";
import {
    Text, View, StyleSheet, Image,
    ImageBackground, TouchableOpacity, ScrollView, Button
} from "react-native"
import {createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer} from "@react-navigation/native";
import ListaPokemons from "./ListaPokemons";
import Home from "./Home";
import bgPokemon from "../assets/bgPokemon.jpg";
import pokebola from "../assets/pokebola.png";
import {Avatar, ListItem} from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialIcons";

export default class Info extends Component{


    state = {
        id: '',
        nome: '',
        altura: '',
        peso: '',
        tipo: '',
        avatarUrl: '',
        qtdPokemons: 0

    }

    componentDidMount() {
        // this.setState(this.props.route)
        this.setState(this.props.route.params);
        this.onGoBack = this.listarTodosPokemons.bind(this);
    }


    listarTodosPokemons = async () => {
        const { id, nome, tipo, altura, peso, qtdPokemons } = this.state;
        try {
            let pokemons = JSON.parse(await AsyncStorage.getItem("pokemons"));
            let pokemon = pokemons.find(editarPokemon => editarPokemon.id === id);
            console.log(qtdPokemons)
            if(this.props.route.params.onGoBackCallback.isFunction()){
                this.props.route.params.onGoBackCallback();
            }
            this.setState(pokemon);
        }
        catch (e){
            console.log(e);
            return e;
        }
    }

render(){

    const { nome, id, tipo, peso, altura, avatarUrl, qtdPokemons } = this.state;

        return (
            <ScrollView>
                <ImageBackground source={bgPokemon} resizeMode="cover" style={{ width: '100%'}}>
                <View style={styles.container}>
                <View style={styles.header}>
                        <Image source={{ uri: this.props.route.params.avatarUrl.toString()}}
                               style={{ width: 170, height: 170 }} />
                </View>


                    <View style={styles.body}>

                    <Text style={styles.paragraph}>
                        {nome}
                    </Text>

                    <Text style={styles.paragraph2}>
                        {id}
                    </Text>

                    <View style={{ flexDirection: 'row', justifyContent: 'center'}}>
                        <Text style={styles.text2}>
                            {tipo}
                        </Text>

                        <View style={styles.verticleLine}></View>

                        <Text style={styles.text2}>
                            {altura} m
                        </Text>

                        <View style={styles.verticleLine}></View>

                        <Text style={styles.text2}>
                            {peso} Kg
                        </Text>

                    </View>

                    <Text style={{ textAlign: 'justify', marginHorizontal: 40, marginTop: 20, fontSize: 16, color: '#fff'}}>
                        {nome} é um Pokémon do banco de dados do Pokédex, tipo {tipo},
                        com altura de {altura} m e {peso} kg.
                    </Text>

                    <View style={styles.pokebola}>
                    <Image source={pokebola}
                           style={{ width: 100, height: 100, textAlign: 'center', marginBottom: 120}} />
                    </View>

                </View>
            </View>
                </ImageBackground>
    </ScrollView>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#73BFED'
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#73BFED'
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 30,
        marginLeft: 30,
        color: '#ffffff'
    },
    body: {
        flex: 1,
        backgroundColor: '#100f0e',
        borderTopStartRadius: 60,
        borderTopEndRadius: 60
    },
    subTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginTop: 10,
        marginLeft: 30,
        color: '#ffffff'
    },
    pokebola: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 40
    },
    paragraph: {
        textAlign: 'center',
        marginTop: 20,
        fontWeight: 'bold',
        marginHorizontal: 30,
        fontSize: 30,
        color: '#fff'
    },
    paragraph2: {
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 20,
        marginHorizontal: 150,
        fontSize: 18,
        fontWeight: 'bold',
        backgroundColor: '#BE1D2D',
        borderRadius: 20,
        color: '#fff'
        // borderWidth: 1,
        // borderColor: '#5498c2'
    },
    text2: {
        marginTop: 20,
        marginLeft: 'auto',
        marginRight: 'auto',
        fontSize: 20,
        color: '#fff'
    },
    verticleLine:{
        height: '60%',
        width: 2,
        marginTop: 20,
        backgroundColor: '#ffffff',
    }
});
