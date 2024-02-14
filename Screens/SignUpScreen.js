import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const SignUpScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.signup}
      source={require('../Images/img2.jpg')}>
        <View style={styles.con2}>

        <Text style={styles.txt}>Welcome!</Text>
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
            SignUp
          </Text>
        </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.txt2}>
          Login?
        </Text>
      </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  con2: {
    marginTop:8
  },
  container: {
    flex: 1,
  },
  signup: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center'
  },
  txt: {
    textAlign: 'center',
    color: 'white',
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
  bttnbg: {
    borderRadius: 10,
    backgroundColor: 'green',
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
  },
  txt2: {
    fontSize: 16,
    color: '#FFF',
    marginTop: 5,
    textDecorationLine: 'underline',
  }
  
})

export default SignUpScreen;