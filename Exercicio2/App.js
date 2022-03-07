import React from "react";
import {StyleSheet, View, Text, Image} from 'react-native';

export default function Exercicio2(){
    return (
        <View>
            <Image
                source = { require ( './assets/jett.jpeg')}
                style={ estilos.fundo }/>
        </View>
    );
};

const estilos = StyleSheet.create({
    fundo:{    
        padding: '10%',
        width: 420, 
        height: 800
    }
})
