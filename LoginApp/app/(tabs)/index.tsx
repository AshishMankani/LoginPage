import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { RootStackParamList } from './types';

const HomePage = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [userID, setUserID] = useState('');
  const [password, setPassword] = useState('');

  const handleForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('@/assets/images/background.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={userID}
          onChangeText={setUserID}
          placeholder="User ID"
          autoCapitalize="none"
        />

        <View style={styles.passwordContainer}>
          <TextInput
            style={[styles.input, { flex: 1 }]}
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            secureTextEntry
          />
          <Text style={styles.eyeIcon}>
            {'👁'}
          </Text>
        </View>

        <TouchableOpacity 
          onPress={handleForgotPassword}
          style={styles.forgotPasswordButton}
        >
          <Text style={styles.forgotPassword}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}>Log In</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#002366',
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  logo: {
    height: 300,
    width: 380,
  },
  inputContainer: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    flex: 1,
  },
  label: {
    marginTop: 15,
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#999',
    paddingVertical: 8,
    marginBottom: 5,
    fontSize: 16,
    fontWeight: '800',
    color: 'black',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  eyeIcon: {
    marginLeft: 10,
    fontSize: 18,
  },
  forgotPassword: {
    color: '#007bff',
    marginTop: 10,
    textDecorationLine: 'underline',
  },
  loginButton: {
    backgroundColor: '#444',
    paddingVertical: 15,
    alignItems: 'center',
  },
  loginText: {
    color: '#fff',
    fontSize: 18,
  },
  forgotPasswordButton: {
    alignSelf: 'flex-start',
    marginTop: 10,
  },
});


export default HomePage;
