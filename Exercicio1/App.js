import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const Exercicio1 = () => (
  <View style = {estilos.container}>
    <View style = {estilos.header}>
      <Text style = {estilos.cameraText}>Camera</Text>
      <Image
        source = { require ( './assets/3pontos.png' )}
        style = {estilos.imgCabe}/>
    </View>
    <View style = {estilos.box}>
      <Image
        source = { require ( './assets/cameraamarela.png' )}
        style = {estilos.boxLogo}/> 
    </View>
</View>
);

const estilos = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff',
  },

  boxLogo: {
    width:50,
    height:50,
    margin: 350,
    marginTop: 550,
  },

  imgCabe: {
    width:15,
    height:15,
    marginTop: 2,
    margin: 320 ,
  },

  box: {
    flex: 6,
  },

  header: {
      height: 40,
      backgroundColor: '#0000ff',
      paddingTop: 10,
      paddingHorizontal: 20,
      flexDirection: 'row',

  },

  cameraText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 13,
  },

});

export default Exercicio1;