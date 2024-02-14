import React from 'react';
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity, Image, ImageBackground } from 'react-native';


const LoginScreen = ({ navigation }) => {

  return (
    <View style={styles.container1}>
      <ImageBackground
        source={require('../Images/5d613e08b4f05_thumb900.webp')}
        style={styles.logo}
      >
        <Text style={styles.text}>Login</Text>
        <View style={styles.input_container}>
          <TextInput style={styles.input}
            keyboardType='email-address'
            placeholder='Enter email address'

          ></TextInput>
          <TextInput style={styles.input}
            placeholder='Enter password'
            keyboardType='default'
            secureTextEntry={true}
          >
          </TextInput>
          <TouchableOpacity style={styles.bttnbg}>
            <Text style={styles.bttn}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.txt2}>
            SignUp?
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  txt2: {
    fontSize: 16,
    color: '#FFF',
    marginTop: 5,
    textDecorationLine: 'underline',
  },
  container1: {
    flex: 1
  },
  logo: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    color: 'black',
    fontSize: 32,
  },
  input: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: 'white'
  },
  input_container: {
    marginTop: 8
  },
  bttnbg: {
    borderRadius: 10,
    backgroundColor: 'skyblue',
    height: 40,
    padding: 5,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bttn: {
    color: '#FFF',
    fontSize: 19,
    fontWeight: '700',
    textAlign: 'center'
  }
})

export default LoginScreen;