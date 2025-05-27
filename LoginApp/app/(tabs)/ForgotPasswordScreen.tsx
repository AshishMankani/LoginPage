import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text } from 'react-native';

const ForgotPasswordScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../../assets/images/contact_admin.jpg')} // Replace with actual path
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>Contact your admin</Text>
      <Text style={styles.text}>
        {'Password can only be reset by your admin. Contact the admin and request them to reset your password.'}
      </Text>
      <Text style={styles.text}>
        For the admin&apos;s assistance -{'\n'}
        To reset the password, the admin will have to:
      </Text>
      <Text style={styles.instructions}>
        Open Q2Pay → Settings → Users{'\n'}
        → Select user → Reset password
      </Text>
      <Text style={styles.footer}>Password reset successfully?</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#002366',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: '80%',
    height: 200,
    marginVertical: 30,
  },
  title: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 15,
  },
  text: {
    fontSize: 15,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  instructions: {
    fontSize: 15,
    color: '#fff',
    fontWeight: '600',
    textAlign: 'center',
    marginVertical: 10,
  },
  footer: {
    color: '#ccc',
    marginTop: 30,
  },
});

export default ForgotPasswordScreen;
