import React, { Component } from "react";
import {
    Text, View, StyleSheet, Image,
    ImageBackground,ScrollView, TouchableHighlight
} from "react-native"
import bgPokemon from "../assets/bgPokemon.jpg";
import pokebola from "../assets/pokebola.png";
import Icon from "react-native-vector-icons/MaterialIcons";
import FormPokemon from "./FormPokemon";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default class Info extends Component{


    state = {
        id: '',
        nome: '',
        altura: '',
        peso: '',
        tipo: '',
        avatarUrl: null,
        qtdPokemons: ''

    }

    componentDidMount() {
        this.onGoBack = this.listarTodosPokemons.bind(this);
        this.setState(this.props.route.params.pokemon);
    }


    listarTodosPokemons = async () => {
        const { id } = this.state;
        try {
            let pokemons = JSON.parse(await AsyncStorage.getItem("pokemons"));
            let pokemon = pokemons.find(editarPokemon => editarPokemon.id === id);
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

    const { nome, id, tipo, peso, altura, avatarUrl } = this.state;

        return (
            <ScrollView>
                <ImageBackground source={bgPokemon} resizeMode="cover" style={{ width: '100%'}}>
                <View style={styles.container}>
                <View style={styles.header}>
                        <Image source={{ uri: avatarUrl}}
                               style={{ width: 170, height: 170, marginVertical: 25 }} />


                    <TouchableHighlight style={styles.editButton} activeOpacity={0.7}>
                        <Icon name="edit"
                              size={25}
                              color="black"
                              onPress={() => this.props.navigation.navigate('FormPokemon',
                                  {pokemon:this.state, onGoBackCallback: this.onGoBack})}
                        />
                    </TouchableHighlight>

                </View>


                    <View style={styles.body}>

                    <Text style={styles.paragraph}>
                        {nome}
                    </Text>

                    <Text style={styles.paragraph2}>
                        #{id}
                    </Text>

                    <View style={{ flexDirection: 'row', justifyContent: 'center'}}>
                        <Text style={styles.text2}>
                            {tipo}
                            {/*{ tipo = "fogo" ? <Image source={require('../assets/fire.png')} style={styles.icon} /> :*/}
                            {/*<Image source={require('../assets/water.png')}/>}*/}
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

                    <Text style={{ textAlign: 'justify', marginHorizontal: 36, marginTop: 20, fontSize: 18, color: '#fff'}}>
                        {nome} é um Pokémon do banco de dados do Pokédex, do tipo {tipo},
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
    icon: {
        width: 20,
        height: 20
    },
    body: {
        flex: 1,
        backgroundColor: '#100f0e',
        borderTopStartRadius: 60,
        borderTopEndRadius: 60
    },
    subTitle: {
        fontSize: 22,
        fontWeight: '600',
        marginTop: 10,
        marginLeft: 30,
        color: '#ffffff'
    },
    pokebola: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 0
    },
    editButton: {
        position: 'absolute',
        right: 20,
        bottom: 150,
        width: 30,
        height: 30,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "rgba(208,204,204,0.32)"
    },
    paragraph: {
        textAlign: 'center',
        marginTop: 20,
        fontWeight: 'bold',
        marginHorizontal: 30,
        fontSize: 26,
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
        fontSize: 18,
        color: '#fff'
    },
    verticleLine:{
        height: '60%',
        width: 2,
        marginTop: 20,
        backgroundColor: '#ffffff',
    }
});
