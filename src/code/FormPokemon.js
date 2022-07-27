import React, { Component } from "react";
import {Text, View, StyleSheet, ImageBackground, Button, ScrollView} from "react-native"
import {Input} from "react-native-elements";
import bgForm from "../assets/bgForm.jpg";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default class FormPokemon extends Component{

    state = {
        id: null,
        nome: '',
        altura: '',
        peso: '',
        tipo: '',
        avatarUrl: null,
        qtdPokemons: null

    }


    componentDidMount() {
        this.setState(this.props.route.params.pokemon);
        this.onGoBack = this.listarTodosPokemons.bind(this);
    }

    listarTodosPokemons = async () => {

        try {
            let pokemons = JSON.parse(await AsyncStorage.getItem("pokemons"));
            pokemons = Array.isArray(pokemons) ? pokemons : [];
            // pokemons.sort((a,b) => a.name.localeCompare(b.name)) //sort -> ordenação de nomes
            // AsyncStorage.removeItem("pokemons");
            //verificação de array se estiver okay seta a lista, se não seta vazio
            this.setState({pokemons}); //seta o estado dos pokemons
        }
        catch (e) {
            console.log(e);
            return e; //retorna o erro
        }
    }

    validaDadosPokemons = async () => {
        const { id } = this.state;
        let pokemons = JSON.parse(await AsyncStorage.getItem("pokemons"));
        pokemons = Array.isArray(pokemons) ? pokemons : [];
        if(id){
            this.listarTodosPokemons.bind(this);
            return this.atualizarPokemons(pokemons);
            //se existir id, atualize, se não,  adicione
        }
        pokemons.push({...this.state, id:
                Math.floor(Math.random() * 10000) + 1});
        return this.salvarPokemons(pokemons); //adiciona
    }


    salvarPokemons = ( pokemons ) => {
        AsyncStorage.setItem('pokemons',JSON.stringify(pokemons));
        if(typeof this.props.route.params?.onGoBackCallback == 'function'){
            this.props.route.params.onGoBackCallback();
        }
        this.props.navigation.goBack();
    }


    atualizarPokemons = ( pokemons ) => {
        const { id } = this.state; //pegar o id do state
        let novosPokemons = pokemons.map(
            editarPokemon => {
            if(editarPokemon.id === id){
                editarPokemon = this.state;

                if(typeof this.props.route.params?.onGoBackCallback == 'function'){
                    this.props.route.params.onGoBackCallback();
                }
            }
            return editarPokemon;
        });
        this.salvarPokemons(novosPokemons); //se não editar, salvar
    }


    render(){
        const { nome, avatarUrl, peso, altura, tipo, id } = this.state;
        return (

            <ScrollView>
            <View style={styles.container}>
                <View style={styles.header}>
                    <ImageBackground source={bgForm} resizeMode="cover" style={{ height: '100%'}}>
                        { id != null ? <Text style={styles.title}>Editar Pokémon</Text> :
                               <Text style={styles.title}>Criar Pokémon</Text> }
                    </ImageBackground>
                </View>


                <View style={styles.body}>
                    <View style={{ margin: 20}}>


                        <Input
                            onChangeText={novoNome => this.setState({nome: novoNome})}
                            style={styles.input}
                            placeholder="Nome do Pokémon"
                            returnKeyType={'next'}
                            maxLength={60}
                            value={nome}
                        />

                        <Input
                            onChangeText={novoPeso => this.setState({peso: novoPeso})}
                            style={styles.input}
                            placeholder="Peso do Pokémon"
                            keyboardType={"number-pad"}
                            returnKeyType={'next'}
                            maxLength={60}
                            value={peso}
                        />

                        <Input
                            onChangeText={novaAltura => this.setState({altura: novaAltura})}
                            style={styles.input}
                            placeholder="Altura do Pokémon"
                            keyboardType={"number-pad"}
                            returnKeyType={'next'}
                            maxLength={60}
                            value={altura}
                        />

                        <Input
                            onChangeText={novoTipo => this.setState({tipo: novoTipo})}
                            style={styles.input}
                            placeholder="Tipo de Pokémon (Ex: Fogo)"
                            returnKeyType={'next'}
                            maxLength={60}
                            value={tipo}
                        />


                        <Input
                            onChangeText={novaUrl => this.setState({avatarUrl: novaUrl})}
                            style={styles.input}
                            placeholder="URL da Imagem"
                            returnKeyType={'next'}
                            value={avatarUrl}
                        />

                        <Button
                            title="Salvar"
                            color="#000"
                            onPress={() => this.validaDadosPokemons()}
                        />

                    </View>
                </View>
            </View>
            </ScrollView>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#73BFED'
    },
    header: {
        flex: 1
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 30,
        color: '#ffffff',
        textAlign: 'center',
        backgroundColor: '#0000001a',
        marginHorizontal: 50,
        borderRadius: 5,
        marginBottom: 50
    },
    body: {
        flex: 3,
        backgroundColor: '#fff'
    },
    input: {
        height: 50,
        marginBottom: 15,
    }
});
