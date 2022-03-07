import React from 'react';
import { View, Image, TextInput, Text, TouchableOpacity, StyleSheet, StatusBar, SafeAreaView, ScrollView}  from 'react-native';

export default function App() {
  return ( 

    <View style={styles.container}>      
      <StatusBar hidden/>  

      <Image
        source = { require ('./assets/Floor13.png')}
        style = {styles.logo}
      />

      <TextInput 
        placeholder = 'User'
        style = {styles.input}
      />

      <TextInput 
        placeholder = 'Senha'
        style = {styles.input}
      />

      <View style = {styles.forgotContainer}>
        <TouchableOpacity>
          <Text style = {styles.forgotText}>Esqueceu sua senha?</Text>
        </TouchableOpacity>
      </View> 

        <TouchableOpacity style = {styles.loginButton}>
          <Text style = {styles.loginText}>Fazer login</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style = {styles.registerText}>Cadastre-se aqui!</Text>
        </TouchableOpacity>

    </View>
       
  );
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#8b4513',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: '100%',
    height: '40%',
    marginTop: 0,
    marginBottom: 40,
  },
  input: {
    width: '90%',
    height: 42,
    backgroundColor: '#f4f3f3',
    marginBottom: 20,
    padding: 8,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#e0e0e0'
  },
  forgotContainer: {
    width: '90%',
    alignItems: 'flex-end',
  },
  forgotText: {
    color: '#fffafa'
  },
  loginButton: {
    width: '80%',
    marginTop: '10%',
    backgroundColor: '#deb887',
    marginBottom: '2%',
    height: '10%',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  loginText: {
    fontSize: 16,
    fontWeight: 'bold',    
    color: '#8b4513'
  },
  registerText: {
    color: '#fffafa'
  }
  
});

