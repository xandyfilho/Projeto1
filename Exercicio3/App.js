import React from 'react';
import { View, Image, TextImput, Text, TouchableOpacity, StyleSheet, StatusBar, SafeAreaView} from 'react-native';

export default function App3() {
  return(
    <SafeAreaView style = { styles.container}>
      <StatusBar hidden/>

      <View style = {[styles.box, {width: '99%', height: '30%'}]}> 
        <Image source = {require( './assets/jettTop.jpeg')}
          style = {styles.imageBox}/> 
        </View>

      <View style = {[styles.box, {width: '99%', height: '25%', alignItems:'center', justifyContent:'center'}]}>
            <Text style = {styles.textBox2}>HABILIDADES</Text>
        </View>

      <View style = {[styles.box, {width: '32%', height: '20%'}]}>
        <Image source = {require( './assets/Q.jpeg')}
          style = {styles.imageBox}/>
        </View>
      
      <View style = {[styles.box, {width: '32%', height: '20%'}]}>
        <Image source = {require( './assets/E.jpeg')}
          style = {styles.imageBox}/>
        </View>

      <View style = {[styles.box, {width: '32%', height: '20%'}]}>
        <Image source = {require( './assets/C.jpeg')}
          style = {styles.imageBox}/>
        </View> 

      <View style = {[styles.box, {width: '32%', height: '22%'}]}>
        <Image source = {require( './assets/Ult.jpeg')}
          style = {styles.imageBox}/>
        </View>

      <View style = {[styles.box, {width: '65%', height: '22%', backgroundColor: '#0f161b'}]}>
        <Text style = {styles.textBot}>EQUIPA um conjunto de facas de arremesso de alta precisão. FOGO para lançar uma única faca e recarregar facas ao matar. ALTERNATE FIRE para lançar todas as adagas restantes, mas não recarrega em uma morte.</Text>
        </View> 

    </SafeAreaView>
  );
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#0f161b',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },

  box: {
    width: 100,
    height: 100,
    backgroundColor: '#ff4b50',
    margin: 2,
  
  },
  textBox2: {
    fontSize: 40,
    color: '#0f161b',
    fontWeight: 'bold'
    
  },
  imageBox: {
    width: '100%',
    height: '100%'
  },
  textBot: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 15,
    padding: 5

  }
});