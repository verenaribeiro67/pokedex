import React, { Component } from "react";
import { View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./code/Home";
import Info from "./code/Info";
import Perfil from "./code/Perfil";
import ViewPokemon from "./code/ViewPokemon";
import ListaPokemons from "./code/ListaPokemons";
import FormPokemon from "./code/FormPokemon";
import EditForm from "./code/EditFrom";

const Stack = createNativeStackNavigator();

export default class App extends Component{
    render(){
        return(
            <View style={{flex:1}}>
               <NavigationContainer>
                   <Stack.Navigator initialRouteName={Home}
                                    screenOptions={{
                       headerShown: false
                   }}
                                    options={({ navigation }) => {
                                        return {
                                            title: 'Pokédex',
                                            headerRight: () => (
                                                <Text style={{ color: '#fff' }}>Versão 1.0.0</Text>
                                            )
                                        }
                                    }}>
                       <Stack.Screen name="Home"
                                     component={Home}
                       />


                       <Stack.Screen name="Perfil"
                                     component={Perfil}
                                     options={{
                                         title: "Perfil",
                                         headerShown: true,
                                         headerStyle: {
                                             backgroundColor: '#BE1D2D',
                                             elevation: 0,
                                             shadowOpacity: 0,
                                             borderBottomWidth: 0,
                                         },
                                         headerTintColor: '#fff',
                                         headerShadowVisible: false, // applied here
                                         headerBackTitleVisible: false,
                                     }}
                       />


                       <Stack.Screen name="ListaPokemons"
                                     component={ListaPokemons}
                                     options={{
                                         title: "Voltar",
                                         headerShown: true,
                                         headerStyle: {
                                             backgroundColor: '#BE1D2D',
                                             elevation: 0,
                                             shadowOpacity: 0,
                                             borderBottomWidth: 0,
                                         },
                                         headerTintColor: '#fff',
                                         headerShadowVisible: false, // applied here
                                         headerBackTitleVisible: false,
                                     }}
                       />


                       <Stack.Screen name="FormPokemon"
                                     component={FormPokemon}
                                     options={{
                                         title: "Voltar",
                                         headerShown: true,
                                         headerStyle: {
                                             backgroundColor: '#BE1D2D',
                                             elevation: 0,
                                             shadowOpacity: 0,
                                             borderBottomWidth: 0,
                                         },
                                         headerTintColor: '#fff',
                                         headerShadowVisible: false, // applied here
                                         headerBackTitleVisible: false,
                                     }}
                       />


                       <Stack.Screen name="EditForm"
                                     component={EditForm}
                                     options={{
                                         title: "Voltar",
                                         headerShown: true,
                                         headerStyle: {
                                             backgroundColor: '#BE1D2D',
                                             elevation: 0,
                                             shadowOpacity: 0,
                                             borderBottomWidth: 0,
                                         },
                                         headerTintColor: '#fff',
                                         headerShadowVisible: false, // applied here
                                         headerBackTitleVisible: false,
                                     }}
                       />

                       <Stack.Screen name="Info"
                                     component={Info}
                                     options={{
                                         title: "Voltar",
                                         headerShown: true,
                                         headerStyle: {
                                             backgroundColor: '#BE1D2D',
                                             elevation: 0,
                                             shadowOpacity: 0,
                                             borderBottomWidth: 0,
                                         },
                                         headerTintColor: '#fff',
                                         headerShadowVisible: false, // applied here
                                         headerBackTitleVisible: false,
                                     }}
                       />

                       <Stack.Screen name="ViewPokemon"
                                     component={ViewPokemon}
                                     options={{
                                         title: "Voltar",
                                         headerShown: true,
                                         headerStyle: {
                                             backgroundColor: '#BE1D2D',
                                             elevation: 0,
                                             shadowOpacity: 0,
                                             borderBottomWidth: 0,
                                         },
                                         headerTintColor: '#fff',
                                         headerShadowVisible: false, // applied here
                                         headerBackTitleVisible: false,
                                     }}
                       />

                   </Stack.Navigator>
               </NavigationContainer>
            </View>
        )
    }
}



