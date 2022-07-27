import React, { Component, useState } from "react";
import {
    Text,
    View,
    StyleSheet,
    Image,
    ImageBackground,
    TouchableHighlight, TextInput,
} from "react-native"
import Ash from "../assets/ash.png";
import bgPokemon from "../assets/bgPokemon.jpg";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default class Perfil extends Component{

state = {
    nomeTreinador: ''
}



salvarNomeTreinador = () => {
    const { nomeTreinador } = this.state;
    AsyncStorage.setItem('nomeTreinador',JSON.stringify(nomeTreinador));
}

    render(){

        const { nomeTreinador } = this.state;

        return (

            <View style={styles.container}>
                <View style={styles.header}>

                    <Image source={Ash} style={{ width: 100, height: 150 }} />

                    <Text style={{ color: '#fff',
                                   fontSize: 20,
                                   fontWeight: 'bold',
                                   marginVertical: 10}
                    }>
                        {nomeTreinador}</Text>

                </View>

                <View style={styles.body}>

                    <Text style={styles.title}>Treinador(a) Pokémon</Text>

                    <TextInput placeholder="Informe o nome do treinador"
                               style={styles.input}
                               onChangeText={novoTreinador => this.setState({nomeTreinador : novoTreinador})}
                    />

                    <TouchableHighlight style={styles.button}
                                        onPress={() => this.salvarNomeTreinador()}>
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
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomStartRadius: 60,
        borderBottomEndRadius: 60,
        width: '100%',
        height: '100%'
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
        marginTop: 40,
        color: '#000000'
    },
    button: {
        backgroundColor: '#171616',
        height: 40,
        width: '80%',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        marginBottom: 40,
        fontSize: 20
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
