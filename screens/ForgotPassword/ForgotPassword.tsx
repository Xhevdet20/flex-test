import {NavigationProp, ParamListBase} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

interface Props {
  navigation: NavigationProp<ParamListBase>;
}

function ForgotPassword(props: Props): JSX.Element {
  const [linkSent, setLinkSent] = useState<boolean>(false);

  const onForgotPassword = () => {
    setLinkSent(true);
    //   props.navigation.navigate('Products');
  };

  return (
    <ScrollView
      style={{backgroundColor: 'rgb(30, 52, 69)'}}
      showsVerticalScrollIndicator={false}>
      <SafeAreaView>
        <View>
          <Image
            source={require('../../assets/logo.png')}
            style={styles.logo}
          />
          <View style={styles.content}>
            {!linkSent && (
              <Text style={styles.title}>You’ve forgotten your password?</Text>
            )}
            {!linkSent && (
              <View style={styles.loginFormContainer}>
                <View style={styles.inputContainer}>
                  <TextInput
                    placeholder="Username / Email"
                    placeholderTextColor="rgba(35, 31, 32, 0.5)"
                    style={styles.input}
                  />
                  <Icon
                    name="user"
                    size={30}
                    color="rgba(30, 52, 69, 0.1)"
                    style={styles.icon}
                  />
                </View>
              </View>
            )}
            <Text style={styles.disclaimer}>
              Please enter your username or email address so we can send you a
              confirmation link.
            </Text>
            <Button
              style={{width: '80%'}}
              theme={{
                colors: {
                  primary: linkSent ? 'rgba(29, 161, 147, 1)' : 'white',
                  onPrimary: '#000',
                },
              }}
              mode="contained"
              onPress={() => onForgotPassword()}>
              {linkSent ? 'Confirmation Link Sent' : 'Send Confirmation Link'}
            </Button>
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('Login');
              }}
              style={styles.backButton}>
              <AntDesign
                name="arrowleft"
                size={20}
                color="white"
              />
              <Text style={styles.backButtonText}> Back to Login </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  loginFormContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 16,
    marginTop: '20%',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#fff',
    width: '80%',
    borderRadius: 5,
    marginTop: '5%',
    padding: 5,
    color: 'black',
  },
  logo: {
    alignSelf: 'center',
    marginTop: 100,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    position: 'absolute',
    top: 24,
    right: 10,
    zIndex: 2,
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  disclaimer: {
    color: 'white',
    fontSize: 12,
    width: '80%',
    paddingTop: 15,
    paddingBottom: 15,
    textAlign: 'center',
  },
  backButton: {
    padding: 20,
    display : 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  backButtonText: {
    color: 'white',
  },
});

export default ForgotPassword;
