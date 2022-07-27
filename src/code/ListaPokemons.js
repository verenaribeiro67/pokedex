import React, { Component } from "react";
import {Text, View, StyleSheet, TouchableHighlight, FlatList, Alert, TextInput, ScrollView} from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from "react-native-vector-icons/MaterialIcons";
import {Avatar, ListItem, Button} from "react-native-elements";
import ViewPokemon from "./ViewPokemon";
import FormPokemon from "./FormPokemon";

export default class ListaPokemons extends Component{

    state = {
        pokemons: []
    }

    constructor(props) { //constrói no início
        super(props);
        this.onGoBack = this.listarTodosPokemons.bind(this); //cria uma chamada
    }

    componentDidMount() {
        this.listarTodosPokemons();
        //lista ao inciar o app
    }


    salvarPokemons = ( pokemons ) => {
        AsyncStorage.setItem('pokemons',JSON.stringify(pokemons));
        this.listarTodosPokemons();
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

    verificarSeVazia = () => {
        let listaPokemons = <Text>Cadastre o seu Pokémon</Text>;

        if (this.state.pokemons.length){
            listaPokemons = <FlatList data={this.state.pokemons}
                                      renderItem={this.exibir}
                                      roundAvatar
                                      keyExtractor={pokemon => pokemon.id.toString()}/>
        }

        return listaPokemons;
    }


    acoesSwipeDireita = (pokemon) => {
        return (
            <>
                <Button
                    onPress={() => this.deletar(pokemon)}
                    type="clear"
                    icon={<Icon name="delete" size={25} color="white"/>}
                    buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}
                />

            </>
        )
    }

    deletar = (pokemon) => {


        Alert.alert('Excluir Pokémon',
                    'Tem certeza que deseja excluir?',
            [{
                text: 'Sim',
                onPress:() => {
                    console.log(pokemon.id)
                    const {pokemons} = this.state;
                    let novosPokemons = pokemons.filter(selectPokemon => selectPokemon.id != pokemon.id);
                    // console.log(novosPokemons)
                    novosPokemons.forEach(p => console.log(p.id));
                    this.salvarPokemons(novosPokemons);
                }
            },
            {
                text: 'Não'
            }
        ])
    }

    // pesquisa = ({ item: pokemon }) => {
    //
    //     let poke = pokemon.find(p => p.nome === pokemon.nome);
    //     return poke;
    // }

    exibir = ({ item: pokemon }) => {
        // console.log('Pokemon: '+pokemon.id)
       return(
           <>
               <ListItem.Swipeable
               key={pokemon.id.toString()}
               bottomDivider
               chevron={{ color: 'black' }}
               rightContent={this.acoesSwipeDireita(pokemon)}
               onPress={() => this.props.navigation.navigate("ViewPokemon",
                   {pokemon, onGoBackCallback:this.onGoBack})}>
                   <Avatar source={{ uri: pokemon.avatarUrl }} size={60} />
                   <ListItem.Content>
                       <ListItem.Title>
                           <Text style={{ fontSize: 20}}>{pokemon.nome}</Text>
                       </ListItem.Title>
                   </ListItem.Content>
                   <Icon
                       raised
                       name='keyboard-arrow-right'
                       color='red'
                       size={25}
                       onPress={() => this.props.navigation.navigate("ViewPokemon",
                                    { pokemon, onGoBackCallback:this.onGoBack.listarTodosPokemons() })}/>

                   <ListItem.Chevron color="white" />
               </ListItem.Swipeable>
           </>
       )
    }

    render(){

        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginRight: 20, marginBottom: -20}}>
                        <Icon name="circle" size={15} color="red" style={styles.icon}/>
                        <Icon name="circle" size={15} color="yellow" style={styles.icon}/>
                        <Icon name="circle" size={15} color="green" style={styles.icon}/>
                    </View>

                    <Text style={styles.title}>Pokédex</Text>
                    <Text style={styles.subTitle}>Banco de dados completo</Text>


                        {/*<TextInput*/}
                        {/*placeholder="Pesquisar Pokémon..."*/}
                        {/*style={styles.input}*/}

                        {/*/>*/}

                </View>

                <View style={styles.body}>
                    {this.verificarSeVazia()}
                </View>

                <TouchableHighlight style={styles.addButton} activeOpacity={0.7}>
                    <Icon name="add"
                          size={30}
                          color="white"
                          onPress={() => this.props.navigation.navigate("FormPokemon", {onGoBackCallback:this.onGoBack})}
                    />
                </TouchableHighlight>

                {/*<TouchableHighlight style={styles.searchButton} activeOpacity={0.7}>*/}
                {/*    <Icon name="search"*/}
                {/*          size={30}*/}
                {/*          color="white"*/}
                {/*          onPress={() => this.props.navigation.navigate("FormPokemon",*/}
                {/*              {onGoBackCallback: this.onGoBack})}*/}
                {/*    />*/}
                {/*</TouchableHighlight>*/}


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
        flex: 1
    },
    input: {
        backgroundColor: '#fff',
        borderBottomColor: '#BE1D2D',
        borderWidth: 2,
        marginHorizontal: 20,
        marginBottom: 30,
        borderRadius: 10
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 20,
        marginLeft: 30,
        color: '#ffffff'
    },
    body: {
        flex: 3,
        backgroundColor: '#fff',
        paddingBottom: 40
    },
    subTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginTop: 10,
        marginLeft: 30,
        marginBottom: 30,
        color: '#ffffff'
    },
    addButton: {
        position: 'absolute',
        right: 30,
        bottom: 80,
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e7c537'
    },
    searchButton: {
        position: 'absolute',
        right: 30,
        bottom: 0,
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#b99d27'
    },
    icon: {
        marginRight: 10,
        borderColor: 'rgba(0,0,0,0.59)',
        borderWidth: 1,
        borderRadius: 15
    }
});
